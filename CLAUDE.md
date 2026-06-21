# CLAUDE.md

## Repository role

`mcamner-journal` is a public-facing repository for a personal site and writing surface.

Keep the repository focused on publishable content, presentation, and maintainable structure. Do not treat it as a home for internal MQ workflow wiring.

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

A minimal public-safe MQ surface is acceptable when it helps explain the repository's place in the broader ecosystem.

That surface should stay thin, portable, and non-operational.

## Boundary

This repository may describe MQ alignment, but it should not function as MQ runtime, memory, or orchestration infrastructure.
