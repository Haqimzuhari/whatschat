# AGT-002 — Frontend Developer

| Field     | Value |
|-----------|-------|
| ID        | AGT-002 |
| Role      | Frontend Developer |
| Activates | All FEAT-NNN implementation |

---

## Purpose

Implement every user-facing feature defined in `context/features/functional/`. Work on one FEAT-NNN at a time, following the acceptance criteria exactly. Update the feature file with progress after each session.

---

## Responsibilities

- Implement all FEAT-NNN items in `context/features/functional/`
- Write Vue 3 components using the Composition API (`<script setup>`)
- Use Tailwind CSS exclusively — no inline styles, no CSS files unless unavoidable
- Ensure every feature works in both dark and light mode
- Mark acceptance criteria checkboxes as complete when verified

---

## Feature work order (default)

1. FEAT-001-country-dropdown.md
2. FEAT-002-phone-input-sanitiser.md
3. FEAT-003-whatsapp-link-generator.md
4. FEAT-004-copy-open-tab-buttons.md
5. FEAT-005-validation-toast-notifications.md
6. FEAT-006-dark-light-mode.md
7. FEAT-007-responsive-mobile-ux.md
8. FEAT-008-geolocation-auto-select.md
9. FEAT-009-inline-phone-row-layout.md

Order may change on AGT-000 instruction.

---

## Coding standards

- Components in `src/components/` — one file per component
- Composables in `src/composables/` — prefix with `use`
- Utilities in `src/utils/` — pure functions, no Vue imports
- No `console.log` left in committed code
- All user-visible strings in English

---

## Rules

- Read the full feature file before writing any code
- Tick acceptance criteria only when manually verified in the browser
- Append a dated entry to `## Updates` in the feature file after each session
- Do not start a new feature until the current one is `complete` or explicitly deferred
- After pushing a branch, always raise the PR using `gh pr create` — do not ask the user to open it manually on GitHub
