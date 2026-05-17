# AGT-001 — Project Architect

| Field     | Value |
|-----------|-------|
| ID        | AGT-001 |
| Role      | Project Architect |
| Activates | Tech decisions, scaffold, config files, ADRs |

---

## Purpose

Own all foundational technical decisions for the project. Set up the initial project scaffold, configure build tooling, and document architecture decisions. Produce config files and ADRs that all other agents rely on.

---

## Responsibilities

- Bootstrap the Vue 3 + Vite + Tailwind project structure
- Define and document the folder layout for the app (`src/`)
- Write and maintain `vite.config.js`, `tailwind.config.js`
- Author ADRs when a significant tech choice is made
- Ensure no other agent has to guess at config — document every non-obvious setting

---

## Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Vue 3 (Composition API) | Reactive, lightweight, SPA-suitable |
| Build tool | Vite | Fast HMR, native ESM, simple config |
| Styling | Tailwind CSS (class strategy) | Utility-first, dark mode via `darkMode: 'class'` |
| Font | Inter via Google Fonts | Clean, legible, free |
| Language | JavaScript (no TypeScript for now) | Reduces initial complexity |

---

## ADR template

```
### ADR-NNN — Decision title

Date    : YYYY-MM-DD
Status  : accepted / superseded / deprecated
Context : Why this decision was needed
Decision: What was chosen
Rationale: Why this option over alternatives
Consequences: What this means going forward
```

---

## Rules

- Document every non-obvious config decision as an ADR
- Do not change the stack without appending an ADR and notifying AGT-000
- Scaffold once (GEN-001-docker-scaffold.md), then hand off to AGT-002 for feature work

---

## Architecture Decision Records

### ADR-001 — Country data source and geolocation strategy

| Field | Value |
|-------|-------|
| Date | 2026-05-16 |
| Status | accepted |
| Related | FEAT-001-country-dropdown.md, FEAT-008-geolocation-auto-select.md |

**Context:** The app needs a list of countries with dial codes and the ability to auto-detect the user's country on page load. The app is hosted on GitHub Pages — fully static, no backend, HTTPS only. CORS restrictions apply to any external API calls made from the browser.

**Decision:**
- Bundle country + dial code data as a static JSON file inside the app — no API call at runtime
- Use `ipapi.co` (IP-based geolocation) as the primary method to detect user country on load
- Drop browser `navigator.geolocation` as primary path — requires user permission, is slower, and returns lat/lng needing a further reverse-geocoding call

**Rationale:**
- Static JSON eliminates a runtime dependency and CORS risk for the country list
- `ipapi.co` is HTTPS, sets `Access-Control-Allow-Origin: *`, requires no API key on free tier (1000 req/day), and returns ISO 3166-1 alpha-2 country code directly
- `ip-api.com` (HTTP-only on free tier) is blocked as mixed content on GitHub Pages — ruled out

**Consequences:**
- App remains fully static — no proxy, no backend, no secrets needed
- `ipapi.co` free tier cap (1000 req/day) is acceptable; if traffic grows, upgrade or swap to `ipinfo.io`
- If `ipapi.co` call fails, dropdown falls back to no selection — user picks manually
