#!/usr/bin/env python3
"""Verify command-surface route consistency for the static site.

The site is a command surface: indexed entries (notes, films, series, books,
music, objects) are reachable both as links and as `/type NNN` commands routed
by ``docs/site.js``. CI already checks that route targets resolve to files;
this script closes the opposite gap — making sure every indexed entry actually
has a command route, so a post can't ship clickable-but-uncommandable (which is
exactly how Spider-Man: Noir / `series-005` slipped through).

Checks:
  1. No duplicate route keys in site.js (JS would silently keep the last one).
  2. Every route target under /posts/ resolves to a file on disk.
  3. Every indexed entry `<article id="type-NNN">` has a matching `/type NNN`
     route whose target points at the same post the index links to.

Exit code 0 if everything is consistent, 1 otherwise. Pure stdlib, no deps.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"
SITE_JS = DOCS / "site.js"

# Article id prefixes that are expected to carry a `/prefix NNN` command route.
# `item-` (archive) is intentionally excluded: archive entries open in a
# lightbox and have no per-item command alias.
COMMANDED_TYPES = ("note", "film", "series", "book", "music", "object")

ROUTE_PAIR = re.compile(r'"([^"]+)"\s*:\s*"([^"]+)"')
ARTICLE = re.compile(
    r'<article\s+id="(' + "|".join(COMMANDED_TYPES) + r')-(\d+)"[^>]*>(.*?)</article>',
    re.DOTALL,
)
POST_HREF = re.compile(r'href="(posts/[a-z0-9-]+\.html)"')


def strip_base(target: str) -> str:
    """Normalise a route target to a docs-relative path (drop the Pages base)."""
    prefix = "/mcamner-journal/"
    if target.startswith(prefix):
        return target[len(prefix):]
    return target


def parse_routes(text: str) -> tuple[list[tuple[str, str]], dict[str, str]]:
    """Return (ordered pairs, key->target) from the `const routes = {…}` block."""
    match = re.search(r"const routes\s*=\s*\{(.*?)\n\};", text, re.DOTALL)
    if not match:
        raise SystemExit("ERROR: could not locate `const routes = { … };` in site.js")
    pairs = ROUTE_PAIR.findall(match.group(1))
    return pairs, {k: v for k, v in pairs}


def main() -> int:
    errors: list[str] = []

    site_text = SITE_JS.read_text(encoding="utf-8")
    pairs, routes = parse_routes(site_text)

    # 1. Duplicate route keys.
    seen: set[str] = set()
    for key, _ in pairs:
        if key in seen:
            errors.append(f"duplicate route key: {key!r}")
        seen.add(key)

    # 2. Route targets under /posts/ resolve to files.
    for key, target in routes.items():
        rel = strip_base(target)
        if rel.startswith("posts/"):
            if not (DOCS / rel).is_file():
                errors.append(f"route {key!r} -> missing file {rel}")

    # 3. Every indexed entry has a matching command route to the same post.
    for html in sorted(DOCS.glob("*.html")):
        text = html.read_text(encoding="utf-8")
        for kind, num, body in ARTICLE.findall(text):
            href = POST_HREF.search(body)
            if not href:
                # Entry without a post link (e.g. a stub); nothing to route.
                continue
            target_rel = href.group(1)
            command = f"/{kind} {num}"
            if command not in routes:
                errors.append(
                    f"{html.name}: {kind}-{num} -> {target_rel} has no route "
                    f"({command!r} missing in site.js)"
                )
                continue
            routed_rel = strip_base(routes[command])
            if routed_rel != target_rel:
                errors.append(
                    f"{html.name}: {command!r} points at {routed_rel} but the "
                    f"index links {target_rel}"
                )

    if errors:
        print("Route consistency check FAILED:")
        for err in sorted(set(errors)):
            print(f"  - {err}")
        return 1

    print("OK: routes, targets, and index entries are consistent")
    return 0


if __name__ == "__main__":
    sys.exit(main())
