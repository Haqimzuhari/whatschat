## Description
Playwright E2E tests covering the main happy path and key failure paths in a real Chromium browser.

## Context
Validates the full user flow end-to-end. E2E job will be added to GEN-003-github-actions-cicd.md `deploy.yml` once complete. Runs against `http://localhost:5173`.

## Details
- [ ] Install `@playwright/test`, run `npx playwright install chromium`
- [ ] Write `playwright.config.ts` pointing at `http://localhost:5173`
- [ ] Happy path: select Malaysia → type `0123456789` → generate → assert `https://wa.me/60123456789`
- [ ] Paste test: paste `+60 12-345 6789` → assert same result
- [ ] Validation test: type `abc123` → assert inline error appears
- [ ] Empty submit: click generate with empty phone → assert toast appears
- [ ] Copy test: click copy → assert label changes to "Copied!"
- [ ] Mobile viewport (375px): focus phone field → assert field visible
- [ ] Add Playwright job to GEN-003-github-actions-cicd.md CI as separate job

## Status
not-started
