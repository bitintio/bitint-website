# Sprint 0 — Project Audit & Technical Summary

## Goal
Understand the current project state, document all technical debt and issues, and produce a clear baseline for all subsequent sprints.

---

## Context

**Project**: Bitint — Blockchain Intelligence Platform marketing website  
**Domain target**: `bitint.io`  
**Stack**: React 18 + TypeScript + Vite 5 + Tailwind CSS 3  
**Router**: `react-router-dom` v6 with `HashRouter`  
**Hosting**: Currently none (local dev only)  
**Origin**: Built with Google AI Studio (exported project)

---

## Current File Structure

```
/
├── index.html            # Entry point (contains CDN import maps + Tailwind CDN)
├── index.tsx             # React root with HelmetProvider
├── index.css             # Tailwind directives + CSS variables (dark/light)
├── App.tsx               # Main router (HashRouter), Navbar + Footer layout
├── vite.config.ts        # Vite dev server config, Gemini API key injection
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind theme extension (brand colors, fonts, animations)
├── package.json          # Dependencies (no lock file present!)
├── types.ts              # Shared TypeScript interfaces
├── .env.local            # GEMINI_API_KEY placeholder
├── metadata.json         # AI Studio metadata
├── components/
│   ├── ThemeContext.tsx   # Dark/light theme provider
│   ├── DashboardMock.tsx  # SVG graph + alerts dashboard mock
│   ├── layout/
│   │   ├── Navbar.tsx    # Responsive navbar with theme toggle
│   │   └── Footer.tsx    # Footer with sitemap links
│   └── ui/
│       └── Button.tsx    # Reusable button component (Link/anchor/button)
├── pages/
│   ├── Home.tsx          # Hero, trust strip, pillars, workflow, CTA
│   ├── Platform.tsx      # Overview + 4 sub-pages (Coverage, Attribution, Auditability, Integrations)
│   ├── Solutions.tsx     # Overview + 6 solution detail pages
│   ├── Industries.tsx    # Overview + 4 industry detail pages
│   ├── Company.tsx       # About, Careers, Security, Partners, Contact (redirect to RequestDemo)
│   ├── Resources.tsx     # Blog list, blog detail, glossary, case studies
│   ├── RequestDemo.tsx   # Demo request form (localStorage, simulated submit)
│   └── GenericPages.tsx  # Thanks, NotFound (404), Privacy, Terms
└── data/
    └── content.ts        # Blog posts, case studies, glossary terms, FAQ data
```

## Pages/Routes Inventory (30+ routes)

| Section | Routes |
|---------|--------|
| Home | `/` |
| Platform | `/platform`, `/platform/coverage`, `/platform/attribution`, `/platform/auditability`, `/platform/integrations` |
| Solutions | `/solutions`, `/solutions/investigations`, `/solutions/monitoring`, `/solutions/screening`, `/solutions/entity-intel`, `/solutions/case-management`, `/solutions/alerts` |
| Industries | `/industries`, `/industries/law-enforcement`, `/industries/financial-institutions`, `/industries/centralized-exchanges`, `/industries/tax-agencies` |
| Resources | `/resources`, `/resources/blog`, `/resources/blog/:slug`, `/resources/glossary`, `/resources/case-studies` |
| Company | `/company/about`, `/company/careers`, `/company/security`, `/company/partners`, `/company/contact` |
| Legal | `/legal/privacy`, `/legal/terms` |
| Conversion | `/request-demo`, `/thanks` |
| Catch-all | `*` (404) |

---

## Critical Issues Found

### 🔴 P0 — Must Fix Before Build

1. **CDN import maps in `index.html`**: Lines 12-27 contain `<script type="importmap">` loading React, react-router-dom, lucide-react etc. from `esm.sh`. This conflicts with the Vite bundle system. These must be removed for `npm run build` to produce a correct production bundle.

2. **Tailwind CDN script in `index.html`**: Line 33 loads `https://cdn.tailwindcss.com` which is development-only and will show console warnings in production. Tailwind should be processed at build time by PostCSS.

3. **Missing `postcss.config.js`**: Tailwind 3 requires a PostCSS config file. Without it, `@tailwind` directives in `index.css` won't be processed at build time.

4. **No `package-lock.json` or `node_modules`**: The project has never been `npm install`ed locally. Need to install dependencies first.

5. **`HashRouter` instead of `BrowserRouter`**: All URLs will be `/#/platform` instead of `/platform`. This is terrible for SEO and looks unprofessional. Must switch to `BrowserRouter`.

### 🟡 P1 — Should Fix Before Deployment

6. **Form has no real backend**: `RequestDemo.tsx` uses `localStorage` and `setTimeout` to simulate submission. Need a real contact form backend (email service, webhook, or API).

7. **Placeholder content**: Several pages have "Lorem ipsum" and generic content (e.g., Solution detail pages have "Capability Feature 1-5" with lorem ipsum text).

8. **Gemini API key in vite config**: `vite.config.ts` defines `process.env.GEMINI_API_KEY` — but the key is `PLACEHOLDER_API_KEY` and no feature appears to use it. Should be cleaned up.

9. **Footer links to `security@bitint.example.com`**: Should be real domain email.

10. **`metadata.json`**: AI Studio metadata file — no longer needed.

### 🟢 P2 — Nice to Have

11. **No favicon / Open Graph images**: Using default Vite favicon. Need Bitint branding assets.
12. **No sitemap.xml or robots.txt**: Required for SEO.
13. **No analytics integration**: GA4/Plausible should be added.
14. **Social media links are `href="#"`**: Footer Twitter, LinkedIn, GitHub links are dead.
15. **No image assets**: All visuals are CSS/SVG-based. Consider adding real images for better marketing impact.

---

## Deliverables for This Sprint

- [x] Full file-by-file code review (this document)
- [x] Technical debt inventory with priority levels
- [x] Route inventory
- [x] List of blocking issues for production build
- [ ] Verify `npm install && npm run build` works after Sprint 1 fixes

---

## Agent Instructions

This sprint is **read-only / documentation**. No code changes should be made. The output of this sprint is this document itself, which informs all subsequent sprints.

**Next**: Proceed to Sprint 1.
