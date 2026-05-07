# UI Principles — McAmner Journal

## Core principle

The interface carries no weight. No icons. No menus. No state the user has to manage. Just the cursor and the command.

---

## Terminal aesthetic

The site is built like a command-line tool, not a website.

This is not nostalgia. It is a structural choice:

- **Honesty**: shows exactly what it can do, nothing more
- **Speed**: text loads instantly, no image-heavy above-the-fold
- **Scanning**: monospace + contrast allows fast visual parsing
- **Focus**: no decoration pulls attention from content

---

## Page layout pattern

Every page follows the same structure:

```
fieldset.boot-box       ← page header (title + context)
  legend.boot-title     ← breadcrumb: "McAmner Journal · section"
  div.about-grid        ← two columns: content left, aside right

form.prompt             ← command bar input

[main content]          ← article.post-box or section.archive-grid etc.

section.journal-box     ← navigation commands

footer.status           ← two-line status bar
```

---

## Command bar

Text input at top of every page. Accepts slash commands.

- Placeholder text provides context clue (e.g. `/journal`, `/catalogue`)
- Submit on Enter
- Error messages escalate in tone with repeated failures
- Certain pages expose filter commands: `/filter music`, `/clear`

---

## Archive grid behavior

- Items shuffled on every page load
- Only 15 items visible by default
- `/show all` reveals everything
- Hover shows focus panel (id, type, title, detail, command)
- Click opens lightbox with arrow navigation

---

## Focus panel

Appears on hover/focus over any article in:
- journal list
- films list
- object list
- archive grid
- catalogue list

Shows:
```
SELECTED ITEM
id:       [number]
type:     [note/film/archive/object/catalogue]
title:    [title]
detail:   [description]
command:  [/open NNN or /film NNN etc.]
```

---

## Randomization

Three elements are randomized on load:

1. **Archive grid** — items shuffled, 15 shown
2. **Index pulse** (`[data-random-index]`) — card labels rotated from alternatives
3. **System status** (`[data-random-status]`) — boot/mode/open-thread lines vary

---

## Static, no dependencies

No frameworks. No npm. No build step. No CDN.

One HTML file per page. One shared CSS. One shared JS.

Loaded via GitHub Pages from `main /docs`.

---

## Responsive behavior

- `about-grid` collapses to single column on mobile
- `archive-grid` auto-fills based on available width
- Type scales fluidly with `clamp()`
- Post boxes maintain readable max-width

---

## Adding a new page

Follow the existing page structure exactly:

1. Copy structure from a similar page
2. Keep `fieldset.boot-box` + `legend.boot-title` + `div.about-grid`
3. Keep `form.prompt#commandBar`
4. Keep `section.journal-box` navigation at bottom
5. Keep `footer.status`
6. Link `site.js` at end of body
7. Use `loading="lazy"` on all images except the first
