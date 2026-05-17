## Description
Dev compose file with hot-reload on port 5173 and prod compose file that builds `dist/` for local verification before deploy.

## Context
Replaces the scaffold compose from GEN-001-docker-scaffold.md with a proper ongoing development environment. Prod compose is for local verification only — actual deployment is handled by GEN-003-github-actions-cicd.md.

## Details
- [x] Write `docker-compose.yml` — dev service (hot-reload, port 5173)
- [x] Write `docker-compose.prod.yml` — build service outputs `dist/`
- [x] Confirm `docker compose up` starts dev server correctly
- [x] Confirm prod build produces `dist/index.html`
- [x] Document both commands in `PROJECT.md`

## Status
complete

## Updates

### 2026-05-16
`docker-compose.yml`: `node:20-alpine`, port 5173, named `node_modules` volume, `npm install && npm run dev -- --host`. `docker-compose.prod.yml`: same image, `npm install && npm run build`. Dev server HTTP 200 on `localhost:5173`. Prod build outputs `dist/index.html` (62.90 kB JS, 3.53 kB CSS). Named `node_modules` volume keeps container's Linux-compatible modules separate from host source files.
