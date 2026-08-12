# Contributing

Thanks for considering a contribution to this project! The steps below will get you set up.

## Getting Started

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment example and adjust as needed:
   ```bash
   cp .env.example .env.local
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Project Conventions

- **App Router**: pages, layouts, and route handlers live under `src/app`
- **Layers**: UI in `src/components`, cross-cutting logic in `src/lib`, shared types in `src/types`
- **API pattern**: server endpoints are Route Handlers under `src/app/api/<version>/<resource>/route.ts`,
  the frontend talks to them (or any JSON API) through the typed client in `src/lib/api-client.ts`
- **Tests**: mirror the source structure inside `tests/unit`, `tests/integration`, and `tests/e2e` -
  see [Testing](#testing) below for what belongs where
- **Styling**: Tailwind CSS utility classes; avoid ad-hoc inline styles

## Testing

This template keeps three isolated test tiers:

| Tier        | Location            | Tooling                        | What belongs here                                                        |
| ----------- | ------------------- | ------------------------------ | ------------------------------------------------------------------------ |
| Unit        | `tests/unit`        | Vitest + React Testing Library | Pure functions, hooks, isolated components                               |
| Integration | `tests/integration` | Vitest + MSW                   | Route handlers, the API client, components wired to mocked network calls |
| E2E         | `tests/e2e`         | Playwright                     | Full user flows against a real running build                             |

Run them locally:

```bash
npm run test:unit
npm run test:integration
npm run test:e2e

# everything, with coverage, same as CI
bash scripts/test.sh
```

When adding a feature, add or update tests in the tier(s) that actually exercise the new behavior so
not every change needs all three.

## Linting & Formatting

```bash
bash scripts/lint.sh
```

This runs ESLint, `prettier --check`, and `tsc --noEmit` which are the same checks enforced in CI.
Fix formatting automatically with `npm run format`, and lint issues with `npm run lint:fix`.

## Commit & PR Guidelines

- Keep commits focused and use clear, descriptive messages
- Open a PR against `main` and fill out the PR template
- Make sure CI (lint, tests, build) passes before requesting review
- Link related issues in the PR description

## Reporting Bugs / Requesting Features

Please use the provided issue forms (Bug Report / Feature Request) rather than a blank issue,
they help capture the information needed to act on it quickly.

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to
uphold it.
