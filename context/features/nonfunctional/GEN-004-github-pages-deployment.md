## Description
GitHub Pages serves the built app from `master` via GitHub Actions. Deploy workflow fires on every push to master and deploys `dist/` output to Pages.

## Context
Static hosting for the SPA on GitHub's free Pages infrastructure. No server required. Build and deploy is fully automated by GEN-003-github-actions-cicd.md.

## Details
- [x] Set `base: '/whatschat/'` in `vite.config.js`
- [x] Enable GitHub Pages — repo Settings → Pages → Source: GitHub Actions
- [x] Trigger first release via Actions → Prepare Release to Master → Run workflow
- [x] Merge release PR into master
- [x] Confirm deploy workflow completes in Actions tab
- [x] Confirm `https://haqimzuhari.github.io/whatschat/` loads the app
- [x] Document live URL in `README.md`
- [ ] Test geolocation on live HTTPS Pages URL (pending)

## Status
complete

## Updates

### 2026-05-17
GitHub Pages source set to "GitHub Actions". First release triggered — fixed `GITHUB_TOKEN` PR creation permission (Settings → Actions → General → allow GitHub Actions to create PRs). Release PR merged to master. `deploy.yml` fired automatically. App live at `https://haqimzuhari.github.io/whatschat/`. README.md updated with live URL and full project description. One open step: test geolocation on live HTTPS URL.
