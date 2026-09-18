---
name: journal-post-creator
description: Create, edit, index, and verify McAmner Journal posts. Use for new blog notes, films, series, books, music, objects, archive entries, or changes to an existing post.
---

# Journal Post Creator

Create posts that belong in McAmner Journal and remain discoverable across its
static GitHub Pages surfaces.

## Ground The Task

Before editing:

1. Read `AGENTS.md` and check `git status --short --branch`.
2. Read `docs/knowledge/writing-style.md` and
   `docs/knowledge/journal-voice.md`.
3. Inspect the newest post of the same type and its index entry.
4. Preserve existing user changes. Do not commit or publish unless asked.

If the user asks for a generic blog post, create a journal note. Ask for the
subject only when it cannot be inferred. Follow the language requested by the
user; otherwise match nearby posts.

## Choose The Surface

| Post type | Post path | Required index |
|---|---|---|
| Note or project | `docs/posts/<slug>.html` | `docs/journal.html` |
| Film or series | `docs/posts/<slug>.html` | `docs/films.html` and `docs/catalogue.html` |
| Book or music | `docs/posts/<slug>.html` | `docs/catalogue.html` |
| Object | `docs/posts/<slug>.html` | `docs/objects.html` |
| Visual reference | archive entry and asset | `docs/archive.html` |
| Knowledge note | `docs/knowledge/posts/<slug>.md` | relevant knowledge index |

Choose the next zero-padded number from the relevant index. Never infer it from
the filename count.

## Write The Post

Copy the nearest recent post of the same type and update every subject-specific
field:

- title and visible heading
- description, canonical URL, Open Graph, and Twitter metadata
- JSON-LD headline, description, URL, language, and dates
- boot-box copy and activity lines
- body and accessible figure label
- post commands and previous-entry navigation

For a regular post, preserve the existing structural contract: `boot-box`,
`commandBar`, `post-box`, optional `post-figure`, `journal-box`, status footer,
and `../site.js`.

Write four to eight short paragraphs unless the subject needs more. Keep one
idea per paragraph, use no bullet lists in the body, and avoid preamble,
marketing language, generic AI prose, or feature inventories. For tools and
projects, explain the problem, constraint, and underlying principle.

## Wire It Into The Site

For a new numbered entry:

1. Add its article row to the required index or indexes.
2. Add its command link to each relevant index command list.
3. Add explicit numbered and slug routes to `docs/site.js`.
4. Add a previous-entry link to the new post.
5. Add a forward link in the previous post before `/home`.
6. Run `python3 tools/generate_site_metadata.py`.

The metadata generator updates `docs/feed.xml`, `docs/sitemap.xml`, and the
latest-entry panel on `docs/index.html`. It does not update `docs/films.html` or
other content indexes.

## Verify

Run the repository checks:

```bash
python3 tools/check_routes.py
python3 tools/check_feed_sitemap.py
git diff --check
```

Confirm that the number and slug appear on every intended surface:

```bash
rg -n '/note NNN|<slug>' docs/site.js docs/journal.html \
  docs/posts/<slug>.html docs/feed.xml docs/sitemap.xml
```

Use the equivalent index paths for films, series, books, music, or objects.
Then serve `docs/` locally and confirm that both the post and its index return
HTTP 200. Inspect the final diff and report what remains unverified.

## Boundaries

- Keep the site static and dependency-free.
- Do not add private notes, local paths, credentials, or internal MQ context.
- Do not invent biographical claims or personal opinions for the author.
- Do not change unrelated content, styling, or architecture.
- Treat commit, push, release, and publication as separate user-authorized actions.
