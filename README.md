# Piyush Utkar — Portfolio

[![Site](https://img.shields.io/badge/site-404piyush.me-111111?style=flat-square)](https://404piyush.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square)](https://www.linkedin.com/in/piyush-utkar-0489b12b2)
[![Upwork](https://img.shields.io/badge/Upwork-Freelance-14A800?style=flat-square)](https://www.upwork.com/freelancers/~01e9719b8739727b9c)

Personal portfolio and project catalog for **Piyush Utkar** — a Mumbai-based, self-taught engineer shipping across **Web3**, **full-stack**, and **systems (C)**.

The site is a Next.js 15 application built on the App Router. Every claim on the site is traceable to a public repository, a private delivery with a walkthrough request, or a verified Upwork engagement.

## Highlights

- **OP-Stack L2, end to end** — Veltrix L2, a working rollup with chain contracts, bridge UI, block explorer, and faucet.
- **13+ Upwork deliveries** across Web3, Discord bots, full-stack SaaS, and trading systems. 5.0 rating on multiple engagements.
- **Public 3-year C/GPU curriculum** (`gpu-engineering`) with 273 passing assertions across standalone C11 libraries.
- **Production full-stack work** on FastAPI, Next.js 15, RabbitMQ, and Postgres.

## Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router, edge runtime)
- **Language**: [TypeScript](https://www.typescriptlang.org) (strict)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with a small design-token layer
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for section reveals
- **Icons**: [Lucide](https://lucide.dev)
- **Fonts**: [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Hosting**: [Vercel](https://vercel.com)
- **Contact form**: [Web3Forms](https://web3forms.com) when configured, otherwise falls back to a `mailto:` link

## Project structure

```
portfolio/
├── app/
│   ├── page.tsx              # Home
│   ├── web3/page.tsx         # Focused Web3 narrative
│   ├── work/                 # Project browser
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx   # Per-project case study
│   ├── resume/page.tsx       # Inline one-pager mirror
│   ├── writing/page.tsx      # Technical writing
│   ├── api/contact/route.ts  # Edge-runtime contact handler
│   ├── sitemap.ts            # Generated sitemap
│   ├── robots.ts             # robots.txt
│   ├── not-found.tsx         # 404
│   ├── error.tsx             # Error boundary
│   ├── loading.tsx           # Route loading state
│   └── layout.tsx            # Root layout + metadata
├── components/
│   ├── site-header.tsx
│   ├── theme-toggle.tsx
│   ├── metrics-bar.tsx
│   ├── project-card.tsx
│   ├── project-browser.tsx
│   ├── get-in-touch.tsx
│   ├── section-reveal.tsx
│   └── motion-reveal.tsx
├── data/
│   ├── profile.ts            # Single source of truth for contact + identity
│   ├── projects.ts           # Hand-curated project catalog
│   ├── freelance.ts          # Cleaned client-delivery history
│   ├── skills.ts             # Grouped skill sets
│   └── writing.ts            # Writing index
├── public/                   # Static assets
└── tailwind.config.js
```

## Local development

Prerequisites: Node.js 20+, npm 10+.

```bash
git clone https://github.com/404Piyush/developer-portfolio.git
cd developer-portfolio
npm install
npm run dev
```

Open <http://localhost:3000>.

### Environment variables (optional)

Create `.env.local` from the example template. **All variables are optional** — without them the contact form falls back to opening the user's mail client with a pre-filled draft.

```bash
cp .env.example .env.local   # if present
```

| Variable                   | Purpose                                            |
| -------------------------- | -------------------------------------------------- |
| `WEB3FORMS_API_KEY`        | Enables server-side submission via Web3Forms       |
| `NEXT_PUBLIC_WEB3FORMS_KEY`| Browser-side submission (kept for legacy fallback) |

## Scripts

| Command              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run dev`        | Start the dev server on <http://localhost:3000>      |
| `npm run build`      | Production build                                      |
| `npm run start`      | Run the production build locally                      |
| `npm run lint`       | ESLint with the Next.js config                        |
| `npm run typecheck`  | TypeScript without emitting files                     |

## Design decisions

- **No fake data.** Every project entry links to a repo, a deployed URL, or a walkthrough request.
- **No client names, no earnings, no Upwork IDs.** Public Upwork job URLs may appear in `data/freelance.ts`, but client identifiers and amounts are intentionally omitted.
- **Self-taught, no formal CS degree.** Profile copy reflects this and avoids mentioning institutions.
- **Reduced motion respected.** `prefers-reduced-motion` disables non-essential animations.
- **Light + dark theme.** Defaults to the OS preference, persisted in `localStorage`, manually toggleable.
- **Print-friendly resume.** The `/resume` page is a clean HTML mirror of the one-pager.

## Contributing

This is a personal portfolio. Issues and pull requests are not accepted, but feel free to fork it as a template for your own site — the data layer is intentionally easy to swap.

## License

Code: MIT. Personal data, project descriptions, and writing samples: not licensed for reuse.

## Contact

- Email: [contact@404piyush.me](mailto:contact@404piyush.me)
- LinkedIn: [piyush-utkar-0489b12b2](https://www.linkedin.com/in/piyush-utkar-0489b12b2)
- Upwork: [~01e9719b8739727b9c](https://www.upwork.com/freelancers/~01e9719b8739727b9c)
- Calendly: [calendly.com/404piyush](https://calendly.com/404piyush)