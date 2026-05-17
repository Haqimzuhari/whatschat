## Description
Two-tier error feedback: inline validation above the offending field in real time, and a toast notification on failed submit that auto-dismisses after 5 seconds.

## Context
Users need clear feedback when input is invalid. Inline errors catch issues as they type; toasts catch submit-time failures triggered from FEAT-003-whatsapp-link-generator.md.

## Details
- [x] Inline error appears above phone field if letters are detected on input
- [x] Inline error clears as soon as field becomes valid
- [x] Toast appears at top of screen on failed generate attempt
- [x] Toast message is human-readable and concise (max ~60 characters)
- [x] Toast auto-dismisses after 5 seconds
- [x] Toast can be manually dismissed before timeout
- [x] Multiple toasts stack without overlapping

## Status
complete

## Updates

### 2026-05-16
`src/composables/useToast.js` — `ref([])` queue, each toast has id, message, setTimeout cleanup. `src/components/ToastContainer.vue` — fixed top-center, stacks, auto-dismisses after 5s, manual dismiss via X button. Generate guards: no country, empty phone, letter error, empty sanitised result.
