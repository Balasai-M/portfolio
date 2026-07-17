# Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui (Radix), and Framer Motion. AI-native design system (violet/indigo/pink, Space Grotesk + DM Sans) generated with the `ui-ux-pro-max` skill — see `design-system/ai-portfolio/MASTER.md`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you ship this

1. **Edit `lib/site-config.ts`** — name, role, tagline, email, GitHub/LinkedIn URLs, and `url` (your real domain — used in metadata, sitemap, and JSON-LD).
2. **Edit `lib/data/projects.ts`, `demos.ts`, `experience.ts`, `tech-stack.ts`** — replace placeholder projects (including the quiz generator) with your real ones and real links.
3. **Add `public/resume.pdf`** — the Resume page links to `/resume.pdf`.
4. **Wire up `/api/contact`** (`app/api/contact/route.ts`) to an actual email/CRM provider (e.g. Resend, Postmark) — it currently just validates and logs.
5. **Point the quiz generator demo embed** (`lib/data/demos.ts`, `mode: "iframe"`) at your real deployed URL. If the target blocks framing (`X-Frame-Options`/CSP `frame-ancestors`), switch its `mode` to `"link"` or `"video"`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Stack

Next.js 16 (App Router, Server Components by default) · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix primitives) · Framer Motion · next-themes (dark mode).
