# McAmner Journal

A command-line inspired journal for systems, culture, objects, and visual references.

Live:

    https://mcamner.github.io/mcamner-journal/

---

## Philosophy

This is not a traditional blog.

It is a journal designed for thinking.

Most platforms optimize for publishing.

This optimizes for:

- clarity
- signal
- iteration
- unfinished ideas

Less publishing. More thinking.

---

## Interface

The journal is built like a command surface:

- minimal UI
- fast scanning
- grid-based layout
- no frameworks
- no noise

It reflects how ideas actually form — not only how they are polished.

---

## Quick Start

Open the site directly:

    open docs/index.html

Or run a local server:

    cd docs
    python3 -m http.server 3000

Then open:

    http://localhost:3000

---

## Route Map

Public pages:

    /                Home
    /journal.html    Notes and entries
    /catalogue.html  Films, series, books, and music
    /films.html      Film index
    /books.html      Book index
    /archive.html    Visual references
    /objects.html    Object index
    /about.html      Biography and context

Post pages live under:

    /posts/

---

## Structure

    docs/
      index.html       home dashboard
      journal.html     notes and entries
      catalogue.html   films, series, books, and music
      films.html       film index
      archive.html     visual references
      objects.html     object index
      about.html       biography and context
      posts/           individual entries
      assets/          images and site assets
      site.js          command routing and small interactions
      style.css        visual system
      robots.txt       crawler instructions
      sitemap.xml      search index map

The site is served via GitHub Pages from:

    main /docs

---

## Adding a New Post

Recommended flow:

1. Add a new HTML file under:

       docs/posts/

2. Link the post from the relevant index:

       docs/journal.html     for notes (/note NNN)
       docs/catalogue.html   for music, films, books, series
       docs/archive.html     for visual entries

3. Register the route in:

       docs/site.js

4. Update navigation links in related posts if applicable.

5. Test locally:

       cd docs
       python3 -m http.server 3000

6. Open:

       http://localhost:3000

---

## Deployment

GitHub Pages should be configured as:

    Settings → Pages → Deploy from branch → main /docs

Live site:

    https://mcamner.github.io/mcamner-journal/

---

## Design

- Terminal-inspired
- Fast scanning
- Blue, orange, green signal palette
- Randomized archive, index, status, and recent signals
- Static, fast, durable
- No dependencies

---

## Context

Part of a broader direction:

    mqlaunch → command surface for workflows
    journal  → command surface for thinking

---

## Author

Mattias Camner

Infrastructure / Platform Architect

---

## Roadmap

See [ROADMAP.md](ROADMAP.md) for planned features.

---

## Security

McAmner Journal runs locally. No data leaves your machine.

Do not commit personal notes or credentials to a public repo. Use `.gitignore` to exclude sensitive files.

---

## License

MIT