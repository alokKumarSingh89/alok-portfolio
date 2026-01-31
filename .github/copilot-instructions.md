# Copilot / AI Agent Instructions for this repo

**Purpose:** Help AI agents quickly become productive in this Next.js portfolio for a senior full-stack architect (11+ years in Micro-Frontends, NestJS, AWS).

## Quick Start

- **Dev server:** `npm run dev` (runs on http://localhost:3000)
- **Build & deploy:** `npm run build && npm run start`
- **Linting:** `npm run lint` (ESLint flat config)
- **No tests:** No testing framework configured; do not add tests unless explicitly requested.

## Architecture Overview

**Actual Structure:**

- `/src/app` — App Router pages & layouts; root layout uses `Inter` and `JetBrains_Mono` fonts
- `/src/features/portfolio` — Portfolio-specific sections (Hero, ExperienceSection); domain-driven modules
- `/src/components/shared` — Shared components (Navbar); use `"use client"` for interactivity
- `/public` — Static assets
- `/src/lib/prisma.ts` — Prisma client for local development only; no backend/API routes are exposed. Prisma is used for admin stubs and local data mocking, not production data.

**Tech Stack:**

- **Next.js 16** + **React 19** (App Router); server components by default
- **TypeScript** (strict mode enabled; path alias `@/*` → `src/*`)
- **Tailwind 4** with `@tailwindcss/postcss` (no separate config file; theme defined inline in `globals.css`)
- **Framer Motion** (used for motion animations in Hero and cards)
- **Lucide React** (icons: ChevronRight, Terminal, Briefcase, Zap)
- **Custom font variables:** `--font-inter`, `--font-mono` (loaded via `next/font/google`)

## Key Patterns

**Color System:**
Brand colors defined in `globals.css` as CSS custom properties:

- `--color-brand-dark: #020617` (page background)
- `--color-brand-card: #0f172a` (card backgrounds)
- `--color-brand-accent: #22d3ee` (cyan accents for highlights/links)

Use these in Tailwind classes: `bg-brand-dark`, `text-brand-accent`, etc.

**Component Architecture:**

- **Portfolio Features** (`/src/features/portfolio`) are domain modules with Framer Motion animations and data (see ExperienceSection's `workHistory` array)
- **Shared Components** (`/src/components/shared`) are layout pieces like Navbar; mark with `"use client"` if they need interactivity (Link navigation, hover states)
- **Page assembly:** `page.tsx` imports and composes Hero + ExperienceSection + Navbar (see [src/app/page.tsx](src/app/page.tsx))
- **Admin route:** Reserved at `/admin` (see Navbar link); stub page expected at [src/app/admin/page.tsx](src/app/admin/page.tsx). Admin UI uses Prisma for local-only data mocking.

**Animation Patterns (Framer Motion):**
See Hero.tsx for examples:

- `initial={{ opacity: 0, y: -20 }}` / `animate={{ opacity: 1, y: 0 }}`
- Staggered delays via `transition={{ delay: 0.1 }}`
- Lucide icons with `transition-transform` for button hover effects

**Styling Conventions:**

- Inline Tailwind classes on elements (no CSS modules or styled-components)
- Use `group` and `group-hover:` for parent-child hover interactions (see Navbar, ExperienceSection)
- Backdrop blur: `backdrop-blur-md` (see Navbar fixed header)
- Grid layouts: `md:grid-cols-[1fr_2fr]` for responsive designs (ExperienceSection cards)
- Accent text: wrap key phrases in `<span className="text-slate-200">` within larger text blocks

**Typography:**

- Headings: font-bold, font-mono for logo/accents
- Monospace brand text: `font-mono` (e.g., Navbar logo "ALOK.SYSTEMS", experience period badges)
- Links: styled with `hover:text-brand-accent transition-colors`

## Important Notes

- **Frontend-only:** No API routes, backend, or database. Static/SSR only.
- **No tests:** No testing framework configured; avoid adding without discussion.
- **Layout strategy:** Navbar is fixed (`position: fixed`) and overlays content; main sections include `py-24` and `max-w-6xl mx-auto px-6` for consistent vertical/horizontal spacing.
- **Admin route:** Reserved at `/admin` (see Navbar link); stub page expected at `src/app/admin/page.tsx`
- **Prisma usage:** Only for local development and admin stubs. See [src/lib/prisma.ts](src/lib/prisma.ts). Do not add API routes or backend logic.
- **TypeScript strict mode:** All code must be strictly typed. Use path alias `@/*` for imports from `src/*`.
- **Tailwind/PostCSS config:** No separate config files; all theme customizations are inline in [src/app/globals.css](src/app/globals.css).

## Before Adding Features

1. **New sections:** Add to `/src/features/portfolio` if domain-specific; export default component
2. **New pages:** Create `src/app/[route]/page.tsx`; follow Hero + ExperienceSection pattern (Framer Motion animations, semantic sections)
3. **Shared UI:** Place in `/src/components/shared`; mark `"use client"` if interactive
4. **Data:** Keep mock data (workHistory, projects, etc.) in component files; use typed arrays
5. **Validate:** Run `npm run lint` and `npm run build` before committing

## Example Workflow

- To add a new experience card:
  1. Update the `workHistory` array in [src/features/portfolio/Experience.tsx](src/features/portfolio/Experience.tsx).
  2. Use Framer Motion for entry animation.
  3. Style with Tailwind and brand color variables.
  4. Validate with `npm run lint` and `npm run build`.

## Integration Points

- **External dependencies:**
  - Framer Motion for animation ([src/features/portfolio/Hero.tsx](src/features/portfolio/Hero.tsx))
  - Lucide React for icons ([src/components/shared/Navbar.tsx](src/components/shared/Navbar.tsx))
  - Prisma for local admin stubs ([src/lib/prisma.ts](src/lib/prisma.ts))

## What NOT to do

- Do not add API routes, backend logic, or database migrations for production.
- Do not add tests or test frameworks unless explicitly requested.
- Do not create separate Tailwind/PostCSS config files.
