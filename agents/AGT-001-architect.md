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
