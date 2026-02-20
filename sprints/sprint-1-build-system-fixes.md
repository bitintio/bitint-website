# Sprint 1 — Build System & Code Fixes

## Goal
Make the project build successfully with `npm run build` and produce a deployable static bundle. Fix all P0 blockers identified in Sprint 0.

---

## Prerequisites
- Sprint 0 completed (audit document available)
- Node.js 18+ installed
- npm available

---

## Tasks

### 1.1 — Install Dependencies
```bash
cd "c:\Users\User\Downloads\Georgia\Projects\Bitint\Bitint Website (AI-Google-Studio Originally)"
npm install
```
Verify `node_modules/` is created and no critical errors.

### 1.2 — Create PostCSS Config
Create `postcss.config.js` in the project root:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 1.3 — Clean `index.html`
Remove/modify the following from `index.html`:

1. **Remove the entire `<script type="importmap">` block** (lines 12-27). Vite handles module resolution via `node_modules`.

2. **Remove the Tailwind CDN script** (line 33): `<script src="https://cdn.tailwindcss.com"></script>`. Tailwind is processed at build time via PostCSS.

3. **Keep** the Google Fonts `<link>` tags — these are fine for production.

After changes, `index.html` should look like:
```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <title>Bitint | Blockchain Intelligence</title>
    <link rel="stylesheet" href="/index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
```

### 1.4 — Switch Router from HashRouter to BrowserRouter
In `App.tsx`, change:
```diff
-import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
+import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
```

### 1.5 — Clean Up Vite Config
In `vite.config.ts`:
- Remove `process.env.API_KEY` and `process.env.GEMINI_API_KEY` definitions (these are unused)
- Ensure `base: '/'` is explicitly set for correct asset paths

Updated `vite.config.ts`:
```ts
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
```

### 1.6 — Remove Unused Files
- Delete `metadata.json` (AI Studio metadata, not needed)
- Update `.env.local` to remove `GEMINI_API_KEY` line or leave file empty

### 1.7 — Test Build
```bash
npm run build
```
**Expected**: The `dist/` folder is created with:
- `index.html`
- `assets/` folder with JS and CSS bundles

```bash
npm run preview
```
**Expected**: The site loads correctly at `http://localhost:4173`.

### 1.8 — Test Dev Server
```bash
npm run dev
```
**Expected**: Site loads at `http://localhost:3000` with no console errors.

---

## Verification Checklist
- [ ] `npm install` completes without errors
- [ ] `postcss.config.js` exists
- [ ] `index.html` has no import map or CDN Tailwind script
- [ ] `npm run build` succeeds
- [ ] `dist/` folder contains `index.html` and `assets/`
- [ ] `npm run preview` serves the site
- [ ] All pages render correctly (spot-check Home, Platform, Solutions)
- [ ] Dark/light theme toggle works
- [ ] No console errors in browser

---

## Agent Instructions

1. Execute tasks 1.1 through 1.7 in order
2. After each file change, verify the change is syntactically correct
3. Run `npm run build` as the final verification
4. If build fails, read error messages and fix accordingly
5. Do NOT fix placeholder content — that's Sprint 2-3 work

**Next**: Proceed to Sprint 2.
