#!/usr/bin/env bash
# Runs the full test suite with coverage, the same way CI does.
set -euo pipefail

echo "==> Unit + integration tests (with coverage)"
npm run test:coverage

echo "==> End-to-end tests"
npm run test:e2e

echo "All tests passed."
