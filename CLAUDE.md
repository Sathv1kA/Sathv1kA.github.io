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

- **Next.js 14** (App Router) with `output: "export"` for GitHub Pages deployment
- **Tailwind CSS v3** — all styling via utilities, no CSS modules
- **TypeScript**
- **Syne** (headings via `--font-syne`) + **DM Sans** (body via `--font-dm-sans`), loaded via `next/font/google`

## Architecture

Single-page site. `src/app/page.tsx` assembles six section components in order: Hero → About → Experience → Projects → Skills → Contact.

**Animation system:**
- Hero uses Tailwind's `animate-fade-up` class (CSS keyframe, no JS — plays on load)
- All other sections wrap content in `<AnimateIn>` (a `"use client"` component in `src/components/AnimateIn.tsx`) which uses `useInView` from `src/hooks/useInView.ts` to trigger a fade-up via IntersectionObserver on scroll

**Content is stored as plain arrays at the top of each component:**
- `src/components/Projects.tsx` → `projects[]`
- `src/components/Experience.tsx` → `experiences[]`
- `src/components/Skills.tsx` → `skillGroups[]`
- `src/components/Contact.tsx` → `links[]`

**Design tokens:**
- Background: `#0a0f1e` (deep navy)
- Card surface: `#0d1526`
- Accent: `blue-500` (`#3b82f6`) — Tailwind's built-in blue-500 matches exactly
- Headings: `font-heading` class (Syne)
- Body: `font-body` class (DM Sans, set on `<body>`)

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` builds on push to `main` and deploys `./out/` to GitHub Pages. Requires Pages source set to "GitHub Actions" in repo settings.

Target URL: `https://sathv1ka.github.io`
