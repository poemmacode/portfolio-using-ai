# Emma Estrada — Portfolio & Resume

Next.js 16 personal portfolio site with full i18n (EN/ES) and ATS-optimized PDF resume download.

## Tech Stack

* Next.js 16 (stable APIs only)
* React 19
* TypeScript (strict mode)
* Tailwind CSS v4
* Node.js >= 20.19.0
* @react-pdf/renderer (PDF resume generation)

## Project Structure

* `src/app/` — App Router (single page at `/`)
* `src/components/` — Shared UI components
* `src/lib/` — Utilities and business logic
* `src/lib/i18n/` — Internationalization (EN/ES translations + context provider)
* `src/actions/` — Server Actions (currently unused)
* `public/` — Static assets

## Development Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## i18n System

* Translations in `src/lib/i18n/en.ts` and `src/lib/i18n/es.ts`
* Context provider in `src/lib/i18n/index.tsx` (wraps app in `layout.tsx`)
* All components use `useI18n()` hook to access `t` (translations) and `lang` (current language)
* Language toggle in Navbar switches entire site + PDF resume language
* Default language: `en`

## PDF Resume

* Component: `src/components/ResumePDF.tsx` — `@react-pdf/renderer` document
* Button: `src/components/ResumeDownloadButton.tsx` — dynamic import, 3 variants (`hero`, `nav`, `contact`)
* ATS-optimized: black-on-white, Helvetica, clean layout
* Data builder: `src/lib/resumeData.ts` — `getResumeData(t)` returns typed resume from translations
* Filenames: `Emma_Estrada_Resume.pdf` (EN) / `Emma_Estrada_CV.pdf` (ES)
* `@react-pdf/renderer` is dynamically loaded client-side only (no SSR)

## Component Conventions

* All components are Client Components (`"use client"`) due to i18n context dependency
* Export: `export default function ComponentName()`
* Import alias: `@/components/ComponentName`
* Section pattern: `<section id="name" className="py-24 px-6">` → `<ScrollReveal>` wrapper
* Data from translations via `useI18n()` hook
* Images: `next/image` with Unsplash URLs
* Glass cards: `className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"`
* Tech tags: `className="px-2.5 py-1 bg-accent/10 text-accent-light text-xs rounded-full font-mono"`

## Contact Info

* Email: `poemmaestrada@gmail.com`
* LinkedIn: `https://www.linkedin.com/in/emma-estrada-oficial/`
* GitHub: `https://github.com` (placeholder)

## Next.js Rules

IMPORTANT:

* Use App Router (`src/app`) only.
* Use stable Next.js APIs only.
* Do NOT use experimental features unless explicitly requested.
* Do NOT use `use cache`, `unstable_cache`, or experimental directives.
* Prefer Server Components by default.
* Add `'use client'` only when required.

## Server Components

Allowed:

* Async components
* Server Actions
* Data fetching
* Database access

Forbidden:

* useState
* useEffect
* Browser APIs
* window
* document
* localStorage

## Client Components

Client Components must:

* Start with `'use client'`
* Be used only when interactivity is required
* Keep business logic in server code when possible

## Request APIs

Never use:

* cookies()
* headers()
* draftMode()
* redirect()
* notFound()

outside of:

* Route Handlers
* Server Components
* Server Actions

Never call these APIs during build-time initialization.

## Error Handling

Do not create:

* global-error.tsx
* error.tsx

unless explicitly requested.

Use standard error boundaries only when needed.

## TypeScript Rules

* Strict mode enabled
* Avoid `any` (exception: `PDFDownloadLink` state in `ResumeDownloadButton.tsx` uses `any` due to complex generic types from `@react-pdf/renderer`)
* Prefer explicit types
* Prefer interfaces for object contracts
* Use zod for runtime validation when needed

## Styling Rules

* Tailwind CSS v4 only
* No inline styles unless necessary
* Reusable UI belongs in `src/components`

## Validation Requirements

Before completing ANY task:

1. Run:

```bash
npm run lint
```

2. Run:

```bash
npm run build
```

3. Fix:

* TypeScript errors
* ESLint errors
* Prerender errors
* Hydration errors

4. A task is NOT complete until:

```bash
npm run build
```

passes successfully.

## General Rules

* Prefer simple implementations.
* Do not introduce unnecessary abstractions.
* Do not add dependencies without justification.
* Follow existing project conventions.
* Keep files small and focused.
* Verify generated code against the installed Next.js version.
