#!/usr/bin/env python3
"""Generate RSS, sitemap, and small homepage metadata for McAmner Journal."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from email.utils import format_datetime
from html import escape, unescape
from pathlib import Path
import re
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


def update_index_latest_and_count(count: int, pages: list[Page]) -> None:
    path = DOCS / "index.html"
    html = read(path)
    page_by_rel = {page.rel: page for page in pages}
    latest_items = sorted(
        [item for item in catalogue_items() if item.href in page_by_rel],
        key=lambda item: (page_by_rel[item.href].lastmod, item.order),
        reverse=True,
    )[:3]

    rows = []
    for item in latest_items:
        kind = "BOOK" if item.code.startswith("B") else "FILM" if item.code.startswith("F") else "MUSIC" if item.code.startswith("M") else "SERIES"
        command_type = {
            "B": "book",
            "F": "film",
            "M": "music",
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
    html = re.sub(
        r'(<a href="catalogue\.html" data-labels="[^"]+">\s*<strong>)\d+(</strong>)',
        rf"\g<1>{count:03d}\2",
        html,
        count=1,
        flags=re.S,
    )
    write_if_changed(path, html)


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
    update_index_latest_and_count(count, pages)
    generate_sitemap(pages)
    generate_feed(pages)


if __name__ == "__main__":
    main()
