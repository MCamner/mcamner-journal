# Design Language — McAmner Journal

## Visual identity

Terminal-inspired. Fast scanning. High contrast. No decoration for its own sake.

---

## Color palette

Three signal colors plus background:

| Variable      | Value       | Role                              |
|---------------|-------------|-----------------------------------|
| `--orange`    | `#e57b4f`   | Primary accent, headings, borders |
| `--green`     | `#59a14f`   | Secondary accent, Black Iris      |
| `--blue`      | `#0d438f`   | Tertiary, robot eyes, depth       |
| `--white`     | `#f0ede6`   | Body text                         |
| `--muted`     | `#8a8a8a`   | Secondary text, metadata          |
| Background    | `#0d0d0d`   | Near-black base                   |

---

## Typography

- Font: monospace throughout
- Size: fluid with `clamp()` — scales between mobile and desktop
- Headings: `letter-spacing: -0.05em` to -0.06em — tight, terminal-like
- Body: `line-height: 1.3–1.4`

Heading scale uses `clamp(22px, 2.2vw, 36px)` pattern for fluid sizing.

---

## Layout patterns

### Boot box (`fieldset.boot-box`)
- Main container for page header
- Orange border, dark background
- Uses `fieldset/legend` for semantic structure
- Contains `about-grid` (two-column: content + aside)

### Post box (`article.post-box`)
- Orange border, `border-radius: 10px`
- Used for all long-form content sections
- Variant `.post-box--bi` uses green border for Black Iris content

### Archive grid (`.archive-grid`)
- CSS grid, auto-fill columns
- Items revealed with fade-in `.loaded` class
- Shuffled on load — 15 items shown, rest hidden

### Journal box (`.journal-box`)
- Command list at bottom of pages
- Orange `>>` prefixed headings
- Links styled as terminal commands

### Status bar (`.status footer`)
- Fixed-feel footer bar
- Two columns: shortcut hint + status message

---

## Interaction patterns

### Hover on links
- Color shifts to `--green`
- `letter-spacing: 0.04em`
- `text-shadow: 1px 0 var(--orange), -1px 0 var(--green)` — chromatic aberration effect

### Focus panel
- Appears on hover over journal/film/archive/catalogue items
- Shows: id, type, title, detail, command
- Adds `is-focused` class to active item

### Lightbox (archive)
- Click on archive item opens full-screen lightbox
- Arrow key navigation, Escape to close
- Shows counter, title, caption

---

## Robot SVG figures

Pixel-art robots used as decorative elements throughout. Built from `<rect>` elements.

Color combinations:
- Single orange robot: main identity figure
- Orange + green pair: Black Iris section
- Green robot (larger) + orange robot (smaller): bi-figures

Used at bottom of post pages and in boot-box asides.

---

## Spacing

- Main container max-width: `920px` prose, wider for grids
- Consistent `28px 0` margin on post boxes
- Section padding: `30px 40px` on post boxes
