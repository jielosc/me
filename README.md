# Ryan Liu — Personal Site

A minimal personal homepage built with plain HTML, CSS, and JavaScript. No framework, no build step.

## Structure

- `index.html` — root entry with English fallback and language redirect
- `en/index.html` — English homepage
- `zh/index.html` — Simplified Chinese homepage
- `styles.css` — layout and styling
- `script.js` — footer year and language switching
- `language.js` — root-only language detection (saved choice, then browser language)

## License

MIT

## Editing

Edit both language pages when changing content. Keep the root English fallback in sync with `en/index.html`, with the additional `language.js` script in its head. Shared styles and scripts use root-relative paths. Each language page has its own canonical URL and alternate-language links.

Preview with `python3 -m http.server 8765` and visit `/en/` or `/zh/`.
