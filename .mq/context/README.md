# .mq/context

This directory exists only as a minimal public-safe MQ surface.

Its purpose is limited:

- to acknowledge that this repository can be understood within the broader MQ ecosystem
- to keep any MQ-facing context lightweight and portable
- to avoid mixing public site content with internal operating context

This directory is not a place for:

- private working memory
- internal agent instructions
- session history
- orchestration logic
- runtime state
- local environment detail
- personal workflow notes

## Rule for this repository

If context is needed mainly to operate MQ workflows, it belongs somewhere else.

If context is needed mainly to understand or safely maintain this public site repository, it may belong here in minimal form.

## Intent

The presence of `.mq/context` in this repository should be interpreted as a thin public contract, not as an internal working surface.
