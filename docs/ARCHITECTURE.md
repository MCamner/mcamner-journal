# Architecture

McAmner Journal is a static, terminal-inspired site served by GitHub Pages. It
has no backend, no build step, and no runtime dependencies.

## Serving model

GitHub Pages serves the site from `main` `/docs`:

    Settings → Pages → Deploy from branch → main /docs

There is no compile or bundle step — the files in `docs/` are exactly what ships.
Deploys run as the `pages-build-deployment` workflow on push to `main`.

## Layout

    docs/
      index.html       home dashboard
      journal.html     notes and entries
      catalogue.html   films, series, books, music
      films.html       film index
      books.html       book index
      archive.html     visual references
      objects.html     object index
      about.html       biography and context
      posts/           individual entries (one HTML file each)
      site.js          command routing and small interactions
      style.css        visual system
      robots.txt       crawler instructions
      sitemap.xml      search index map
      feed.xml         RSS feed

## Routing

`docs/site.js` holds a `routes` object that maps command-style aliases to post
URLs, e.g.:

    "/note 001": "/mcamner-journal/posts/mqlaunch.html"
    "/object 004": "/mcamner-journal/posts/fender-stratocaster.html"

Routes are optional — a post is reachable through its index link regardless. A
route just adds a command alias. Every route target must point at a file that
exists under `docs/posts/`.

## Posts

Each entry is a self-contained HTML file under `docs/posts/`. Posts share a head
convention (title, description, canonical URL, Open Graph tags) and link back to
the relevant index. See [POSTING_FLOW.md](POSTING_FLOW.md) and
[posts/_post-checklist.md](posts/_post-checklist.md).

## Invariants

- Static and dependency-free: no frameworks, no external `<script src="http…">`.
- Terminal-inspired design language is preserved across pages.
- Internal links resolve; `site.js` route targets resolve.
- No secrets or private notes — the repo is public.

These invariants are checked by
[`.github/workflows/static-site-checks.yml`](../.github/workflows/static-site-checks.yml).
