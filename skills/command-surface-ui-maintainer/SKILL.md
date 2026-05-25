---
name: command-surface-ui-maintainer
description: Use when changing McAmner Journal command-surface UI, ASCII/terminal visuals, command bar, status panels, index grids, route behavior, or post GUI structure.
---

# Command Surface UI Maintainer

Use this skill for the journal's terminal GUI and ASCII-inspired visual system.

## Reference Surfaces

- `docs/index.html` for the home command dashboard
- `docs/journal.html` for note index structure
- `docs/posts/command-surface.html` for the concept post
- `docs/posts/mq-mcp.html` for post commands and SVG figure pattern
- `docs/style.css` for boxes, prompt, bot figures, colors, and responsive rules
- `docs/site.js` for command input routing and randomized signals
- `docs/assets/ascii-about.png` and archive assets for visual language

## UI Principles

- The site is a command surface, not a magazine layout.
- Use terminal-like boxes: `boot-box`, `journal-box`, `post-box`, `prompt`,
  `status`, `tips`.
- Use short system labels: `Recent activity`, `post loaded`, `reading mode`,
  `index mode`, `EOF`.
- Prefer command links such as `/journal`, `/note 019`, `/archive`,
  `/home`, `/open repo`.
- Keep visual signals restrained: blue field, orange border, green prompt,
  muted text.
- ASCII/SVG figures should look like system icons, not illustrations.
- Do not add decorative gradients, blobs, hero sections, cards inside cards, or
  marketing copy.

## Post GUI Pattern

Posts should usually follow:

```html
<main class="terminal post-terminal">
  <fieldset class="boot-box">
    <legend class="boot-title">McAmner Journal <span>note</span></legend>
    <div class="about-grid">...</div>
  </fieldset>

  <form class="prompt" id="commandBar">...</form>

  <article class="post-box">...</article>

  <div class="post-figure">...</div>

  <section class="journal-box">...</section>

  <footer class="status">...</footer>
</main>
```

## ASCII/SVG Rules

- Use simple rectangles, lines, arrows, prompt marks, boxes, grids, and small
  machine symbols.
- Use CSS variables: `--blue`, `--orange`, `--green`, `--white`, `--muted`.
- Keep SVG small and inline when it is a post glyph.
- Do not use complex generated SVG illustrations for posts.
- If an image is needed for an object or archive entry, use actual assets under
  `docs/assets/` and keep alt text concrete.

## Routing Rules

- Every command shown in UI should either be a real link or exist in
  `docs/site.js`.
- Unknown command behavior is intentionally terse and slightly dry; preserve it.
- Do not add routes that point outside the site without clear external intent.

## Verification

```bash
rg "commandInput|routes|post-figure|journal-box" docs/site.js docs/**/*.html
```

Visual check locally:

```bash
cd docs
python3 -m http.server 3000
```

Inspect desktop and narrow mobile widths for:

- no text overlap
- command bar fits
- boxes preserve hierarchy
- post commands are discoverable
- SVG/ASCII figure does not dominate the prose
