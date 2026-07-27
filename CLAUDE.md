# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static site (no build step, no package manager, no framework) for `andrewautohub.com` (see `CNAME`), deployed as-is (e.g. GitHub Pages). It consists of:

- `index.html` — root landing page with links to social profiles and a CTA to `/tip`.
- `tip/` — the tipping flow:
  - `index.html` — the donation form (preset/custom amount, currency, name, message, Stripe checkout, Donation Alerts link).
  - `success.html`, `cancel.html` — Stripe redirect targets.
  - `policy/terms.html`, `policy/privacy.html`, `policy/refund.html` — legal pages.
  - `script.js` — form behavior and the Stripe/Donation Alerts integration.
  - `i18n.js` — translation dictionary and language-switching logic, shared by every page (root `index.html` included, via `/tip/i18n.js`).
  - `styles.css` — shared styles for the `tip/` pages.

## Running/testing locally

There is no build, lint, or test tooling in this repo. To preview changes, serve the directory with any static file server and open it in a browser (e.g. `npx serve .` or the VS Code Live Server extension), since some pages assume absolute paths like `/tip/i18n.js`, `/favicon.ico` that only resolve correctly when served from the repo root rather than opened as `file://`.

## Architecture notes

**Backend is external.** There is no server code in this repo. `tip/script.js` calls a separately-deployed API at `API_BASE_URL` (`https://hubproject-production-a4ff.up.railway.app`) for:
- `POST /api/checkout` — creates a Stripe Checkout session and returns `checkoutUrl` to redirect to.
- `POST /api/metrics/page-view` and `POST /api/metrics/da-click` — fire-and-forget analytics beacons (via `navigator.sendBeacon`), tagged with a `src` query param for attribution.

**i18n is a single shared dictionary, not per-page files.** `tip/i18n.js` defines one `TRANSLATIONS` object (`en`, `ru`, `ua`) containing keys for *every* page in the site (root page included). When adding user-facing text anywhere in the site:
1. Add the key to all three locales in `TRANSLATIONS`.
2. Reference it in HTML via `data-i18n="key"` (sets `textContent`), `data-i18n-html="key"` (sets `innerHTML`, for strings containing tags like `<br>`/`<a>`), or `data-i18n-placeholder="key"` (input/textarea placeholders).
3. Language is persisted to `localStorage['lang']` and detected from `navigator.language` on first visit (`uk` → mapped to the `ua` key). Switching language dispatches a `langchange` DOM event on `document` — `tip/script.js` listens to it to re-render currency symbols and toggle the Donation Alerts button (hidden for `en`).

Because root `index.html` also uses `data-i18n` and loads `/tip/i18n.js`, translation keys are effectively global — check both the root page and every `tip/` page for existing usage before renaming or removing a key.

**Payment flow:** preset buttons and the amount/currency inputs all write into `#amount`/`#currency`; the `#agree` checkbox gates both the Stripe (`#tipBtn`) and Donation Alerts (`#daBtn`) buttons. Stripe submission POSTs the form state to `/api/checkout` and redirects to the returned URL; Donation Alerts just logs a metrics beacon then opens `DA_URL` in a new tab — it does not go through the backend checkout flow.
