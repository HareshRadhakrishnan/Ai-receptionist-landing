# Commitly Labs — AI Receptionist Landing Page

Single-page marketing site for **Commitly Labs** — an AI receptionist service that
answers small-business phone calls 24/7 (after hours, while the owner is on a job)
so no customer call goes unanswered.

Built with **Next.js (App Router, TypeScript) + Tailwind CSS**, statically
exported — it deploys to Vercel, Netlify, S3, or any static host.

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
# → static files in ./out
```

## Deploy

- **Vercel:** import this repo — no config needed (`output: "export"` is set;
  Vercel serves the static export). Add the custom domain `commitlylabs.com`.
- **Any static host:** upload the contents of `./out`.

## Site map (one page)

- Hero — "Never miss another customer call" + call-demo card
- Stat bar — unanswered-call industry numbers
- Problems — after hours / on a job / lunch rush
- How it works — keep your number → AI answers → bookings on your calendar
- Features — 24/7 answering, booking, FAQs, summaries, spam filter
- Free trial callout
- FAQ
- Final CTA (all CTAs link to the Google Calendar booking page)

All "Schedule a Call" buttons point to the intro-call calendar
(`https://calendar.app.google/JNwUTUYHoNXdx1HaA`).

## Notes for edits

- Copy lives in `app/page.tsx`, one component per section — edit text there.
- Colors: `brand` (teal) and `ink` (navy) are defined in `tailwind.config.ts`.
- Fonts: system stack (no webfont dependency — keeps the build offline-safe).