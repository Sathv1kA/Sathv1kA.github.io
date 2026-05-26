# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:3000
npm run build      # static export → ./out/
npm run lint       # eslint
```

## Stack

- **Next.js 16** (App Router) with `output: "export"` for GitHub Pages deployment
- **Tailwind CSS v3** — all styling via utilities, no CSS modules
- **TypeScript**
- **Syne** (headings via `--font-syne`) + **DM Sans** (body via `--font-dm-sans`), loaded via `next/font/google`

## Architecture

Multi-page site (App Router). Routes:
- `/` (`src/app/page.tsx`) → `Hero` + featured-work and about-teaser sections
- `/about` (`src/app/about/page.tsx`) → `About` + `Experience` + `Skills`
- `/projects` (`src/app/projects/page.tsx`) → `Projects`
- `/contact` (`src/app/contact/page.tsx`) → `Contact`

`Navbar` (fixed, `src/components/Navbar.tsx`) links the four routes; `layout.tsx` wraps every page with the navbar and footer.

**Animation system:**
- Hero plays its intro on load via Tailwind's `animate-fade-up` class (`fadeUp` keyframe)
- All other sections wrap content in `<AnimateIn>` (a `"use client"` component in `src/components/AnimateIn.tsx`) which uses `useInView` from `src/hooks/useInView.ts` to trigger the `fadeUp` animation via IntersectionObserver on scroll
- The `fadeUp` keyframe is defined in both `globals.css` (used by `AnimateIn`'s inline style) and `tailwind.config.ts` (used by Hero's utility class)

**Content is stored as plain arrays at the top of each component:**
- `src/components/Projects.tsx` → `projects[]`
- `src/components/Experience.tsx` → `experiences[]`
- `src/components/Skills.tsx` → `skillGroups[]`
- `src/components/Contact.tsx` → `links[]`

**Design tokens (light theme):**
- Page background: `#f8fafc` (slate-50, set in `globals.css`)
- Card surface: white (`bg-white`) with `border-slate-200` and `shadow-sm`
- Hero background: sky-blue gradient (`#0ea5e9` → `#bae6fd`)
- Accent: `blue-500` (`#3b82f6`)
- Headings: `font-heading` class (Syne)
- Body: `font-body` class (DM Sans, set on `<body>`)

**Static assets:** served from `public/` (e.g. `/resume.pdf` for the Hero resume button).

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` builds on push to `main` and deploys `./out/` to GitHub Pages. Requires Pages source set to "GitHub Actions" in repo settings.

Target URL: `https://sathv1ka.github.io`
