# Changelog

<!-- markdownlint-disable MD024 -->

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Command surface: `/ls`, `/find`, `/latest`, `/next`, `/prev`,
  `/random <type>`, `/whoami`, `/uptime`, `/history`, `/mute`, `/unmute`,
  `/sudo`
- Command bar: Tab completion over commands and routes, arrow-up/down history
  (kept in `localStorage`), and a `.prompt-out` line for multi-line answers
- Play layer: `/ascii <nr>` samples an archive image into characters,
  `/tonight` picks a film, a book and an object that share tags, `/quiz` asks
  you to name a film from its tags and keeps score, `/refs <post>` lists
  inbound and outbound links, `/since` lists what is new since the previous
  visit (with a count in the status bar), `/fortune` prints one description,
  `/sound [on|off]` adds keyboard clicks and a 60 Hz hum, and `/lock` rests the
  screen — which also happens by itself after two minutes idle
- `docs/entries.json`: generated per-post type, tags, date, description and the
  post-to-post link graph, which the play layer reads instead of fetching every
  post
- `tools/check_entries.py`: CI gate asserting `entries.json` still matches the
  pages it is generated from — coverage, tags, link graph and archive items

## [0.1.4] - 2026-06-21

### Added

- Maintainer flow: `CONTRIBUTING.md`, PR template, and `post_idea` /
  `site_improvement` / `maintenance_task` issue templates
- `docs/POSTING_FLOW.md` and `docs/posts/_post-checklist.md` posting checklists
  (closes #4)
- `docs/ARCHITECTURE.md` describing the static-site serving and routing model
- `static-site-checks` CI: required pages, dependency-free, internal-link and
  `site.js` route integrity

## [0.1.3] - 2026-05-13

### Changed

- Improve README Security section to reflect static site deployment on GitHub Pages
- Remove nested backup scripts from repository
- Expand .gitignore with backups/ directory

### Fixed

- VERSION file was ahead of git tags; release process now aligned

## [0.1.1] - 2026-05-08

### Changed

- update project files
- update project files
- update documentation
- update documentation
- update documentation
- Add knowledge base and vector store upload tool

---

## [0.1.0] - 2026-05-04

### Added

- Initial release setup
