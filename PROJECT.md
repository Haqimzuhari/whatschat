# WhatsChat

Single-page web app that generates a `wa.me/` WhatsApp link from a phone number. No contact saving required. Works on mobile and desktop.

**Live:** https://haqimzuhari.github.io/whatschat/
**Stack:** Vue 3 · Vite · Tailwind CSS · Inter · Vitest · Playwright
**Repo:** git@github.com:Haqimzuhari/whatschat.git

---

## Running locally

**Dev server (hot-reload, port 5173):**
```sh
docker compose up
```
Open http://localhost:5173. Stop with `docker compose down`.

**Production build (outputs `dist/`):**
```sh
docker compose -f docker-compose.prod.yml run --rm build
```

---

## Folder structure

```
PROJECT.md                              ← start here every session
context/
  agents/                              ← agent definitions (AGT-000 to AGT-005)
  features/
    functional/                        ← FEAT-NNN user-facing features
    nonfunctional/                     ← GEN-NNN infra, tooling, testing, deploy
  progress/                            ← one file per session (YYYY-MM-DD-N.md)
  templates/
    feature.md                         ← template for new feature files
    progress.md                        ← template for new progress files
```

---

## Latest progress

`context/progress/2026-05-17-3.md`

---

## Functional features

| File | Description | Status |
|------|-------------|--------|
| [FEAT-001-country-dropdown.md](context/features/functional/FEAT-001-country-dropdown.md) | Searchable country + dial code selector | complete |
| [FEAT-002-phone-input-sanitiser.md](context/features/functional/FEAT-002-phone-input-sanitiser.md) | Phone input that strips non-digits | complete |
| [FEAT-003-whatsapp-link-generator.md](context/features/functional/FEAT-003-whatsapp-link-generator.md) | Builds `wa.me/` link from dial code + number | complete |
| [FEAT-004-copy-open-tab-buttons.md](context/features/functional/FEAT-004-copy-open-tab-buttons.md) | Copy link and open-in-new-tab buttons | complete |
| [FEAT-005-validation-toast-notifications.md](context/features/functional/FEAT-005-validation-toast-notifications.md) | Inline validation and toast notifications | complete |
| [FEAT-006-dark-light-mode.md](context/features/functional/FEAT-006-dark-light-mode.md) | Dark/light mode with OS preference + toggle | complete |
| [FEAT-007-responsive-mobile-ux.md](context/features/functional/FEAT-007-responsive-mobile-ux.md) | Responsive layout with mobile keyboard fix | complete |
| [FEAT-008-geolocation-auto-select.md](context/features/functional/FEAT-008-geolocation-auto-select.md) | IP geolocation auto-selects country on load | complete |
| [FEAT-009-inline-phone-row-layout.md](context/features/functional/FEAT-009-inline-phone-row-layout.md) | Country selector and phone input on same row | complete |

---

## Nonfunctional features

| File | Description | Status |
|------|-------------|--------|
| [GEN-001-docker-scaffold.md](context/features/nonfunctional/GEN-001-docker-scaffold.md) | One-time Vue 3 + Vite project bootstrap via Docker | complete |
| [GEN-002-docker-dev-prod.md](context/features/nonfunctional/GEN-002-docker-dev-prod.md) | Dev hot-reload and prod build compose files | complete |
| [GEN-003-github-actions-cicd.md](context/features/nonfunctional/GEN-003-github-actions-cicd.md) | Release and deploy GitHub Actions workflows | complete |
| [GEN-004-github-pages-deployment.md](context/features/nonfunctional/GEN-004-github-pages-deployment.md) | GitHub Pages live hosting setup | complete |
| [GEN-005-vitest-unit-tests.md](context/features/nonfunctional/GEN-005-vitest-unit-tests.md) | Vitest unit and component test suite | not-started |
| [GEN-006-playwright-e2e-tests.md](context/features/nonfunctional/GEN-006-playwright-e2e-tests.md) | Playwright E2E test suite | not-started |
| [GEN-007-git-branching-strategy.md](context/features/nonfunctional/GEN-007-git-branching-strategy.md) | Branching strategy, naming, PR workflow | complete |

---

## Agent roster

| File | Role | Activates for |
|------|------|---------------|
| [AGT-000-coordinator.md](context/agents/AGT-000-coordinator.md) | Project Coordinator | Every session — reads state, delegates, closes |
| [AGT-001-architect.md](context/agents/AGT-001-architect.md) | Project Architect | Tech decisions, scaffold, config, ADRs |
| [AGT-002-frontend.md](context/agents/AGT-002-frontend.md) | Frontend Developer | All FEAT-NNN implementation |
| [AGT-003-devops.md](context/agents/AGT-003-devops.md) | DevOps Engineer | Docker, CI/CD, branching |
| [AGT-004-qa.md](context/agents/AGT-004-qa.md) | QA Engineer | Tests and coverage |
| [AGT-005-deployment.md](context/agents/AGT-005-deployment.md) | Deployment Strategist | Hosting, env vars, live verification |

---

## Session protocol

### Session start
1. Read this file — get project context, feature statuses, and latest progress pointer
2. Read the latest progress file listed above — understand current state and next step
3. State your session goal
4. AGT-000 reads its definition at [AGT-000-coordinator.md](context/agents/AGT-000-coordinator.md) and delegates to the correct specialist

### Session end (AGT-000 responsibility)
1. Update the relevant feature file(s) — tick completed criteria, append dated entry to `## Updates`
2. Update the feature status in the tables above if it changed
3. Write a new progress file in `context/progress/` — today's date + next sequence number
4. Update the "Latest progress" pointer above to the new file

---

## Branching summary

| Branch | Purpose |
|--------|---------|
| `master` | Stable — auto-deploys to GitHub Pages. App source only. |
| `development` | Active development — all PRs target here first. |

Full branching details in [GEN-007-git-branching-strategy.md](context/features/nonfunctional/GEN-007-git-branching-strategy.md).

`context/` and `PROJECT.md` never reach `master` — enforced by the `release.yml` workflow whitelist.
