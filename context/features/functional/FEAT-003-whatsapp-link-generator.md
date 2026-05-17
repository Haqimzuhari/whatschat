## Description
Takes the selected dial code and sanitised phone number, assembles a `https://wa.me/{dialcode}{number}` URL, and displays it in a read-only field.

## Context
Core business logic. Connects FEAT-001-country-dropdown.md and FEAT-002-phone-input-sanitiser.md into a usable WhatsApp link.

## Details
- [x] Generated link follows format `https://wa.me/[country-code][number]`
- [x] No leading `+` or `0` in the final number
- [x] Link displayed in a read-only field below the generate button
- [x] Empty or invalid input blocks generation and shows a toast (depends on FEAT-005-validation-toast-notifications.md)

## Status
complete

## Updates

### 2026-05-16
`src/utils/linkUtils.js` (buildLink). Generate button in `App.vue` calls sanitisePhone then buildLink. Result shown in read-only monospace block.
