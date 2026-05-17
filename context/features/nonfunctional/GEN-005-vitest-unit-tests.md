## Description
Vitest unit and component tests covering the phone sanitiser, country filter, link builder, and Vue components.

## Context
Provides automated confidence that utilities and components work correctly. Test job will be added to GEN-003-github-actions-cicd.md `deploy.yml` once complete.

## Details
- [ ] Install `vitest`, `@vue/test-utils`, `@vitejs/plugin-vue`, `jsdom`
- [ ] Add `vitest.config.js` with jsdom environment
- [ ] Add `test` script to `package.json`
- [ ] Unit tests for `sanitisePhone()` — strips spaces, dashes, +, letters
- [ ] Unit tests for `buildLink()` — correct wa.me format
- [ ] Unit tests for `filterCountries()` — search matching
- [ ] Component tests for country dropdown (renders options, filters on search)
- [ ] Component tests for inline validation messages
- [ ] >80% coverage on utility functions

## Status
not-started
