# SMM Panel — Landing Page

A fully responsive, animated recreation of the "SMM Panel" Figma landing page, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

> **Note on design fidelity:** This was built from a compressed reference screenshot (367×762px) rather than direct, authenticated access to the Figma file, since the file wasn't shared with the connected Figma account. Layout structure, section order, copy tone, spacing rhythm, and the orange→purple gradient color system were matched as closely as the source image allowed. If you can share Figma **Editor/Viewer** access (or export exact hex values, spacing tokens, and image assets), I can tighten this to pixel-perfect. Person + rocket photography from the design was recreated as an original SVG/CSS illustration, since the original image assets weren't accessible.

## Sections included

1. **Header** — sticky nav, mobile menu, gradient "Login" button
2. **Hero** — heading, platform/username form, floating stat chips, animated illustration
3. **Promotion Services** — 5 pricing cards (ratings, price, CTA), horizontal scroll on mobile
4. **Who We Are** — feature checklist + illustration
5. **Powerful SMM Services** — interactive platform picker (11 platforms) with a live-updating detail card
6. **Easy Steps** — 4-step process timeline with connecting line
7. **Footer** — dark theme, link columns, social icons

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom design tokens (colors, gradients, shadows) in `tailwind.config.ts`
- **Framer Motion** — scroll-reveal, hover, and floating micro-animations
- **lucide-react** + **react-icons** — icon sets

## Getting started

### Prerequisites
- Node.js 18.17+ (Node 20 LTS recommended)
- npm (or yarn/pnpm)

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**.

Alternatively, via CLI:

```bash
npm i -g vercel
vercel
```

## Responsiveness

Breakpoints follow Tailwind defaults and were tested at:
- Mobile: 375px–428px
- Tablet: 768px–1024px
- Laptop: 1280px
- Desktop: 1440px+

The pricing card row and platform-picker sections collapse to a horizontally-scrollable / wrapped layout on small screens; the hero and "Who We Are" sections reverse column order for legibility on mobile.

## Customization notes

- **Fonts:** Currently uses a system font stack (`app/globals.css`) to avoid an external network dependency at build time. To use the Google Font "Plus Jakarta Sans" from the original design, swap in `next/font/google` in `app/layout.tsx` — it's a two-line change (see git history / comments) and works out of the box on Vercel.
- **Colors & gradients:** Centralized in `tailwind.config.ts` under `theme.extend.colors` and `backgroundImage` — update these to match exact Figma hex values once available.
- **Illustrations:** `components/GrowthIllustration.tsx` is an original SVG placeholder for the "person + rocket" artwork in the design. Swap in real exported PNG/SVG assets from Figma (place them in `/public`) once accessible.

## Project structure

```
app/
  layout.tsx        # Root layout & metadata
  page.tsx           # Composes all sections
  globals.css         # Tailwind + design tokens
components/
  Header.tsx
  Hero.tsx
  PromotionServices.tsx
  WhoWeAre.tsx
  PowerfulServices.tsx
  EasySteps.tsx
  Footer.tsx
  GrowthIllustration.tsx
```
