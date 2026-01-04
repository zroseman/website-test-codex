# Draftboard landing page (editable code)

This repository contains a fully editable static recreation of the Draftboard marketing site. It is built with plain HTML, CSS, and a small amount of JavaScript—no build steps required.

## Structure
- `index.html` — page markup and content sections.
- `styles.css` — layout, gradients, spacing tokens, and responsive rules.
- `script.js` — mobile navigation toggle, FAQ accordions, and a demo form handler.
- `package.json` — optional helper script to serve the site locally for previews.

## Edit & preview
1. Open `index.html` in your editor to adjust copy or section order.
2. Update colors, spacing, and typography in `styles.css` (CSS variables at the top control the theme).
3. For simple interactivity (like the FAQ), edit `script.js`.
4. Preview locally with any static server, e.g.:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.
5. If your editor offers a "Preview" button (e.g., VS Code), start a local server first so the preview has something to load. You can use the helper script:
   ```bash
   npm run preview
   ```
   This serves the project on port 4173; point the preview at that port to avoid "Not found" errors.

## Notes
- All styles are self contained—there are no external assets besides Google Fonts.
- The design uses responsive grids so it remains legible on mobile screens.
