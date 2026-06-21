# Post Checklist

Copy-paste checklist for a single journal entry. Filename starts with `_` so it
is a maintainer note, not a published page.

## HTML head

- [ ] `<title>` is `<Title> | McAmner Journal`
- [ ] `meta[name=description]` is filled and ~1–2 sentences
- [ ] `link[rel=canonical]` points at the live post URL
      (`https://mcamner.github.io/mcamner-journal/posts/<slug>.html`)
- [ ] `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name` set
- [ ] `meta[name=robots]` is `index, follow`

## Content

- [ ] Terminal-inspired layout consistent with existing posts
- [ ] No external `<script>` or stylesheet — site stays dependency-free
- [ ] Internal links use relative paths that resolve

## Wiring

- [ ] Linked from the relevant index page (journal / catalogue / archive / objects)
- [ ] Route added to `docs/site.js` if a command alias is wanted
- [ ] Route target file exists

## Verify

- [ ] Renders locally (`cd docs && python3 -m http.server 3000`)
- [ ] No secrets or private notes
