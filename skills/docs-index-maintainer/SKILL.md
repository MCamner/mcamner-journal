---
name: docs-index-maintainer
description: Use when keeping McAmner Journal indexes, routes, feed, sitemap, knowledge docs, wiki post references, README, or GitHub Pages metadata consistent.
---

# Docs Index Maintainer

Use this skill when a content change needs to remain discoverable.

## Index Surfaces

- `docs/journal.html`
- `docs/catalogue.html`
- `docs/films.html`
- `docs/books.html`
- `docs/objects.html`
- `docs/archive.html`
- `docs/site.js`
- `docs/feed.xml`
- `docs/sitemap.xml`
- `README.md`
- `docs/README.md`
- `tools/generate_site_metadata.py`
- `tools/generate-wiki-posts-ref.sh`

## Synchronization Rules

When adding a post, update all relevant surfaces:

- post HTML under `docs/posts/`
- one index page
- command list for that index, if present
- `docs/site.js` routes
- `docs/feed.xml` for public posts
- `docs/sitemap.xml`
- related post links
- knowledge markdown when the post should be part of the retrieval corpus

## Route Standards

Use readable command aliases:

- `/note NNN`
- `/film NNN`
- `/book NNN`
- `/object NNN`
- `/<slug>`

Keep `docs/site.js` explicit. Do not generate routes dynamically unless the
site architecture changes deliberately.

## Metadata Standards

Each post should have:

- canonical URL
- `og:type`
- `og:title`
- `og:description`
- social preview image
- Twitter metadata
- JSON-LD `BlogPosting`
- `datePublished`
- `dateModified`
- RSS alternate link

## Verification

```bash
python3 tools/generate_site_metadata.py
rg "<loc>|<item>|/note|/film|/book|/object" docs/feed.xml docs/sitemap.xml docs/site.js
```

For wiki references:

```bash
tools/generate-wiki-posts-ref.sh
```

Treat wiki push as release-script behavior, not a default content-edit step.

## Review Standard

Lead with broken discoverability: missing route, missing index link, stale feed,
stale sitemap, wrong canonical URL, or inconsistent note numbering.
