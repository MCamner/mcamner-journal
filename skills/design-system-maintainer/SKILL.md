---
name: design-system-maintainer
description: Use when changing McAmner Journal CSS, visual language, layout, responsive behavior, colors, typography, archive grids, command panels, or screenshots.
---

# Design System Maintainer

Use this skill to preserve the journal's visual identity.

## Core Files

- `docs/style.css`
- `style.css` at repo root, if mirrored or legacy styles are involved
- `docs/index.html`
- `docs/journal.html`
- `docs/archive.html`
- `docs/objects.html`
- `docs/posts/*.html`
- `docs/screenshots/preview.png`
- `docs/assets/social-preview.png`
- `docs/knowledge/design-language.md`
- `docs/knowledge/ui-principles.md`
- `docs/knowledge/anti-style.md`

## Visual Contract

The journal should feel like:

- a terminal dashboard
- a field notebook
- a system console for thinking
- sparse, direct, durable

It should not feel like:

- a SaaS landing page
- a card-heavy portfolio
- a generic blog theme
- a decorative retro skin with no structure

## CSS Rules

- Prefer existing CSS variables.
- Keep monospace as the primary type voice.
- Keep boxes and grid structure consistent.
- Avoid new color families unless they are part of a deliberate design update.
- Use responsive constraints, not viewport-scaled font tricks.
- Preserve scanline and command-surface identity unless explicitly changing the
  whole visual language.
- Keep text readable over the blue background.

## Layout Rules

- Use `terminal` wrapper.
- Use `boot-box` for page header/system state.
- Use `journal-box` for command lists and grouped navigation.
- Use `post-box` for prose.
- Keep indexes dense and easy to scan.
- On mobile, content should stack without hidden controls or overlapping text.

## Verification

Run a static sweep:

```bash
rg "class=\"(terminal|boot-box|journal-box|post-box|prompt|status)" docs
```

Serve locally:

```bash
cd docs
python3 -m http.server 3000
```

Check:

- home
- journal
- catalogue
- archive
- a note post
- a film/book/object post

## Output Standard

When reporting design changes, mention the surfaces checked and whether the
change preserves the command-surface style.
