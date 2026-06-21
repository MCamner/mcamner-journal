# AGENTS.md

## Purpose

`mcamner-journal` is a public personal site repository.

Treat this repository as a publishing surface for writing, presentation, and site structure. It is not an operational control point for the MQ stack.

## Primary goals

When working in this repository, optimize for:

- content clarity
- clean presentation
- small, reversible changes
- maintainable site structure
- public-safe documentation

## Safe edits

Typical safe edits include:

- writing and content updates
- metadata cleanup
- navigation improvements
- layout or styling fixes
- publishing and build fixes related to the site itself
- documentation that explains the repo at a public, high level

## Do not add

Do not add or expand:

- internal MQ workflow instructions
- private working notes
- local environment assumptions
- machine-specific paths
- personal operating habits
- orchestration logic that belongs in MQ tooling repos
- copied internal context from private working surfaces

## MQ boundary

This repository may expose lightweight public-safe MQ guidance only.

That guidance should explain how the repo fits into the broader ecosystem at a high level, but it should not carry internal agent workflow, memory, session state, or private execution context.

## Source of truth

For changes inside this repository, the committed files in this repo are the source of truth.

For broader MQ operating rules, orchestration, memory, and internal working context, use MQ-owned repos and private working surfaces instead of this repository.

## Decision rule

If a piece of context is useful mainly for operating the MQ stack rather than maintaining this public site, it does not belong here.
