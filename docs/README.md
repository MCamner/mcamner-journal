# mcamner-journal docs

This folder contains the GitHub Pages site for `mcamner-journal`.

The site is static, framework-free, and designed as a command-line inspired journal for systems, culture, objects, and visual references.

---

## Live site

    https://mcamner.github.io/mcamner-journal/

---

## Pages

    index.html       Home dashboard
    journal.html     Notes and entries
    catalogue.html   Films, series, books, and music
    films.html       Film index
    books.html       Book index
    archive.html     Visual references
    objects.html     Object index
    about.html       Biography and context

---

## Content folders

    posts/           Individual journal entries
    assets/          Images, sounds, icons, and visual assets

---

## Support files

    site.js          Command routing, small interactions, recent signals
    style.css        Visual system
    robots.txt       Crawler instructions
    sitemap.xml      Search index map
    feed.xml         RSS feed

---

## Local preview

From this folder:

    python3 -m http.server 3000

Then open:

    http://localhost:3000

Or from repo root:

    open docs/index.html

---

## Adding a new post

1. Create a new HTML file under:

       docs/posts/

2. Link it from:

       docs/journal.html

3. Add it to navigation, recent signals, or command routing if needed:

       docs/site.js

4. Test locally:

       cd docs
       python3 -m http.server 3000

5. Regenerate site metadata from repo root:

       python3 tools/generate_site_metadata.py

   This updates:

       docs/sitemap.xml
       docs/feed.xml
       homepage latest entries
       catalogue counts

6. Commit and push.

---

## Design notes

The interface is built around:

- fast scanning
- terminal-inspired navigation
- small visual signals
- static HTML/CSS/JS
- no build step
- no framework dependency

---

## Publishing

GitHub Pages should use:

    main /docs
