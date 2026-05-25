---
name: repo-aware
description: Use when inspecting, explaining, planning, reviewing, or changing McAmner Journal with repository-specific context.
---

# Repo Aware

Use this skill to keep work grounded in McAmner Journal's actual static-site
structure, command-surface aesthetic, and publishing flow.

## What This Repo Is

McAmner Journal is a static GitHub Pages journal for systems, culture, objects,
films, music, books, and visual references. It is built with plain HTML, CSS,
and JavaScript. No framework, no backend, no analytics by default.

Primary surfaces:

- `docs/index.html` for the home dashboard
- `docs/journal.html` for notes and entries
- `docs/catalogue.html`, `docs/films.html`, `docs/books.html`, and
  `docs/objects.html` for indexes
- `docs/archive.html` and `docs/assets/archive/` for visual references
- `docs/posts/*.html` for individual posts
- `docs/site.js` for command routing and small interactions
- `docs/style.css` for the visual system
- `docs/knowledge/` for voice, design, navigation, and writing guidance
- `docs/feed.xml`, `docs/sitemap.xml`, and `tools/generate_site_metadata.py`
  for metadata/search surfaces

## First Inspection

Start with:

```bash
git status --short
rg --files
sed -n '1,220p' README.md
sed -n '1,260p' docs/site.js
sed -n '1,220p' docs/knowledge/writing-style.md
```

If changing UI, inspect:

```bash
sed -n '1,260p' docs/style.css
sed -n '1,220p' docs/index.html
sed -n '1,220p' docs/posts/command-surface.html
```

## Verification

Use lightweight checks:

```bash
ruby -e 'Dir["docs/**/*.html"].each { |f| abort("empty #{f}") if File.zero?(f) }'
python3 tools/generate_site_metadata.py
git diff -- docs/feed.xml docs/sitemap.xml docs/index.html
```

For local visual review:

```bash
cd docs
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Guardrails

- Preserve the command-surface language: terminal boxes, command routes, short
  labels, visible system state.
- Do not add frameworks or build tooling unless the user explicitly asks.
- New posts must be discoverable from an index and from `docs/site.js`.
- Keep metadata surfaces synchronized: canonical URL, Open Graph, JSON-LD,
  sitemap, and feed when relevant.
- Do not commit private notes, credentials, analytics tokens, or unpublished
  personal material.
