# Emma Estrada — Portfolio & Resume

Personal portfolio site built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features full i18n (EN/ES) and ATS-optimized PDF resume download.

## Quick Start

```bash
npm install
cp .env.example .env.local   # fill in your contact info
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAIL` | Contact email (used in mailto links and PDF resume) |
| `NEXT_PUBLIC_LINKEDIN` | LinkedIn profile URL |
| `NEXT_PUBLIC_GITHUB` | GitHub profile URL |

All `NEXT_PUBLIC_*` vars are embedded in the client bundle (intentional — this is public contact info).

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git remote add origin git@github.com:your-user/your-repo.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new) → Import your GitHub repo

3. Vercel auto-detects Next.js — no configuration needed

4. Add environment variables in the Vercel dashboard (Settings → Environment Variables):
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_LINKEDIN`
   - `NEXT_PUBLIC_GITHUB`

5. Deploy — done

### Static Export

The project uses `output: 'export'` in `next.config.ts`, generating a fully static site. This works on Vercel's free tier with zero server-side code.

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
```

## Project Structure

```
src/
├── app/              # App Router (single page at /)
├── components/       # Shared UI components
├── lib/
│   ├── i18n/         # Internationalization (EN/ES)
│   └── resumeData.ts # PDF resume data builder
└── actions/          # Server Actions (currently unused)
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- @react-pdf/renderer (PDF resume generation)
