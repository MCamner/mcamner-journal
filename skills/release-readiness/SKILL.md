---
name: release-readiness
description: Use when preparing McAmner Journal for release by checking Git state, versioning, changelog, post metadata, indexes, feed, sitemap, wiki references, and GitHub Pages readiness.
---

# Release Readiness

Use this skill before tagging, pushing a release, or announcing new content.

## Always Inspect

- `git status --short`
- `VERSION`
- `README.md`
- `CHANGELOG.md`
- `release.sh`
- `docs/index.html`
- `docs/journal.html`
- `docs/site.js`
- `docs/feed.xml`
- `docs/sitemap.xml`
- recently changed files under `docs/posts/`

## Blockers

- dirty worktree with unrelated changes
- new post not linked from any index
- route missing from `docs/site.js`
- stale feed or sitemap
- broken canonical URL
- missing social metadata
- `CHANGELOG.md` missing release entry when releasing
- private notes, credentials, local paths, or unpublished personal material
- release version mismatch

## Verification

For content changes:

```bash
python3 tools/generate_site_metadata.py
git diff -- docs/feed.xml docs/sitemap.xml
```

For release:

```bash
./release.sh --dry-run <version>
```

For local visual sanity:

```bash
cd docs
python3 -m http.server 3000
```

## Report Format

Return:

- status: ready, blocked, or uncertain
- content/index surfaces checked
- checks run
- files changed
- anything not visually verified
