## Description
One-time bootstrap of the Vue 3 + Vite project via a Docker scaffold container. No local Node.js install required.

## Context
Team uses Docker to avoid requiring Node.js on host machines. This is a one-time setup step; ongoing dev environment is handled by GEN-002-docker-dev-prod.md.

## Details
- [x] Write `docker-compose.scaffold.yml` — one-off service to run Vite scaffolder
- [x] Run: `docker compose -f docker-compose.scaffold.yml run --rm scaffold`
- [x] Confirm `src/`, `vite.config.js`, `package.json` generated on host
- [x] Install Tailwind CSS and configure `tailwind.config.js` inside container
- [x] Add Inter font via Google Fonts in `index.html`

## Status
complete

## Updates

### 2026-05-16
Scaffolded Vue 3 + Vite via `docker-compose.scaffold.yml` using `node:20-alpine`. Generated `src/`, `public/`, `index.html`, `package.json`, `vite.config.js`, `.gitignore` on host. Tailwind CSS v3 + PostCSS + Autoprefixer installed. `tailwind.config.js` configured with `darkMode: 'class'`, content paths, and Inter font family. Inter Google Fonts import and page title "WhatsChat" added to `index.html`.
