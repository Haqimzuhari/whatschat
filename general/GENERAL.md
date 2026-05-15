# General tasks

> **Purpose:** Track non-feature work — infrastructure, testing setup, deployment, automation, tooling, and configuration. Anything that doesn't map to a user-facing feature belongs here.
>
> **ID format:** `GEN-NNN` (three-digit zero-padded). Reference these IDs in commit messages and PROGRESS.md.
>
> **Rule:** Append-only. To update a task, add an `### Update YYYY-MM-DD` block under it.

---

## How to add a task

1. Copy the template below.
2. Assign the next available `GEN-NNN` id.
3. Paste at the **bottom** of this file.
4. To update, append an `### Update YYYY-MM-DD` block — do not edit original fields.

---

## Categories

| Category | When to use |
|----------|-------------|
| `docker` | Docker, docker compose, image setup |
| `ci-cd` | GitHub Actions, pipelines, branch strategy |
| `testing` | Test framework setup, test coverage, test infra |
| `deployment` | Hosting config, domain, environment variables |
| `tooling` | Linters, formatters, build config, IDE setup |
| `docs` | README, contributing guide, this folder |
| `security` | Secrets management, dependency audit |

---

## Task template

```
---

## GEN-NNN — Short description

| Field      | Value |
|------------|-------|
| ID         | GEN-NNN |
| Category   | docker / ci-cd / testing / deployment / tooling / docs / security |
| Status     | planned / in-progress / complete |
| Agent      | |
| Created    | YYYY-MM-DD |
| Updated    | YYYY-MM-DD |
| Related    | FEAT-NNN / HF-NNN / GEN-NNN |

### Description

What needs to be done and why.

### Steps

- [ ] Step 1
- [ ] Step 2

### Notes

Any relevant decisions, trade-offs, or links.

### Update YYYY-MM-DD

What changed.
```

---

## GEN-001 — Docker Phase 1: project scaffold

| Field      | Value |
|------------|-------|
| ID         | GEN-001 |
| Category   | docker |
| Status     | planned |
| Agent      | Agent 3 — DevOps Engineer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | GEN-002 |

### Description

Bootstrap the Vue 3 project using Docker so no local Node.js install is required. Use a `node:20-alpine` image to run `npm create vite@latest` inside the container and generate the initial codebase.

### Steps

- [ ] Write `docker-compose.scaffold.yml` with a one-off service that mounts the project root and runs the Vite scaffolder
- [ ] Run `docker compose -f docker-compose.scaffold.yml run --rm scaffold`
- [ ] Confirm `src/`, `vite.config.js`, `package.json` are generated in the host directory
- [ ] Install Tailwind CSS and configure `tailwind.config.js` inside the container
- [ ] Add Inter font via Google Fonts import in `index.html`

### Notes

This is a one-time step. After scaffold, switch to GEN-002 for the ongoing dev compose file.

---

## GEN-002 — Docker Phase 2: dev and prod compose

| Field      | Value |
|------------|-------|
| ID         | GEN-002 |
| Category   | docker |
| Status     | planned |
| Agent      | Agent 3 — DevOps Engineer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | GEN-001, GEN-003 |

### Description

Replace the scaffold compose with a proper development and production setup. Dev image mounts `src/` for Vite hot-reload. Prod image runs `vite build` and serves `dist/` — used to verify the production build locally before deploying.

### Steps

- [ ] Write `docker-compose.yml` with a `dev` service (hot-reload, port 5173)
- [ ] Write `docker-compose.prod.yml` with a `build` service that outputs `dist/`
- [ ] Confirm `docker compose up` starts the dev server correctly
- [ ] Confirm `docker compose -f docker-compose.prod.yml run --rm build` produces `dist/index.html`
- [ ] Document both commands in `README.md`

### Notes

Always use `docker compose` (v2 syntax) not `docker-compose` (v1). The prod compose is for local verification only — actual deployment is handled by GitHub Actions (GEN-003).

---

## GEN-003 — GitHub Actions CI/CD pipeline

| Field      | Value |
|------------|-------|
| ID         | GEN-003 |
| Category   | ci-cd |
| Status     | planned |
| Agent      | Agent 3 — DevOps Engineer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | GEN-001, GEN-004, GEN-005, GEN-006 |

### Description

GitHub Actions workflow that runs on push to `master`. Steps: install dependencies → run unit/component tests → run E2E tests → build → deploy to `gh-pages` branch. Tests must pass before deploy runs.

### Steps

- [ ] Create `.github/workflows/deploy.yml`
- [ ] Add `install` job: `npm ci`
- [ ] Add `test` job: runs Vitest (unit + component), depends on install
- [ ] Add `e2e` job: runs Playwright, depends on test
- [ ] Add `build` job: `npm run build`, depends on e2e
- [ ] Add `deploy` job: uses `peaceiris/actions-gh-pages@v3` to push `dist/` to `gh-pages`, depends on build
- [ ] Add branch protection on `master` requiring workflow to pass

### Notes

Secrets needed: none for GitHub Pages deploy (uses `GITHUB_TOKEN` which is auto-provided). If `VITE_IPAPI_KEY` is added later, store it as a GitHub repo secret and inject as env var in the build job.

---

## GEN-004 — GitHub Pages deployment

| Field      | Value |
|------------|-------|
| ID         | GEN-004 |
| Category   | deployment |
| Status     | planned |
| Agent      | Agent 5 — Deployment Strategist |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | GEN-003 |

### Description

Configure the GitHub repository to serve the `gh-pages` branch as a GitHub Pages site. Confirm the SPA works correctly at the Pages URL (no 404 on refresh since this is a single-page app with no routing).

### Steps

- [ ] Enable GitHub Pages in repo Settings → Pages → Source: `gh-pages` branch, `/ (root)`
- [ ] Confirm `https://{username}.github.io/{repo}/` loads the app
- [ ] Test geolocation on the live HTTPS Pages URL
- [ ] Add `vite.config.js` `base` option if the repo is not at root (e.g. `base: '/{repo-name}/'`)
- [ ] Document the live URL in `README.md`

### Notes

No server required — the app is a fully static SPA. All geolocation calls are client-side. The `ipapi.co` call is HTTPS and CORS-open so it works from a Pages URL with no proxy.

---

## GEN-005 — Vitest unit and component tests

| Field      | Value |
|------------|-------|
| ID         | GEN-005 |
| Category   | testing |
| Status     | planned |
| Agent      | Agent 4 — QA Engineer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | FEAT-001, FEAT-002, FEAT-003, FEAT-005, GEN-003 |

### Description

Set up Vitest for unit and component testing. Write tests for the phone sanitiser, country filter, link builder, and Vue components (dropdown, validation messages).

### Steps

- [ ] Install `vitest`, `@vue/test-utils`, `@vitejs/plugin-vue`, `jsdom`
- [ ] Add `vitest.config.js` with jsdom environment
- [ ] Add `test` script to `package.json`
- [ ] Write unit tests for `sanitisePhone()` utility (strips spaces, dashes, +, letters)
- [ ] Write unit tests for `buildLink()` utility (correct wa.me format)
- [ ] Write unit tests for `filterCountries()` utility (search matching)
- [ ] Write component tests for the country dropdown (renders options, search filters list)
- [ ] Write component tests for inline validation messages
- [ ] Aim for >80% coverage on utility functions

---

## GEN-006 — Playwright E2E tests

| Field      | Value |
|------------|-------|
| ID         | GEN-006 |
| Category   | testing |
| Status     | planned |
| Agent      | Agent 4 — QA Engineer |
| Created    | 2024-01-01 |
| Updated    | 2024-01-01 |
| Related    | FEAT-001, FEAT-002, FEAT-003, FEAT-004, GEN-003 |

### Description

Set up Playwright for end-to-end testing. Cover the main happy path (paste number → generate link → copy / open tab) and key failure paths (empty input, letters in number).

### Steps

- [ ] Install `@playwright/test` and run `npx playwright install chromium`
- [ ] Write `playwright.config.ts` pointing at `http://localhost:5173`
- [ ] Happy path test: select Malaysia, type `0123456789`, click generate, assert link is `https://wa.me/60123456789`
- [ ] Paste test: paste `+60 12-345 6789`, assert same result
- [ ] Validation test: type `abc123`, assert inline error appears
- [ ] Empty submit test: click generate with empty phone, assert toast appears
- [ ] Copy test: click copy button, assert button label changes to "Copied!"
- [ ] Mobile viewport test: at 375px, focus phone field, assert field is visible (not behind keyboard)
- [ ] Add Playwright to CI (GEN-003) as a separate job

---

## GEN-007 — Git branching strategy

| Field      | Value |
|------------|-------|
| ID         | GEN-007 |
| Category   | ci-cd |
| Status     | complete |
| Agent      | AGT-003 — DevOps Engineer |
| Created    | 2024-01-01 |
| Updated    | 2026-05-16 |
| Related    | GEN-003 |

### Description

Define and document the branching strategy so all agents and contributors follow a consistent flow.

### Steps

- [x] Create `master` branch (stable, deploys to Pages)
- [x] Create `development` branch from master (active development)
- [x] Document branch naming conventions in `README.md`
- [ ] Configure branch protection on `master`: require PR + passing CI before merge — **manual step: set in GitHub repo Settings → Branches**

### Update 2026-05-16

`master` branch confirmed on remote. `development` branch created from master and pushed to `origin/development`. Branch naming conventions documented in README.md. Branch protection on `master` cannot be set via CLI (gh not installed) — must be configured manually in GitHub → Settings → Branches → Add rule: require PR review + status checks before merge.

### Notes

Branch naming:
- Feature work: `feature/FEAT-NNN-short-slug`
- Hotfixes: `hotfix/HF-NNN-short-slug`
- General/infra: `chore/GEN-NNN-short-slug`
- Releases: `release/v0.x.x`

Flow: `feature/*` → `development` → (PR) → `master` → auto-deploy to Pages.
Hotfixes branch off `master` directly and merge back to both `master` and `development`.
