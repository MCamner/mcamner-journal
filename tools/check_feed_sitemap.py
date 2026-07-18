#!/usr/bin/env python3
"""Verify that feed.xml and sitemap.xml keep up with docs/posts/.

Posts are plain files, so publishing one is a file edit — and it is easy to
ship a post that is reachable on the site but invisible to RSS readers and
search engines. That is exactly what happened to notes 023-025: they went
live with no feed item and no sitemap entry, and nothing caught it because
neither file was covered by CI.

Checks:
  1. Both files are well-formed XML.
  2. sitemap.xml has exactly one entry per file in docs/posts/ — no missing
     posts, no entries pointing at files that no longer exist.
  3. Every feed item points at a post that exists on disk.
  4. The feed is prefix-complete: it holds the N newest posts with no gaps.
     Any post strictly newer than the feed's oldest item must be in the feed.
     (The feed is intentionally a "recent posts" window, not the full archive,
     so this checks for holes rather than demanding every post. The comparison
     is strict because <lastmod> has day granularity and the feed's cutoff can
     fall mid-day — several posts share the oldest item's date without being
     in the window, and that is fine.)

Post dates come from sitemap <lastmod>, which check 2 already ties to disk.
Files whose name starts with `_` are maintainer notes and are ignored.

Exit code 0 if everything is consistent, 1 otherwise. Pure stdlib, no deps.
"""

from __future__ import annotations

import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
FEED = DOCS / "feed.xml"
SITEMAP = DOCS / "sitemap.xml"

SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
POSTS_MARKER = "/posts/"


def post_slug(url: str) -> str | None:
    """Return the `<slug>.html` part of a post URL, or None for non-post URLs."""
    if POSTS_MARKER not in url:
        return None
    return url.rsplit(POSTS_MARKER, 1)[1].strip()


def parse(path: Path, errors: list[str]) -> ET.Element | None:
    try:
        return ET.parse(path).getroot()
    except ET.ParseError as exc:
        errors.append(f"{path.name}: not well-formed XML ({exc})")
        return None


def main() -> int:
    errors: list[str] = []

    on_disk = {
        p.name for p in DOCS.glob("posts/*.html") if not p.name.startswith("_")
    }

    sitemap_root = parse(SITEMAP, errors)
    feed_root = parse(FEED, errors)
    if sitemap_root is None or feed_root is None:
        print("Feed/sitemap check FAILED:")
        for err in errors:
            print(f"  - {err}")
        return 1

    # sitemap: slug -> lastmod
    sitemap_dates: dict[str, str] = {}
    for url in sitemap_root.findall("sm:url", SITEMAP_NS):
        loc = url.findtext("sm:loc", default="", namespaces=SITEMAP_NS)
        slug = post_slug(loc)
        if slug is None:
            continue
        if slug in sitemap_dates:
            errors.append(f"sitemap.xml: duplicate entry for {slug}")
        sitemap_dates[slug] = url.findtext(
            "sm:lastmod", default="", namespaces=SITEMAP_NS
        ).strip()

    # 2. sitemap parity with disk.
    for slug in sorted(on_disk - set(sitemap_dates)):
        errors.append(f"sitemap.xml: missing entry for docs/posts/{slug}")
    for slug in sorted(set(sitemap_dates) - on_disk):
        errors.append(f"sitemap.xml: entry for {slug}, but no such file on disk")

    # feed items
    feed_slugs: list[str] = []
    for item in feed_root.iterfind(".//item"):
        slug = post_slug(item.findtext("link", default=""))
        if slug is None:
            continue
        if slug in feed_slugs:
            errors.append(f"feed.xml: duplicate item for {slug}")
        feed_slugs.append(slug)

    if not feed_slugs:
        errors.append("feed.xml: no post items found")
        print("Feed/sitemap check FAILED:")
        for err in sorted(set(errors)):
            print(f"  - {err}")
        return 1

    # 3. Feed items resolve to real posts.
    for slug in sorted(set(feed_slugs) - on_disk):
        errors.append(f"feed.xml: item for {slug}, but no such file on disk")

    # 4. Feed is prefix-complete against sitemap dates.
    dated = [(slug, sitemap_dates.get(slug, "")) for slug in feed_slugs]
    known = [d for _, d in dated if d]
    if known:
        cutoff = min(known)
        for slug, date in sorted(sitemap_dates.items()):
            if slug in on_disk and date and date > cutoff and slug not in feed_slugs:
                errors.append(
                    f"feed.xml: {slug} (lastmod {date}) is newer than the feed's "
                    f"oldest item ({cutoff}) but has no <item>"
                )

    if errors:
        print("Feed/sitemap check FAILED:")
        for err in sorted(set(errors)):
            print(f"  - {err}")
        return 1

    print(
        f"OK: sitemap covers {len(sitemap_dates)} posts, "
        f"feed holds the {len(feed_slugs)} newest with no gaps"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
