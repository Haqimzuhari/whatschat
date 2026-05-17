## Description
Text input that accepts any phone number format (with/without country code, dashes, spaces, parentheses, plus signs) and sanitises to pure digits for link generation.

## Context
Users paste or type numbers in varied formats. Output must be clean digits ready for concatenation with the dial code from FEAT-001-country-dropdown.md.

## Details
- [x] Accepts paste of numbers like `+60 12-345 6789`, `0123456789`, `(012) 345-6789`
- [x] Strips all non-digit characters after input
- [x] Strips leading country code if it duplicates the selected country's dial code
- [x] Rejects any input that contains letters
- [x] Shows inline validation error when rules are violated (depends on FEAT-005-validation-toast-notifications.md)
- [x] Output is digits-only, ready for concatenation with dial code

## Status
complete

## Updates

### 2026-05-16
`@input` handler strips non-digits via `/[^0-9]/g`. Strips leading `0` (trunk prefix) before dial-code concat. Detects and strips duplicate dial-code prefix if user pastes full number.

Files: `src/utils/phoneUtils.js` (sanitisePhone, hasLetters), `src/components/PhoneInput.vue`. Red border via computed phoneError.
