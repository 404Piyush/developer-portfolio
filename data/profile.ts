export type SocialLink = {
  label: string
  href: string
}

export type Cv = {
  label: string
  description: string
  href: string
  accent: string
}

export type Profile = {
  name: string
  initials: string
  shortName: string
  role: string
  location: string
  email: string
  phone: string
  summary: string
  highlights: string[]
  socials: SocialLink[]
  resume: Cv
  cvs: Cv[]
}

export const profile: Profile = {
  name: "Piyush Utkar",
  initials: "PU",
  shortName: "Piyush",
  role: "Full-Stack · Web3 · Systems Engineer",
  location: "Mumbai, India",
  email: "contact@404piyush.me",
  phone: "+91 89284 61897",
  summary:
    "Self-taught engineer shipping across Web3, full-stack, and systems. From-scratch OP-Stack L2, production Discord and DeFi client work, and a public 3-year C/GPU roadmap with standalone C11 libraries.",
  highlights: [
    "Built and shipped Veltrix L2 (chain, bridge, explorer, faucet) end-to-end on OP Stack.",
    "13+ completed Upwork deliveries across Web3, Discord bots, and trading systems.",
    "Public C/GPU curriculum with 273 passing assertions across standalone capstones.",
    "Production full-stack work on FastAPI, Next.js 15, RabbitMQ, and Postgres.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/404Piyush" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/piyush-utkar-0489b12b2" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01e9719b8739727b9c" },
    { label: "Calendly", href: "https://calendly.com/404piyush" },
    { label: "Twitter", href: "https://twitter.com/PiyushUtkar" },
  ],
  resume: {
    label: "General resume",
    description: "One-page summary covering all three lanes.",
    href: "/cv/resume.pdf",
    accent: "bg-bananaCream",
  },
  cvs: [
    {
      label: "Web3 / Solidity",
      description: "Smart contracts, OP-Stack L2, DeFi, multi-chain tooling.",
      href: "/cv/web3-cv.pdf",
      accent: "bg-deepPink",
    },
    {
      label: "Full-Stack",
      description: "React · Next.js · FastAPI · RabbitMQ · Postgres, async + real-time systems.",
      href: "/cv/fullstack-cv.pdf",
      accent: "bg-deepSkyBlue",
    },
    {
      label: "Systems (C)",
      description: "C11, POSIX, custom allocators, microbenchmarks, public curriculum.",
      href: "/cv/systems-cv.pdf",
      accent: "bg-aquamarine",
    },
  ],
}