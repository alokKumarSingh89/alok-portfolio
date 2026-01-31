# Copilot / AI Agent Instructions for this repo

Purpose: Help AI coding assistants quickly become productive in this Next.js + TypeScript portfolio.

- Project type: Next.js (App Router) application located under `src/app` using TypeScript and Tailwind CSS.
- Runtime: Next 16 + React 19 (see `package.json`).

Quick commands

- Dev server: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start (prod): `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `eslint`).

Big picture / architecture

- App Router: all page routes and layouts live in `src/app`. Use `layout.tsx` for root layout and `page.tsx` for pages.
- Styling: Tailwind + `src/app/globals.css`. Global font variables injected in `layout.tsx` via `next/font/google`.
- Static assets: `public/` (e.g., `/next.svg`, `/vercel.svg`).
- TypeScript: strict mode is enabled in `tsconfig.json`. Path alias `@/*` -> `src/*` is configured.

Project-specific patterns to follow

- Use the App Router conventions: export a default `Page` component from `page.tsx` and shared wrappers in `layout.tsx`.
- Fonts: prefer `next/font` usage as shown in `src/app/layout.tsx` to expose CSS variables (e.g., `--font-geist-sans`).
- CSS: keep global utilities in `globals.css`; prefer Tailwind utility classes inside components as in `src/app/page.tsx`.
- No test runner or test scripts detected—avoid adding test infra without discussion.

Integration points and external deps

- `next` (framework) and `react` are primary runtime deps. PostCSS/Tailwind in devDependencies.
- No backend or API folder detected — this is a frontend-only static/SSR portfolio.

Files to inspect for common edits

- Root config and scripts: `package.json`.
- App entry & layout: `src/app/layout.tsx` (fonts + globals).
- Main page example: `src/app/page.tsx`.
- Next config: `next.config.ts` (currently minimal stub).
- Type settings: `tsconfig.json` (strict, path aliases).

Examples (concrete, copyable)

- Add a new page route: create `src/app/your-route/page.tsx` and export default a React component.
- Use path alias: `import Button from '@/components/Button'` resolves to `src/components/Button`.
- Run local check before PR: `npm run build && npm run lint`.

If merging with existing `.github/copilot-instructions.md`

- Preserve any repo-specific rules and examples. Add or update the sections above where they are missing.

Notes / limitations discovered by reading files

- No test scripts or CI config detected; CI instructions should not be assumed.
- Linting is available but no specific `eslint` config file was found in the repo root—use `eslint` default or inspect `eslint.config.mjs`.

If unclear or incomplete

- Tell me which area to expand (routing, styling, build/CI, or local dev edge-cases) and I will update this file.

— end
