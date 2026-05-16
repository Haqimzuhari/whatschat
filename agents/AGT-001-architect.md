# AGT-001 — Project Architect

| Field      | Value |
|------------|-------|
| ID         | AGT-001 |
| Role       | Project Architect |
| Activates  | Tech decisions, scaffold, config files, ADRs |

---

## Purpose

Own all foundational technical decisions for the project. Set up the initial project scaffold, configure build tooling, and document architecture decisions. Produce config files and ADRs (Architecture Decision Records) that all other agents rely on.

---

## Responsibilities

- Bootstrap the Vue 3 + Vite + Tailwind project structure
- Define and document the folder layout for the app (`src/`)
- Write and maintain `vite.config.js`, `tailwind.config.js`, `tsconfig.json`
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
- Scaffold once (GEN-001), then hand off to AGT-002 for feature work

---

## Architecture Decision Records

### ADR-001 — Country data source and geolocation strategy

| Field | Value |
|-------|-------|
| Date | 2026-05-16 |
| Status | accepted |
| Related | FEAT-001, FEAT-008 |

**Context:** The app needs a list of countries with dial codes (FEAT-001) and the ability to auto-detect the user's country on page load (FEAT-008). The app is hosted on GitHub Pages — fully static, no backend, HTTPS only. CORS restrictions apply to any external API calls made from the browser.

**Decision:**
- Bundle country + dial code data as a static JSON file inside the app — no API call at runtime
- Use `ipapi.co` (IP-based geolocation) as the primary method to detect user country on load
- Drop browser `navigator.geolocation` as the primary path — it requires user permission, is slower, and returns lat/lng which requires a further reverse-geocoding API call

**Rationale:**
- Static JSON eliminates a runtime dependency and a potential CORS failure for the country list
- `ipapi.co` is HTTPS, sets `Access-Control-Allow-Origin: *`, requires no API key on the free tier (1000 req/day), and returns ISO 3166-1 alpha-2 country code directly — one call, zero config
- `ip-api.com` (HTTP-only on free tier) is blocked as mixed content on GitHub Pages — ruled out
- Browser geolocation + reverse geocoding adds two async steps and a permission prompt for a non-critical UX enhancement — not worth the complexity

**Consequences:**
- App remains fully static — no proxy, no backend, no secrets needed
- `ipapi.co` free tier cap (1000 req/day) is acceptable for this use case; if traffic grows, upgrade or swap to `ipinfo.io` (same CORS policy)
- If `ipapi.co` call fails, dropdown falls back to no selection — user picks manually
