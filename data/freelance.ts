export type FreelanceProject = {
  title: string
  category: "Web3" | "Bots" | "Full-Stack" | "Systems" | "Trading"
  year: number
  period: string
  outcome: string
  stack: string[]
  rating: number | null
  publicLink?: string
}

export const freelance: FreelanceProject[] = [
  {
    title: "Senior Trading Systems Engineer (C#, Crypto + HFT + Multi-Exchange Execution)",
    category: "Systems",
    year: 2025,
    period: "Nov 2025",
    outcome:
      "Delivered order-execution module across multiple exchanges; HFT-aware design with strict latency budgets.",
    stack: ["C#", "Exchange APIs", "Trading Systems"],
    rating: null,
  },
  {
    title: "Discord Bot — Email Verification and Role Management",
    category: "Bots",
    year: 2025,
    period: "Nov 2025",
    outcome:
      "Production bot shipped and operated. 5.0 rating, private delivery. Endorsed for going above and beyond on Discord bot architecture.",
    stack: ["Python", "discord.py", "Verification"],
    rating: 5,
  },
  {
    title: "Smart Contract Developer — TRON USDT Proxy",
    category: "Web3",
    year: 2025,
    period: "Jul – Aug 2025",
    outcome:
      "TRC-20 proxy contract with role-based access controls. 5.0 rating, multi-stage delivery.",
    stack: ["TRON", "Solidity", "Proxy Pattern"],
    rating: 5,
  },
  {
    title: "Uniswap V4 Liquidity — Technical Support",
    category: "Web3",
    year: 2025,
    period: "Jul 2025",
    outcome:
      "Protocol-level integration support for a live Uniswap V4 deployment; answered architecture questions under tight timelines.",
    stack: ["Uniswap V4", "EVM", "Solidity"],
    rating: null,
  },
  {
    title: "Discord Bot — Voice Chat Integration with LLM",
    category: "Bots",
    year: 2025,
    period: "Jun 2025",
    outcome:
      "Voice-channel LLM bot delivered end-to-end. 5.0 rating, fixed-price engagement.",
    stack: ["Node.js", "Discord", "LLM", "Voice"],
    rating: 5,
  },
  {
    title: "Discord Bot — Keplr Wallet → Server Connection",
    category: "Web3",
    year: 2025,
    period: "Sep – Nov 2025",
    outcome:
      "Wallet authentication and role-gating workflow for a Cosmos community. Delivered, documented, and deployed for testing.",
    stack: ["Discord", "Keplr", "Cosmos"],
    rating: null,
  },
  {
    title: "Web3 Developer — Token Swap Implementation (multiple engagements)",
    category: "Web3",
    year: 2025,
    period: "Nov 2025 – Feb 2026",
    outcome:
      "Two repeat engagements implementing token-swap logic on Arbitrum and other EVM chains. JS/REST APIs with swap integration.",
    stack: ["JavaScript", "Web3", "REST API"],
    rating: null,
  },
  {
    title: "Telegram → Discord Bot Migration",
    category: "Bots",
    year: 2025,
    period: "Aug 2025",
    outcome:
      "Migrated an existing Telegram bot to Discord. 5.0 rating, super-recommended endorsement.",
    stack: ["discord.py", "Migration"],
    rating: 5,
  },
  {
    title: "Discord Expert — Multi-engagement Community Build",
    category: "Bots",
    year: 2025,
    period: "Aug – Sep 2025",
    outcome:
      "Multi-stage community build with verification, role automation, and ongoing operations.",
    stack: ["discord.py", "Operations"],
    rating: null,
  },
  {
    title: "Case Management Web App",
    category: "Full-Stack",
    year: 2025,
    period: "Aug 2025",
    outcome:
      "Web app for legal case management; private delivery.",
    stack: ["Full-Stack", "Web App"],
    rating: null,
  },
  {
    title: "Backend Development — Arbitrum",
    category: "Web3",
    year: 2025,
    period: "Jun 2025",
    outcome:
      "Backend-heavy Arbitrum work for a live client engagement. 5.0 rating.",
    stack: ["Arbitrum", "Backend", "EVM"],
    rating: 5,
  },
]

export const freelanceSummary = {
  totalJobs: 13,
  memberSince: "April 2024",
  averageRating: 4.74,
  hireAgainPercent: null,
}