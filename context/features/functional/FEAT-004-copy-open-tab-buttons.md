## Description
Two action buttons after link generation: copy link to clipboard and open link in a new browser tab.

## Context
Users need to use the generated link without manually selecting text. Both buttons are hidden until a valid link is generated via FEAT-003-whatsapp-link-generator.md.

## Details
- [x] "Copy link" copies the URL to clipboard via `navigator.clipboard.writeText`
- [x] Button label changes to "Copied!" for 2 seconds then reverts
- [x] "Start chatting" opens the link in a new tab (`window.open(url, '_blank')`)
- [x] Both buttons hidden until a valid link has been generated

## Status
complete

## Updates

### 2026-05-16
Copy uses `navigator.clipboard` with `document.execCommand('copy')` textarea fallback. Label reverts after 2s. Start chatting uses `window.open` with `noopener`.
