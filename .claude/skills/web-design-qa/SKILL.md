---
name: web-design-qa
description: Design and quality check for any UI change on the CHICAGO AIRCARE PRO site before it ships: desktop/mobile screenshots, Lighthouse, accessibility (contrast, tap targets, focus, labels), no horizontal scroll, broken links/images, schema and tracking attributes. Use after every redesign, new component, page template or photo change. Owner: Chloe Vance (UI/UX & CRO), approval by Sophia Reynolds.
---

# Web design QA (Chloe Vance)

## Design system (don't drift)
- Direction A "Lakefront Trust": tokens in `src/styles/global.css` (`--brand-navy #0e2648`, `--brand-coral`, `--cta #c2410c` with white text, red only for emergencies). Fonts: self-hosted Plus Jakarta Sans (headings) + Inter (body). Icons: `src/components/Icon.astro` (Lucide). No emoji icons, no stock photos posing as the team.
- Reuse components: `BrandMark`, `SiteHeader`, `CallSmsCta`, `BookingPanel`, `TrustBlock`, `ReviewsBlock`, `RecentWork`, `FaqSection`, `Breadcrumbs`.
- Photos: `<Image quality={50}>` from `astro:assets`, accurate `widths`/`sizes`, `loading="lazy"` below the fold, eager + `fetchpriority="high"` only for the hero.

## Run the checks
1. `npm run check` and `npm run build`: 0 errors.
2. `node scripts/site-metrics.mjs`: orphans 0, one H1 per page, JSON-LD errors 0, tel/sms/booking on every page.
3. Preview: `npx astro preview --host 0.0.0.0 --port 4321`.
4. **Screenshots** with Playwright (`require('playwright')`, `chromium.launch()`): desktop 1366×900 and 1440; mobile 390×844 and 360×800. Look at them. Check: header on one row (no overlap 1150–1920px), hamburger below 1200px, sticky mobile bar not covering CTAs, no horizontal scroll (`document.documentElement.scrollWidth === innerWidth` at 360px).
5. **Lighthouse** (mobile) on every changed page type: target Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100. If Lighthouse isn't installed, `npm i --prefix <scratchpad>/lh lighthouse` and run with `CHROME_PATH=/opt/pw-browsers/chromium-*/chrome-linux64/chrome --chrome-flags="--headless --no-sandbox"`.
6. **Accessibility**: text contrast ≥ 4.5:1 (3:1 for large), tap targets ≥ 44px, visible focus, labelled fields, `alt` on content images (decorative = `alt=""`), no duplicate screen-reader text (captions that repeat alt get `aria-hidden`).
7. **Links and tracking**: no broken internal links or images in `dist/`; every `tel:`/`sms:`/booking/review link has `data-track` + `data-placement`.

## Output
Before/after screenshots (desktop + mobile) attached or described, Lighthouse scores per page, list of issues fixed and any left open. Report under Chloe Vance; Sophia Reynolds approves before the PR.

## Unslop (owner rule, 2026-11-21)
Before shipping, apply `marketing/unslop-style.md`: no em dashes or filler words in visible copy, facts instead of trust adjectives, specific Chicago detail, varied rhythm; in design no label over every heading, no icon box on every item, varied section layouts, real photos first.
