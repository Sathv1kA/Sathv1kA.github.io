# sathvik-allipuram.dev

Personal portfolio website for Sathvik Allipuram. Dark-mode, finance-meets-software aesthetic with scroll-triggered animations.

**Live:** [sathv1ka.github.io](https://sathv1ka.github.io)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Fonts: [Syne](https://fonts.google.com/specimen/Syne) (headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produces ./out/ for static deployment
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # fonts, metadata
│   ├── page.tsx         # assembles all sections
│   └── globals.css
├── components/
│   ├── Hero.tsx         # full-screen intro
│   ├── About.tsx        # bio + stat pills
│   ├── Experience.tsx   # Nationwide, IBM, patent
│   ├── Projects.tsx     # CLARA, LLMeter, NYC Housing
│   ├── Skills.tsx       # tech stack by category
│   ├── Contact.tsx      # email + socials
│   └── AnimateIn.tsx    # scroll-triggered fade-up wrapper
└── hooks/
    └── useInView.ts     # IntersectionObserver hook
```

## Updating Content

All content lives in the component files — no CMS needed.

| What | File |
|---|---|
| Projects | `src/components/Projects.tsx` — edit the `projects` array |
| Experience | `src/components/Experience.tsx` — edit the `experiences` array |
| Skills | `src/components/Skills.tsx` — edit the `skillGroups` array |
| Contact | `src/components/Contact.tsx` — edit the `links` array |

## Deployment (GitHub Pages)

Automated via GitHub Actions on every push to `main`.

**One-time setup:**
1. Push this repo to `Sathv1kA/Sathv1kA.github.io`
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Push to `main` — the workflow handles the rest

**Manual deploy:**
```bash
npm run build
# upload ./out/ to your server or gh-pages branch
```

Drop `resume.pdf` into `public/` before deploying for the resume download button to work.
