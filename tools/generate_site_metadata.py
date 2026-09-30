#!/usr/bin/env python3
"""Generate RSS, sitemap, entries.json, and homepage metadata for McAmner Journal."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from email.utils import format_datetime
from html import escape, unescape
from pathlib import Path
import re
import json
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
SITE_URL = "https://mcamner.github.io/mcamner-journal/"
FEED_URL = SITE_URL + "feed.xml"
AUTHOR = "Mattias Camner"
TODAY = datetime.now().date().isoformat()

MAIN_PAGE_ORDER = [
    "index.html",
    "journal.html",
    "catalogue.html",
    "films.html",
    "books.html",
    "archive.html",
    "objects.html",
    "about.html",
]

PRIORITIES = {
    "index.html": "1.0",
    "journal.html": "0.9",
    "catalogue.html": "0.9",
    "films.html": "0.8",
    "books.html": "0.8",
    "archive.html": "0.8",
    "objects.html": "0.8",
    "about.html": "0.8",
}

@dataclass
class Page:
    rel: str
    url: str
    title: str
    description: str
    lastmod: str
    priority: str


@dataclass
class CatalogueItem:
    href: str
    title: str
    code: str
    order: int


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_if_changed(path: Path, content: str) -> None:
    if path.exists() and read(path) == content:
        return
    path.write_text(content, encoding="utf-8")


def match(pattern: str, text: str) -> str:
    found = re.search(pattern, text, re.I | re.S)
    return unescape(found.group(1).strip()) if found else ""


def clean_title(title: str) -> str:
    return re.sub(r"\s+\|\s+McAmner(?: Journal)?$", "", title).strip()


def page_url(rel: str) -> str:
    return SITE_URL if rel == "index.html" else SITE_URL + rel


def existing_lastmods() -> dict[str, str]:
    sitemap = DOCS / "sitemap.xml"
    if not sitemap.exists():
        return {}
    try:
        root = ET.fromstring(read(sitemap))
    except ET.ParseError:
        return {}

    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    values: dict[str, str] = {}
    for url in root.findall("sm:url", ns):
        loc = url.findtext("sm:loc", default="", namespaces=ns)
        lastmod = url.findtext("sm:lastmod", default="", namespaces=ns)
        if loc and lastmod:
            values[loc] = lastmod
    return values


def all_html_pages() -> list[str]:
    pages = []
    for path in DOCS.glob("**/*.html"):
        rel = path.relative_to(DOCS).as_posix()
        if path.name.startswith("google"):
            continue
        pages.append(rel)

    ordered = [p for p in MAIN_PAGE_ORDER if p in pages]
    posts = sorted(p for p in pages if p.startswith("posts/"))
    rest = sorted(p for p in pages if p not in ordered and not p.startswith("posts/"))
    return ordered + posts + rest


def collect_pages() -> list[Page]:
    lastmods = existing_lastmods()
    pages = []
    for rel in all_html_pages():
        html = read(DOCS / rel)
        title = match(r"<title>(.*?)</title>", html)
        description = match(r'<meta\s+name="description"\s+content="([^"]*)"', html)
        url = page_url(rel)
        pages.append(
            Page(
                rel=rel,
                url=url,
                title=title,
                description=description,
                lastmod=lastmods.get(url, TODAY),
                priority=PRIORITIES.get(rel, "0.7"),
            )
        )
    return pages


def generate_sitemap(pages: list[Page]) -> None:
    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for page in pages:
        lines.extend(
            [
                "  <url>",
                f"    <loc>{escape(page.url)}</loc>",
                f"    <lastmod>{page.lastmod}</lastmod>",
                f"    <priority>{page.priority}</priority>",
                "  </url>",
            ]
        )
    lines.append("</urlset>")
    write_if_changed(DOCS / "sitemap.xml", "\n".join(lines) + "\n")


def rss_date(lastmod: str) -> str:
    parsed = datetime.strptime(lastmod, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    return format_datetime(parsed)


def generate_feed(pages: list[Page]) -> None:
    posts = {page.rel: page for page in pages if page.rel.startswith("posts/")}
    order = {item.href: item.order for item in catalogue_items()}
    items = sorted(
        posts.values(),
        key=lambda page: (page.lastmod, order.get(page.rel, 0), page.rel),
        reverse=True,
    )[:20]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">')
    lines.append("  <channel>")
    lines.append("    <title>McAmner Journal</title>")
    lines.append(f"    <link>{SITE_URL}</link>")
    lines.append("    <description>Films, books, music, objects, systems, and culture by Mattias Camner.</description>")
    lines.append("    <language>en</language>")
    lines.append(f"    <lastBuildDate>{rss_date(max(page.lastmod for page in pages))}</lastBuildDate>")
    lines.append(f'    <atom:link href="{FEED_URL}" rel="self" type="application/rss+xml" />')
    for page in items:
        title = clean_title(page.title)
        lines.extend(
            [
                "    <item>",
                f"      <title>{escape(title)}</title>",
                f"      <link>{escape(page.url)}</link>",
                f"      <guid isPermaLink=\"true\">{escape(page.url)}</guid>",
                f"      <description>{escape(page.description)}</description>",
                f"      <dc:creator>{escape(AUTHOR)}</dc:creator>",
                f"      <pubDate>{rss_date(page.lastmod)}</pubDate>",
                "    </item>",
            ]
        )
    lines.append("  </channel>")
    lines.append("</rss>")
    write_if_changed(DOCS / "feed.xml", "\n".join(lines) + "\n")


def catalogue_count() -> int:
    html = read(DOCS / "catalogue.html")
    return len(re.findall(r"<article\s+id=", html))


def catalogue_items() -> list[CatalogueItem]:
    html = read(DOCS / "catalogue.html")
    items: list[CatalogueItem] = []
    for order, article in enumerate(re.findall(r"(<article\b.*?</article>)", html, re.S), start=1):
        href = match(r'<h2><a href="([^"]+)">', article)
        title = clean_title(match(r'<h2><a href="[^"]+">(.*?)</a></h2>', article))
        code = match(r"<span>([A-Z]\d{3})</span>", article)
        if href:
            items.append(CatalogueItem(href=href, title=title, code=code, order=order))
    return items


def journal_items() -> list[CatalogueItem]:
    html = read(DOCS / "journal.html")
    items: list[CatalogueItem] = []
    for order, article in enumerate(re.findall(r"(<article\b.*?</article>)", html, re.S), start=1):
        href = match(r'<h2><a href="([^"]+)">', article)
        title = clean_title(match(r'<h2><a href="[^"]+">(.*?)</a></h2>', article))
        number = match(r"<span>(\d{3})</span>", article)
        if href and number:
            items.append(CatalogueItem(href=href, title=title, code=f"N{number}", order=order))
    return items


def update_index_latest(pages: list[Page]) -> None:
    path = DOCS / "index.html"
    html = read(path)
    page_by_rel = {page.rel: page for page in pages}
    latest_items = sorted(
        [item for item in catalogue_items() + journal_items() if item.href in page_by_rel],
        key=lambda item: (page_by_rel[item.href].lastmod, item.order),
        reverse=True,
    )[:3]

    rows = []
    for item in latest_items:
        kind = "BOOK" if item.code.startswith("B") else "FILM" if item.code.startswith("F") else "MUSIC" if item.code.startswith("M") else "NOTE" if item.code.startswith("N") else "SERIES"
        command_type = {
            "B": "book",
            "F": "film",
            "M": "music",
            "N": "note",
            "S": "series",
        }.get(item.code[:1], "open")
        command = f"/{command_type} {item.code[1:]}"
        rows.append(
            "\n".join(
                [
                    f'        <a class="signal-row" href="{item.href}">',
                    f"          <span>[{kind}]</span>",
                    f"          <strong>{escape(item.title)}</strong>",
                    f"          <em>{escape(command)}</em>",
                    "        </a>",
                ]
            )
        )

    latest = "\n".join(
        [
            '    <section class="signal-panel" aria-label="Latest entries">',
            '      <div class="signal-panel__header">',
            "        <h2>&gt;&gt; latest entries</h2>",
            "        <span>fixed index</span>",
            "      </div>",
            "",
            '      <div class="signal-list">',
            "\n".join(rows),
            "      </div>",
            "    </section>",
        ]
    )
    html = re.sub(
        r'    <section class="signal-panel" aria-label="Latest entries">.*?    </section>',
        latest,
        html,
        count=1,
        flags=re.S,
    )
    write_if_changed(path, html)


SIGNAL_NODES = [
    ("journal", "notes + systems"),
    ("catalogue", "culture index"),
    ("films", "cinema signals"),
    ("books", "reading index"),
    ("objects", "material notes"),
    ("archive", "visual memory"),
]

# Sections that are unique content; catalogue overlaps films/books.
SIGNAL_TOTAL = ("journal", "catalogue", "objects", "archive")


def section_stats(name: str, page_by_rel: dict[str, Page]) -> dict[str, str | int]:
    html = read(DOCS / f"{name}.html")
    articles = re.findall(r"(<article\b.*?</article>)", html, re.S)
    page_lastmod = page_by_rel[f"{name}.html"].lastmod if f"{name}.html" in page_by_rel else TODAY
    best: tuple[str, int, str] = (page_lastmod, -1, "")
    for article in articles:
        href = match(r'<h2><a href="([^"]+)">', article)
        title = clean_title(match(r"<h2>(?:<a [^>]+>)?(.*?)(?:</a>)?</h2>", article))
        number = match(r"<span>(\d{3})</span>", article)
        lastmod = page_by_rel[href].lastmod if href in page_by_rel else page_lastmod
        candidate = (lastmod, int(number or 0), re.sub(r"<[^>]+>", "", title))
        if candidate[:2] > best[:2]:
            best = candidate
    return {"count": len(articles), "last": best[0], "latest": best[2]}


def update_signal_map(pages: list[Page]) -> None:
    path = DOCS / "index.html"
    html = read(path)
    page_by_rel = {page.rel: page for page in pages}
    stats = {name: section_stats(name, page_by_rel) for name, _ in SIGNAL_NODES}
    for name in SIGNAL_TOTAL:
        html = re.sub(
            rf'(<a href="{name}\.html" data-labels="[^"]+">\s*<strong>)\d+(</strong>)',
            lambda m: f'{m[1]}{int(stats[name]["count"]):03d}{m[2]}',
            html,
            count=1,
        )
    total = sum(int(stats[name]["count"]) for name in SIGNAL_TOTAL)
    last_name = max(stats, key=lambda name: (stats[name]["last"], -[n for n, _ in SIGNAL_NODES].index(name)))

    # Core sits at (500,110); left chips end at x=265, right chips start at x=735.
    anchors = [(265, 40), (265, 110), (265, 180), (735, 40), (735, 110), (735, 180)]
    lines = [
        f'          <path data-line="{name}" d="M500 110 L{x} {y}"></path>'
        for (name, _), (x, y) in zip(SIGNAL_NODES, anchors)
    ]

    nodes = []
    for index, (name, label) in enumerate(SIGNAL_NODES, start=1):
        s = stats[name]
        nodes.append(
            "\n".join(
                [
                    f'        <a class="signal-node signal-node--{name}" href="{name}.html" data-node="{index}" '
                    f'data-count="{int(s["count"]):03d}" data-last="{s["last"]}" data-latest="{escape(str(s["latest"]))}">',
                    f"          <span>{index:02d}</span>",
                    f"          <strong>/{name}</strong>",
                    f"          <b>{int(s['count']):03d}</b>",
                    f"          <em>{label}</em>",
                    f'          <time datetime="{s["last"]}">{s["last"]}</time>',
                    "        </a>",
                ]
            )
        )

    section = "\n".join(
        [
            '    <section class="signal-map" aria-labelledby="signal-map-title">',
            '      <div class="signal-map__header">',
            '        <h2 id="signal-map-title">&gt;&gt; signal map</h2>',
            '        <span data-signal-status>06 nodes / keys 1-6</span>',
            "      </div>",
            "",
            '      <div class="signal-map__canvas">',
            '        <svg class="signal-map__lines" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">',
            "\n".join(lines),
            "        </svg>",
            "",
            '        <div class="signal-map__core" data-signal-core aria-hidden="true">',
            f"          <strong>{total:03d}</strong>",
            "          <span>signals</span>",
            f'          <em>last /{last_name}</em>',
            "        </div>",
            "",
            "\n".join(nodes),
            "      </div>",
            "    </section>",
        ]
    )
    signal = {
        "total": total,
        "last": last_name,
        "nodes": [
            {
                "id": index,
                "path": f"/{name}",
                "label": label,
                "count": int(stats[name]["count"]),
                "last": stats[name]["last"],
                "latest": stats[name]["latest"],
            }
            for index, (name, label) in enumerate(SIGNAL_NODES, start=1)
        ],
    }
    write_if_changed(DOCS / "signal.json", json.dumps(signal, ensure_ascii=False, indent=2) + "\n")

    html = re.sub(
        r'    <section class="signal-map".*?    </section>',
        lambda _: section,
        html,
        count=1,
        flags=re.S,
    )
    write_if_changed(path, html)


# ── entries.json ───────────────────────────────────────────────────────────
#
# One generated fact table for the command surface. `/tonight`, `/quiz`,
# `/refs`, `/fortune`, `/since` and `/ascii` all need the same things — a
# post's type, tags, date, description and outgoing links — and none of them
# can get those from `routes` alone. Deriving them in the browser would mean
# fetching 78 post pages; deriving them here costs one build.
#
# Tags live only in the index pages (`<div class="film-tags">` plus the
# `data-tags` attribute, which not every page carries), never in the post
# itself, so the index is the only source for them.

INDEX_PAGES = ("catalogue.html", "films.html", "books.html", "objects.html", "journal.html")

ARTICLE_BLOCK = re.compile(r'<article\s+id="([a-z]+)-(\d+)"([^>]*)>(.*?)</article>', re.S)
TAG_SPAN = re.compile(r'<div class="film-tags">(.*?)</div>', re.S)


def index_tags() -> dict[str, list[str]]:
    """Map a post's relative path to its tags, gathered from the index pages.

    A post can appear on two pages (catalogue and films both list the films),
    so tags union rather than overwrite, keeping first-seen order.
    """
    tags: dict[str, list[str]] = {}
    for name in INDEX_PAGES:
        page = DOCS / name
        if not page.exists():
            continue
        for _kind, _num, attrs, body in ARTICLE_BLOCK.findall(read(page)):
            href = match(r'<h2><a href="([^"]+)">', body)
            if not href:
                continue
            found: list[str] = []
            found.extend(match(r'data-tags="([^"]*)"', attrs).split())
            span = TAG_SPAN.search(body)
            if span:
                found.extend(re.findall(r"<span>([^<]+)</span>", span.group(1)))
            bucket = tags.setdefault(href, [])
            for tag in found:
                tag = tag.strip().lower()
                if tag and tag not in bucket:
                    bucket.append(tag)
    return tags


def site_routes() -> dict[str, str]:
    """The `const routes = {…}` table from site.js, as key -> docs-relative path."""
    text = read(DOCS / "site.js")
    body = re.search(r"const routes\s*=\s*\{(.*?)\n\};", text, re.S)
    if not body:
        raise SystemExit("ERROR: could not locate `const routes = { … };` in site.js")
    prefix = "/mcamner-journal/"
    out = {}
    for key, target in re.findall(r'"([^"]+)"\s*:\s*"([^"]+)"', body.group(1)):
        out[key] = target[len(prefix):] if target.startswith(prefix) else target
    return out


def typed_route_for(rel: str, routes: dict[str, str]) -> tuple[str, str]:
    """Return (route key, type) for a post, preferring the `/type NNN` alias."""
    keys = [key for key, target in routes.items() if target == rel]
    for key in sorted(keys):
        found = re.fullmatch(r"/([a-z]+) (\d{3})", key)
        if found:
            return key, found.group(1)
    return (keys[0] if keys else ""), "post"


POST_LINK = re.compile(r'href="([a-z0-9-]+\.html)"')


def post_links(rel: str, html: str, known: set[str]) -> list[str]:
    """Sibling posts this post links to, as slugs.

    Only the bare `name.html` form is a sibling link. `../name.html` goes back
    to an index page and the absolute mcamner.github.io URL is the post's own
    canonical, so neither is an edge.
    """
    self_slug = rel.split("/")[-1]
    out: list[str] = []
    for href in POST_LINK.findall(html):
        if href == self_slug or f"posts/{href}" not in known:
            continue
        slug = href[: -len(".html")]
        if slug not in out:
            out.append(slug)
    return out


def generate_entries(pages: list[Page]) -> None:
    routes = site_routes()
    tags = index_tags()
    posts = [page for page in pages if page.rel.startswith("posts/")]
    known = {page.rel for page in posts}

    entries = []
    for page in sorted(posts, key=lambda p: p.rel):
        rel = page.rel
        key, kind = typed_route_for(rel, routes)
        entries.append(
            {
                "slug": rel[len("posts/") : -len(".html")],
                "path": "/" + rel,
                "title": clean_title(page.title),
                "route": key,
                "type": kind,
                "date": page.lastmod,
                "desc": page.description,
                "tags": tags.get(rel, []),
                "links": post_links(rel, read(DOCS / rel), known),
            }
        )

    archive = []
    archive_html = DOCS / "archive.html"
    if archive_html.exists():
        for num, src, title in re.findall(
            r'<article id="item-(\d+)">\s*<img src="([^"]+)"[^>]*>\s*<span>[^<]*</span>\s*<h2>([^<]*)</h2>',
            read(archive_html),
            re.S,
        ):
            archive.append({"id": num, "src": src, "title": unescape(title).strip()})

    payload = {
        "count": len(entries),
        "archive_count": len(archive),
        "entries": entries,
        "archive": archive,
    }
    write_if_changed(
        DOCS / "entries.json", json.dumps(payload, ensure_ascii=False, indent=1) + "\n"
    )


def update_catalogue_count(count: int) -> None:
    path = DOCS / "catalogue.html"
    html = read(path)
    html = re.sub(
        r"(catalogue loaded · <strong>)\d+( items</strong>)",
        rf"\g<1>{count:03d}\2",
        html,
        count=1,
    )
    write_if_changed(path, html)


def ensure_feed_links() -> None:
    link = f'<link rel="alternate" type="application/rss+xml" title="McAmner Journal RSS" href="{FEED_URL}">'
    for path in DOCS.glob("**/*.html"):
        if path.name.startswith("google"):
            continue
        html = read(path)
        if 'type="application/rss+xml"' in html:
            continue
        html = html.replace("</head>", f"{link}\n</head>", 1)
        write_if_changed(path, html)


def main() -> None:
    count = catalogue_count()
    update_catalogue_count(count)
    ensure_feed_links()
    pages = collect_pages()
    update_index_latest(pages)
    update_signal_map(pages)
    generate_sitemap(pages)
    generate_feed(pages)
    generate_entries(pages)


if __name__ == "__main__":
    main()
