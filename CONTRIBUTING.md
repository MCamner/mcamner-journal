# Contributing

McAmner Journal is a static, terminal-inspired GitHub Pages site. Contributions
should keep it small, fast, and dependency-free.

## Principles

1. **Static and dependency-free** — no frameworks, no build step, no external
   `<script>` or stylesheet. The files in `docs/` are what ships.
2. **Preserve the design language** — terminal-inspired, fast scanning, signal
   palette (blue / orange / green).
3. **Don't break GitHub Pages** — the site deploys from `main` `/docs`.
4. **No secrets or private notes** — this repo is public.

## Adding a journal entry

Follow [docs/POSTING_FLOW.md](docs/POSTING_FLOW.md). Per-entry HTML checks live in
[docs/posts/_post-checklist.md](docs/posts/_post-checklist.md).

## Local testing

    cd docs
    python3 -m http.server 3000
    # open http://localhost:3000

Confirm new and changed pages render, internal links resolve, and any new
`site.js` route points at a file that exists.

## Pull requests

- Branch from `main` (e.g. `chore/...`, `post/...`, `fix/...`).
- Keep PRs focused; fill in the pull request template.
- Update [CHANGELOG.md](CHANGELOG.md) and [VERSION](VERSION) when cutting a
  release; routine content posts do not need a version bump.
- CI (`static-site-checks`) must pass.

## Reporting

Use the issue templates: bug report, post idea, site improvement, or
maintenance task.
