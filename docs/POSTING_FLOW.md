# Posting Flow

Minimal flow for adding a new journal entry. The site is static, lives under
`docs/`, and has no build step and no dependencies — every step is a file edit.

## Checklist

- [ ] **Create the post** under `docs/posts/<slug>.html`. Copy the head block
      (title, `meta[name=description]`, `link[rel=canonical]`, and the `og:`
      tags) from an existing post such as `docs/posts/mq-mcp.html` and update
      the slug, title, and description.
- [ ] **Link it from the relevant index:**
  - `docs/journal.html` — notes and entries (`/note NNN`)
  - `docs/catalogue.html` — films, series, books, music
  - `docs/archive.html` — visual references
  - `docs/objects.html` — objects (`/object NNN`)
- [ ] **Register the route** in `docs/site.js` only if the post needs a command
      alias (e.g. `"/note 042": "/mcamner-journal/posts/<slug>.html"`). The
      route target must point at a file that exists.
- [ ] **Update navigation** links in related posts if applicable.
- [ ] **Test locally:**

      cd docs
      python3 -m http.server 3000
      # open http://localhost:3000

- [ ] **Keep it static and dependency-free** — no frameworks, no external
      `<script src="http…">`, no build tooling.
- [ ] **No secrets or private notes** — this repo is public.

## Per-post checklist

For the field-by-field checks on a single entry's HTML, see
[posts/_post-checklist.md](posts/_post-checklist.md).

## Related

- [README → Adding a New Post](../README.md#adding-a-new-post)
- [ARCHITECTURE.md](ARCHITECTURE.md)
