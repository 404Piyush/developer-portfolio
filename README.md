# Piyush J. Utkar Portfolio

Data-backed developer portfolio built with Next.js 15 for Web3, systems, automation, and full-stack client work.

## Highlights

- Searchable project browser across GitHub repositories and verified client deliveries
- Focused Web3 page with previous experience, portfolio proof, and direct contact paths
- Lead-capture contact section with inquiry fields, LinkedIn, Upwork, GitHub, and Calendly
- Source-driven content mapped from portfolio data instead of placeholder copy
- Custom favicon generated from the project logo through the App Router icon pipeline

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
portfolio/
├── app/              # App Router pages, layout, favicon icon
├── components/       # Reusable UI sections and interactive components
├── data/             # Portfolio data assembled from source exports
├── public/images/    # Screenshots and project assets
├── export_*.json     # Upwork export data used by the site
└── github_repo_data.json
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create the production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript without emitting files

## Contact

- Email: [piyushutkarxb@gmail.com](mailto:piyushutkarxb@gmail.com)
- GitHub: [404Piyush](https://github.com/404Piyush)
- LinkedIn: [Piyush Utkar](https://www.linkedin.com/in/piyush-utkar-0489b12b2)
- Upwork: [Piyush Utkar](https://www.upwork.com/freelancers/~01e9719b8739727b9c)
- Calendly: [404piyush](https://calendly.com/404piyush)

## Notes

- The site intentionally avoids showing earnings or tracked-hour metrics.
- Private work is surfaced through walkthrough requests instead of dead-end repository links.
- The current content is shaped from real exports and repository metadata to keep claims grounded.
