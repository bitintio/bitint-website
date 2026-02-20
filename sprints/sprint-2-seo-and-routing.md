# Sprint 2 — SEO, Meta Tags & Production Polish

## Goal
Prepare the site for public-facing production: proper SEO meta tags, Open Graph data, sitemap, robots.txt, and clean up placeholder content.

---

## Prerequisites
- Sprint 1 completed (project builds successfully with `npm run build`)

---

## Tasks

### 2.1 — Add Per-Page Meta Tags with react-helmet-async
The project already uses `react-helmet-async`. Add unique `<Helmet>` blocks to every page component with proper `<title>` and `<meta name="description">`.

Example for `Home.tsx`:
```tsx
<Helmet>
  <title>Bitint | Blockchain Intelligence Platform</title>
  <meta name="description" content="Trace funds, detect high-risk entities, and produce defensible evidence packages. Blockchain intelligence for investigations, compliance, and risk management." />
  <meta property="og:title" content="Bitint | Blockchain Intelligence Platform" />
  <meta property="og:description" content="Trace funds, detect high-risk entities, and produce defensible evidence packages." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bitint.io" />
</Helmet>
```

Do this for ALL page components:
- `Home.tsx` — "Bitint | Blockchain Intelligence Platform"
- `Platform.tsx` (overview) — "Platform Overview | Bitint"
- `Platform.tsx` (coverage) — "Coverage & Data | Bitint Platform"
- `Platform.tsx` (attribution) — "Attribution & Confidence | Bitint Platform"
- `Platform.tsx` (auditability) — "Auditability & Evidence | Bitint Platform"
- `Platform.tsx` (integrations) — "API & Integrations | Bitint Platform"
- `Solutions.tsx` (overview) — "Solutions | Bitint"
- `Solutions.tsx` (detail) — "{Solution Title} | Bitint Solutions"
- `Industries.tsx` (overview) — "Industries | Bitint"
- `Industries.tsx` (detail) — "{Industry Title} | Bitint"
- `Resources.tsx` (index) — "Resources | Bitint"
- `Resources.tsx` (blog detail) — "{Post Title} | Bitint Blog"
- `Resources.tsx` (glossary) — "Blockchain Glossary | Bitint"
- `Company.tsx` (about) — "About Us | Bitint"
- `Company.tsx` (careers) — "Careers | Bitint"
- `Company.tsx` (security) — "Security & Trust | Bitint"
- `Company.tsx` (partners) — "Partners | Bitint"
- `RequestDemo.tsx` — "Request a Demo | Bitint"
- `GenericPages.tsx` (privacy) — "Privacy Policy | Bitint"
- `GenericPages.tsx` (terms) — "Terms & Conditions | Bitint"

### 2.2 — Create Favicon & Branding Assets
Create a proper favicon for Bitint:

1. Create a simple SVG favicon matching the brand (yellow "B" on dark background):
   ```
   public/favicon.svg
   ```
2. Update `index.html`:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   ```
3. Optionally add `favicon.ico` and `apple-touch-icon.png` for broader compatibility.

### 2.3 — Create `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://bitint.io/sitemap.xml
```

### 2.4 — Create `public/sitemap.xml`
Generate a static sitemap with all public routes:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bitint.io/</loc><priority>1.0</priority></url>
  <url><loc>https://bitint.io/platform</loc><priority>0.9</priority></url>
  <url><loc>https://bitint.io/platform/coverage</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/platform/attribution</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/platform/auditability</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/platform/integrations</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions</loc><priority>0.9</priority></url>
  <url><loc>https://bitint.io/solutions/investigations</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions/monitoring</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions/screening</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions/entity-intel</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions/case-management</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/solutions/alerts</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/industries</loc><priority>0.9</priority></url>
  <url><loc>https://bitint.io/industries/law-enforcement</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/industries/financial-institutions</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/industries/centralized-exchanges</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/industries/tax-agencies</loc><priority>0.7</priority></url>
  <url><loc>https://bitint.io/resources</loc><priority>0.8</priority></url>
  <url><loc>https://bitint.io/resources/glossary</loc><priority>0.6</priority></url>
  <url><loc>https://bitint.io/company/about</loc><priority>0.8</priority></url>
  <url><loc>https://bitint.io/company/careers</loc><priority>0.6</priority></url>
  <url><loc>https://bitint.io/company/security</loc><priority>0.6</priority></url>
  <url><loc>https://bitint.io/company/partners</loc><priority>0.6</priority></url>
  <url><loc>https://bitint.io/request-demo</loc><priority>0.9</priority></url>
  <url><loc>https://bitint.io/legal/privacy</loc><priority>0.3</priority></url>
  <url><loc>https://bitint.io/legal/terms</loc><priority>0.3</priority></url>
</urlset>
```

### 2.5 — Fix Placeholder Content
Replace placeholder content in these locations:

1. **`Solutions.tsx` — `SolutionDetail` component**: Replace "Capability Feature 1-5" with real feature descriptions per solution type. Use the solution's desc and context from the overview data to generate meaningful content.

2. **`Industries.tsx` — `IndustryDetail` component**: Replace "Outcome One/Two/Three/Four" with industry-specific outcomes.

3. **`Resources.tsx` — Blog content**: Replace "Full content placeholder..." in `data/content.ts` with actual article content (at least 3-4 paragraphs each).

4. **`GenericPages.tsx` — Privacy & Terms**: Expand placeholder legal text with proper sections.

### 2.6 — Fix Dead Links
1. **Footer social links**: Replace `href="#"` with real Bitint social URLs or remove social icons until real links are available.
2. **Footer email**: Change `security@bitint.example.com` → `security@bitint.io`
3. **Navbar Login link**: Change `href="#"` → link to actual login URL or remove.

### 2.7 — Add `public/` Directory
Vite serves files from the `public/` directory as static assets. Create:
```
public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## Verification Checklist
- [ ] Every page has a unique `<title>` via Helmet
- [ ] Every page has `<meta name="description">` via Helmet
- [ ] `robots.txt` accessible at `/robots.txt` after build
- [ ] `sitemap.xml` accessible at `/sitemap.xml` after build
- [ ] Favicon shows in browser tab
- [ ] No "lorem ipsum" or "[Chart Visual]" placeholder text in production pages
- [ ] No dead `#` links in footer or navbar
- [ ] `npm run build` still succeeds after changes
- [ ] View source: page title changes per route

---

## Agent Instructions

1. Start with task 2.1 (Helmet tags) — this is the most impactful for SEO
2. For placeholder content (2.5), write professional, contextual content matching the Bitint brand voice (authoritative, technical, confident)
3. After all changes, run `npm run build` to verify nothing breaks
4. Use `npm run preview` and browse key routes to verify

**Next**: Proceed to Sprint 3.
