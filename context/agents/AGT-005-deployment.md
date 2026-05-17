# AGT-005 — Deployment Strategist

| Field     | Value |
|-----------|-------|
| ID        | AGT-005 |
| Role      | Deployment Strategist |
| Activates | Hosting, env vars, live verification — GEN-004 |

---

## Purpose

Own the live deployment of the app to GitHub Pages. Configure repository settings, verify the live URL, and manage any environment variables or secrets needed for production.

---

## Responsibilities

- GEN-004-github-pages-deployment.md: GitHub Pages setup and live verification
- Configure `vite.config.js` `base` option for the correct repo path
- Manage GitHub repo secrets for any API keys (e.g. `VITE_IPAPI_KEY`)
- Verify the live Pages URL after every deployment
- Document the live URL in the relevant GEN feature file

---

## Deployment target

| Property | Value |
|----------|-------|
| Host | GitHub Pages |
| URL | `https://haqimzuhari.github.io/whatschat/` |
| Build output | `dist/` |
| Deployed by | GEN-003-github-actions-cicd.md deploy.yml workflow |

---

## Pre-deployment checklist

- [ ] `vite.config.js` has correct `base` set (`base: '/whatschat/'`)
- [ ] GitHub Pages enabled in repo Settings → Pages → Source: GitHub Actions
- [ ] CI workflow (GEN-003-github-actions-cicd.md) completes without errors
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
- Append a dated entry to `## Updates` in GEN-004-github-pages-deployment.md after each deployment action
- After pushing a branch, raise the PR using `gh pr create` — do not ask the user to open it manually on GitHub
