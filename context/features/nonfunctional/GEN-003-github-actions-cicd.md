## Description
Two GitHub Actions workflows: `release.yml` (manual trigger — syncs app source from development to a release branch and raises PR to master) and `deploy.yml` (auto on push to master — builds and deploys to GitHub Pages).

## Context
Automates the release and deploy pipeline. Test jobs for GEN-005-vitest-unit-tests.md and GEN-006-playwright-e2e-tests.md will be slotted into `deploy.yml` once those suites are ready.

## Details
- [x] Create `.github/workflows/deploy.yml` — build + deploy on push to master
- [x] Create `.github/workflows/release.yml` — selective sync development → master via PR
- [x] Add `base: '/whatschat/'` to `vite.config.js` for correct GitHub Pages asset paths
- [ ] Add test job to `deploy.yml` once GEN-005-vitest-unit-tests.md is complete
- [ ] Add E2E job to `deploy.yml` once GEN-006-playwright-e2e-tests.md is complete
- [ ] Enable branch protection on `master` requiring deploy workflow to pass before merge

## Status
complete

## Updates

### 2026-05-17
`deploy.yml` uses official GitHub Actions Pages actions (configure-pages, upload-pages-artifact, deploy-pages). `release.yml` creates a `release/` branch from master, cherry-picks whitelisted app files from development, raises PR to master via `gh` CLI with GITHUB_TOKEN. `vite.config.js` base set to `/whatschat/`. Pages source must be set to "GitHub Actions" in repo Settings → Pages.

Whitelist: `src/`, `public/`, `index.html`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `package.json`, `package-lock.json`, `docker-compose.yml`, `docker-compose.prod.yml`, `.gitignore`, `.github/`, `README.md`, `LICENSE`.
