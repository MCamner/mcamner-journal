# CLAUDE.md

## Repository role

`mcamner-journal` is a public-facing repository for a personal site and
writing surface.

Keep the repository focused on publishable content, presentation, and
maintainable structure. Do not treat it as a home for internal MQ workflow
wiring.

## Working style

Prefer:

- direct, readable edits
- minimal structural changes
- improvements that clearly benefit the public site
- documentation that remains understandable to an external reader

Avoid:

- embedding internal procedures
- importing private operating context
- storing workflow state
- adding path-specific or machine-specific assumptions
- turning the repository into a coordination layer for the MQ ecosystem

## MQ note

A minimal public-safe MQ surface is acceptable when it helps explain the
repository's place in the broader ecosystem.

That surface should stay thin, portable, and non-operational.

## Boundary

This repository may describe MQ alignment, but it should not function as MQ
runtime, memory, or orchestration infrastructure.

## Contract with mcamner-linux

[mcamner-linux](https://github.com/MCamner/mcamner-linux) fetches
`docs/journal-text.json` and mounts each entry as a file at its `path`.

- A link into Linux, `https://mcamner.github.io/mcamner-linux/#{path}`,
  opens an entry only when `{path}` equals that entry's `path` in
  `journal-text.json` exactly. Build it from the same `folder` and `name`
  that `journal_text()` in `tools/generate_site_metadata.py` uses. A link
  built any other way fails silently: Linux boots without opening the entry.
- Keep paths to letters, digits and hyphens, as
  `{folder}/{number}-{slug}.txt`. A path containing a quote is never opened.
