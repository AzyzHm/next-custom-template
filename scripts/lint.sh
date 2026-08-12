#!/usr/bin/env bash
# Runs the same checks enforced in CI: ESLint, Prettier, and TypeScript.
set -euo pipefail

echo "==> ESLint"
npm run lint

echo "==> Prettier (check)"
npm run format:check

echo "==> TypeScript"
npm run typecheck

echo "All checks passed."
