# WhatsChat

**Generate a WhatsApp link from any phone number — no contact saving required.**

Live at: **https://haqimzuhari.github.io/whatschat/**

---

## What it does

Paste or type a phone number, pick a country code, and WhatsChat instantly builds a `wa.me/` link you can copy or open in WhatsApp. No app installs, no contact saving, no friction.

Built for the scenario where you have a number and just want to send one message.

---

## Features

- Country code dropdown with search — 200+ countries
- Auto-detects your country on load via IP geolocation
- Phone number sanitiser — strips spaces, dashes, and symbols automatically
- Generates a valid `https://wa.me/<number>` link
- One-click copy and open-in-WhatsApp buttons
- Input validation with toast notifications
- Dark and light mode (persists across sessions)
- Mobile-friendly — scrolls input into view when keyboard opens

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Vue 3 (Composition API) |
| Build tool | Vite |
| Styling | Tailwind CSS v3 + Inter font |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Dev environment | Docker (no local Node.js required) |

---

## Running locally

No local Node.js installation required — everything runs in Docker.

**Dev server (hot-reload, port 5173):**
```sh
docker compose up
```
Open http://localhost:5173. Stop with `docker compose down`.

**Production build (outputs `dist/`):**
```sh
docker compose -f docker-compose.prod.yml run --rm build
```

---

## Deployment

The app is deployed automatically to GitHub Pages on every push to `master` via GitHub Actions.

To ship a new release from `development`:
1. Go to **Actions → Prepare Release to Master → Run workflow**
2. The workflow syncs only app source files (no project docs) to a `release/` branch and opens a PR
3. Review and merge the PR — the deploy workflow fires automatically

---

## License

MIT — see [LICENSE](LICENSE)
