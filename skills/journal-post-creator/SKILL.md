---
name: journal-post-creator
description: Use when creating, editing, indexing, or publishing a new McAmner Journal blog post, note, film, book, music, object, or archive entry.
---

# Journal Post Creator

Use this skill to create new posts that fit the existing journal structure.

## Post Types

- Notes/projects: `docs/posts/<slug>.html`, indexed in `docs/journal.html`
- Films/series/books/music: `docs/posts/<slug>.html`, indexed through
  catalogue-specific pages
- Objects: `docs/posts/<slug>.html`, indexed in `docs/objects.html`
- Visual references: archive item plus asset under `docs/assets/archive/`
- Knowledge notes: markdown under `docs/knowledge/posts/`

## Required Flow For A New Note

1. Choose the next note number from `docs/journal.html` (look for the last `id="note-NNN"`).
2. Create `docs/posts/<slug>.html` from a nearby post template.
3. Add the note row to `docs/journal.html` (after the last `<article id="note-NNN">`).
4. Add the command link to the journal commands list in `docs/journal.html`.
5. Add routes in `docs/site.js`:
   - `/note NNN`
   - `/<slug>`
6. Add navigation links in the new post's `journal-box`:
   - `/open <repo>` — GitHub repository (if applicable)
   - `/journal` — return to entries
   - `/note NNN-1` — previous note
   - `/home` — return to dashboard
7. Add a forward link in the **previous note's** `journal-box`:
   - Open `docs/posts/<previous-slug>.html`
   - Add `<li><a href="<slug>.html">/note NNN</a><span>-- <title></span></li>`
     before the `/home` line.
8. Run `python3 tools/generate_site_metadata.py` to update `feed.xml` and `sitemap.xml`.
9. Update `CHANGELOG.md` when the post is part of a release.

## Post Template Contract

Every regular post should include:

- `<title><subject> | McAmner Journal</title>`
- SEO description, canonical URL, Open Graph, Twitter metadata
- JSON-LD `BlogPosting`
- stylesheet link to `../style.css`
- favicon link to `../favicon.svg`
- `<fieldset class="boot-box">` with `McAmner Journal <span>note</span>`
- `<form class="prompt" id="commandBar">`
- `<article class="post-box">`
- optional `<div class="post-figure">` for SVG/ASCII-style figure
- `<section class="journal-box">` for post commands
- footer status
- `<script src="../site.js"></script>`

## Writing Rules

Follow `docs/knowledge/writing-style.md`:

- short paragraphs
- one idea per paragraph
- no bullets in the post body
- no filler or preamble
- direct, observational tone
- for projects: explain the problem, constraint, and principle
- 4 to 8 paragraphs unless the subject truly needs more

## Numbering And Routing

Use zero-padded public labels:

```text
/note 020
id="note-020"
```

Route aliases in `docs/site.js` should be explicit:

```javascript
"/note 020": "/mcamner-journal/posts/new-post.html",
"/new-post": "/mcamner-journal/posts/new-post.html",
```

## Verification

```bash
rg "/note 020|new-post" docs/site.js docs/journal.html docs/posts/new-post.html
python3 tools/generate_site_metadata.py
```

Then serve locally:

```bash
cd docs
python3 -m http.server 3000
```

Check:

- `/journal.html`
- `/posts/<slug>.html`
- command input route `/note NNN`
- command input route `/<slug>`

## Quality Bar

The post should feel like it belongs in the same machine room: sparse,
structured, visual, and useful. Do not turn it into a generic blog article.
