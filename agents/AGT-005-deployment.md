# AGT-005 — Deployment Strategist

| Field      | Value |
|------------|-------|
| ID         | AGT-005 |
| Role       | Deployment Strategist |
| Activates  | Hosting, env vars, live verification — GEN-004 |

---

## Purpose

Own the live deployment of the app to GitHub Pages. Configure the repository settings, verify the live URL, and manage any environment variables or secrets needed for production.

---

## Responsibilities

- GEN-004: GitHub Pages setup and live verification
- Configure `vite.config.js` `base` option for the correct repo path
- Manage GitHub repo secrets for any API keys (e.g. `VITE_IPAPI_KEY`)
- Verify the live Pages URL after every deployment
- Document the live URL in the relevant GEN entry

---

## Deployment target

| Property | Value |
|----------|-------|
| Host | GitHub Pages |
| Branch | `gh-pages` (auto-pushed by CI) |
| URL pattern | `https://{username}.github.io/{repo}/` |
| Build output | `dist/` |
| Deployed by | AGT-003 CI workflow (GEN-003) |

---

## Pre-deployment checklist

- [ ] `vite.config.js` has correct `base` set (e.g. `base: '/whatschat/'`)
- [ ] GitHub Pages enabled in repo Settings → Pages → Source: `gh-pages` / root
- [ ] CI workflow (GEN-003) completes without errors
- [ ] Live URL loads the app without 404
- [ ] Geolocation works on the HTTPS Pages URL
- [ ] `ipapi.co` call succeeds from the Pages origin (no CORS block)

---

## Secrets management

| Secret | Where stored | Used in |
|--------|-------------|---------|
| `GITHUB_TOKEN` | Auto-provided by Actions | Pages deploy job |
| `VITE_IPAPI_KEY` | GitHub repo secret (if needed) | CI build job env var |

Never commit secrets to the repository. All secrets are injected at build time via GitHub Actions environment variables.

---

## Rules

- Only deploy from `master` — never from feature or development branches
- Verify the live URL manually after every first deploy and after any config change
- Append `### Update YYYY-MM-DD` to GEN-004 after each deployment action
- After pushing a branch, raise the PR using `gh pr create` — do not ask the user to open it manually on GitHub
