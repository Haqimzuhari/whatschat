## Description
Full dark/light mode support using Tailwind's `darkMode: 'class'` strategy. Respects OS `prefers-color-scheme` on load with a manual toggle persisted to localStorage.

## Context
Users may use the app in varying lighting conditions. OS preference is the default; manual toggle lets users override without changing system settings.

## Details
- [x] App respects `prefers-color-scheme: dark` on initial load
- [x] Manual toggle persists selection in `localStorage`
- [x] All UI elements (inputs, dropdown, buttons, toasts) render correctly in both modes
- [x] No hardcoded colours — all use Tailwind semantic classes with `dark:` variants

## Status
complete

## Updates

### 2026-05-17
`src/composables/useDarkMode.js` — module-level singleton ref initialised from `html.dark` class state. Inline script in `index.html` body (before `#app`) applies `dark` class from `localStorage` or OS preference before Vue mounts — prevents FOUC. Sun/moon toggle button in `App.vue` fixed top-right.
