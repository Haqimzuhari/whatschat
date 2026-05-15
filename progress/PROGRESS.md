# Project progress

> **Purpose:** Track where we left off so any session can resume without losing context.
> Update the "Current session" block at the start of every work session and move it to history when done.

---

## How to use this file

1. At the start of a session, read "Last known state" to orient yourself.
2. Update "Current session" with today's date, what you are doing, and which features/tickets are in flight.
3. At the end of a session, cut the current session block and paste it under "Session history" before starting a new one.
4. Keep "Last known state" always reflecting the true current state of the project.

---

## Last known state

```
Branch       : chore/GEN-001-docker-scaffold (open PR → development)
Last commit  : a724509 — GEN-001 scaffold complete
Docker status: scaffold done (docker-compose.scaffold.yml); dev compose not yet written (GEN-002)
App status   : scaffolded — Vue 3 + Vite + Tailwind v3 + Inter in place, not yet running
Blocking item: GEN-001 PR needs merging → development before GEN-002 starts
Docs status  : complete
```

---

## Current session

```
Date         : 2026-05-16
Agent/person : AGT-000 → AGT-003 + AGT-001
Goal         : Set up branching strategy (GEN-007) and Docker scaffold (GEN-001)
In-flight    : GEN-002 (next)
Completed    : GEN-007 (branching), GEN-001 (scaffold + Tailwind + Inter)
Blocked by   : GEN-001 PR merge (manual — raise PR on GitHub)
Next step    : Merge chore/GEN-001-docker-scaffold → development, then start GEN-002
```

---

## Delegation — 2026-05-16

```
Delegating to : AGT-003 — DevOps Engineer
Session goal  : Bootstrap the project infrastructure so app development can begin
Entry refs    : GEN-007, GEN-001, GEN-002
CC            : AGT-001 — Architect (Vite + Tailwind config during scaffold step)

Instructions  :
  1. GEN-007 — Initialise git repo, create master + development branches, document
               naming conventions, set branch protection rules on master.

  2. GEN-001 — Write docker-compose.scaffold.yml using node:20-alpine. Run the
               scaffolder to generate the Vue 3 + Vite project in the host directory.
               Hand off to AGT-001 to configure vite.config.js and Tailwind.

  3. GEN-002 — Replace scaffold compose with docker-compose.yml (dev, hot-reload,
               port 5173). Confirm `docker compose up` starts the dev server.
               Verify src/ hot-reload works before closing this step.

  Success criteria:
  - `git log` shows initial commit on master, development branch exists
  - `docker compose up` starts Vite dev server on localhost:5173
  - Tailwind and Inter font are wired up (AGT-001 confirms)
  - GEN-007, GEN-001, GEN-002 entries updated to in-progress / complete
```

---

## Session history

<!-- Oldest at the bottom, newest at the top -->

<!--
TEMPLATE — copy this block when archiving a session:

### YYYY-MM-DD

| Field       | Value |
|-------------|-------|
| Agent/person |      |
| Branch      |       |
| Goal        |       |
| Completed   |       |
| Left off at |       |
| Next step   |       |
| Related     | FEAT-XXX / HF-XXX / GEN-XXX |

-->

---

## Milestone tracker

| Milestone | Target | Status | Notes |
|-----------|--------|--------|-------|
| Docker scaffold (Phase 1) | 2026-05-16 | complete | GEN-001 — PR open, pending merge |
| Docker dev environment (Phase 2) | — | not started | GEN-002 — starts after GEN-001 merge |
| Vue app skeleton | — | blocked | waiting on GEN-002 |
| Country dropdown | — | not started | FEAT-001 |
| Phone input + sanitiser | — | not started | FEAT-002 |
| Link generator | — | not started | FEAT-003 |
| Copy + open tab buttons | — | not started | FEAT-004 |
| Validation + toasts | — | not started | FEAT-005 |
| Dark/light mode | — | not started | FEAT-006 |
| Responsive + mobile keyboard fix | — | not started | FEAT-007 |
| Geolocation auto-select | — | not started | FEAT-008 |
| Unit + component tests | — | not started | GEN-001 |
| E2E tests | — | not started | GEN-002 |
| CI/CD pipeline | — | not started | GEN-003 |
| GitHub Pages deploy | — | not started | GEN-004 |
