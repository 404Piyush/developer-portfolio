export type ProjectCategory = "Web3" | "Full-Stack" | "Systems" | "Bots" | "Tooling"

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  category: ProjectCategory
  year: number
  role: string
  stack: string[]
  highlights: string[]
  links: { label: string; href: string }[]
  visibility: "Public" | "Private"
  featured?: boolean
  accent: string
}

export const projects: Project[] = [
  {
    slug: "veltrix-l2",
    name: "Veltrix L2",
    tagline: "From-scratch OP-Stack rollup with bridge and explorer",
    description:
      "A modular Layer-2 rollup built on the OP Stack with a working Sepolia ↔ Veltrix bridge, block explorer, and faucet. Designed and shipped end-to-end: chain contracts, devnet orchestration, ops runbooks, and a user-facing bridge UI.",
    category: "Web3",
    year: 2026,
    role: "Solo builder",
    stack: ["Solidity", "Foundry", "OP Stack", "React", "Vite", "ethers"],
    highlights: [
      "Custom native ERC-20 (VEL), genesis config, and Docker devnet orchestration.",
      "Bridge calls OptimismPortal.depositTransaction and L2ToL1MessagePasser.initiateWithdrawal; UI resolves the full withdrawal lifecycle.",
      "Block explorer and faucet wired to the same chain spec.",
    ],
    links: [
      { label: "Chain repo", href: "https://github.com/404Piyush/veltrix-l2" },
      { label: "Bridge app", href: "https://github.com/404Piyush/veltrix-bridge" },
      { label: "Block explorer", href: "https://github.com/404Piyush/veltrix-block-explorer" },
    ],
    visibility: "Public",
    featured: true,
    accent: "deepSkyBlue",
  },
  {
    slug: "dev-observatory",
    name: "DevObservatory",
    tagline: "Async ingest platform with FastAPI, Next.js 15, and RabbitMQ",
    description:
      "Developer-observability platform: orgs and projects, per-project API keys, async event ingestion over RabbitMQ, Postgres persistence via a worker, and a Next.js 15 frontend with httpOnly JWT cookies.",
    category: "Full-Stack",
    year: 2026,
    role: "Solo builder",
    stack: ["FastAPI", "SQLAlchemy", "Next.js 15", "RabbitMQ", "Postgres", "Redis", "MinIO", "Docker"],
    highlights: [
      "Async ingest: client → API → RabbitMQ → worker → Postgres, decoupled and retryable.",
      "Multi-tenant orgs/projects, per-project API keys, SlowAPI rate limiting, Alembic migrations.",
      "Full Docker Compose stack: Postgres + Redis + RabbitMQ + MinIO, with one-command bootstrap.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/DevObservatory" }],
    visibility: "Public",
    featured: true,
    accent: "aquamarine",
  },
  {
    slug: "shineswap",
    name: "ShineSwap",
    tagline: "Custom AMM with on-chain swap history on Sepolia",
    description:
      "DeFi DApp for swapping ETH and a custom ERC-20 token (SHINE). The UI indexes on-chain history directly from Swap events on Sepolia and renders the user's last 10 swaps in real time.",
    category: "Web3",
    year: 2025,
    role: "Solo builder",
    stack: ["Solidity", "Hardhat", "OpenZeppelin", "React", "Vite", "ethers"],
    highlights: [
      "Constant-product AMM with fee-on-transfer token, standalone LP vault.",
      "Deployed and verified on Sepolia Etherscan at 0x476D…8564.",
      "On-chain transaction history fetched directly from Swap events.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/DeFi-Token-Swap-DApp" }],
    visibility: "Public",
    featured: true,
    accent: "deepPink",
  },
  {
    slug: "mayan-dfns-forwarder",
    name: "Mayan → DFNS Forwarder",
    tagline: "Cross-chain swap-and-forward with DFNS custody",
    description:
      "Node.js service that detects deposits, gets quotes from Mayan.Finance, signs and broadcasts swaps through DFNS custody, then forwards the resulting USDC to a Request.Finance address. Supports Ethereum, Solana, and BSC → Ethereum cross-chain.",
    category: "Web3",
    year: 2025,
    role: "Solo builder",
    stack: ["Node.js", "Mayan SDK", "DFNS", "ethers", "Solana web3.js"],
    highlights: [
      "Atomic OCO rollback path; polling for tx finalization with secret-scrubbing logs.",
      "Multi-chain menus (USDT/ETH/SOL/BNB) with gas preflight and slippage handling.",
      "Used by a client workflow on Request.Finance invoicing rails.",
    ],
    links: [
      {
        label: "Request walkthrough",
        href: "mailto:contact@404piyush.me?subject=Walkthrough%20request%20%E2%80%94%20Mayan%20DFNS%20Forwarder",
      },
    ],
    visibility: "Private",
    featured: true,
    accent: "bananaCream",
  },
  {
    slug: "gpu-engineering",
    name: "gpu-engineering",
    tagline: "Public 3-year C/GPU curriculum with shipped capstones",
    description:
      "An open-source curriculum tracking a 3-year path from C fundamentals to GPU engineering. The first three months shipped standalone C11 libraries with passing test suites, microbenchmarks, public APIs, and CI on Linux + macOS.",
    category: "Systems",
    year: 2026,
    role: "Solo builder",
    stack: ["C11", "POSIX", "x86-64", "Make", "GitHub Actions"],
    highlights: [
      "pipe-shell: POSIX-ish command interpreter, 62 assertions across 17 cases.",
      "arena-allocator: bump arena, 5–14× faster than malloc for small allocations.",
      "bst-library: generic BST, ~3.5M insert/s, ~4.5M find/s.",
      "Live editorial pages with interactive playgrounds at 404piyush.me subdomains.",
    ],
    links: [
      { label: "Curriculum", href: "https://github.com/404Piyush/gpu-engineering" },
      { label: "pipe-shell", href: "https://github.com/404Piyush/pipe-shell" },
      { label: "arena-allocator", href: "https://github.com/404Piyush/arena-allocator" },
      { label: "bst-library", href: "https://github.com/404Piyush/bst-library" },
    ],
    visibility: "Public",
    featured: true,
    accent: "lavender",
  },
  {
    slug: "primebot",
    name: "primebot",
    tagline: "Binance Futures Testnet CLI with full order-type coverage",
    description:
      "Python CLI for placing MARKET, LIMIT, STOP_LIMIT, OCO, and TWAP orders on Binance Futures Testnet. Interactive and one-shot modes with strict input validation, secret-scrubbing logs, and atomic OCO rollback.",
    category: "Systems",
    year: 2026,
    role: "Solo builder",
    stack: ["Python", "HMAC-signed REST", "pytest", "mypy", "ruff", "GitHub Actions"],
    highlights: [
      "155 tests, 92% coverage on bot/, CI on Python 3.11 / 3.12 / 3.13.",
      "Secret scrubbing at log-emit time (signature, apiKey, apiSecret).",
      "Clock skew tolerance via /fapi/v1/time probe and recvWindow config.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/primeTrade-demo-bot" }],
    visibility: "Public",
    featured: true,
    accent: "aquamarine",
  },
  {
    slug: "case-management",
    name: "Case Management System",
    tagline: "Production legal case-tracking SaaS on Render",
    description:
      "Full-stack case-tracking system for legal workflows: role-based access (Boss, Lawyer, Law Firm), case timelines with location + photo evidence, GridFS document storage with chunked streaming, and a status workflow with live UI updates.",
    category: "Full-Stack",
    year: 2025,
    role: "Solo builder",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Node.js", "Express", "MongoDB", "GridFS"],
    highlights: [
      "Timestamp-based photo-matching logic fixed a real correctness bug in the timeline.",
      "GridFS streaming with chunked backpressure for large file downloads.",
      "Production-deployed at case-management-system-1-tuur.onrender.com.",
    ],
    links: [
      {
        label: "Request walkthrough",
        href: "mailto:contact@404piyush.me?subject=Walkthrough%20request%20%E2%80%94%20Case%20Management%20System",
      },
    ],
    visibility: "Private",
    accent: "deepSkyBlue",
  },
  {
    slug: "cmms",
    name: "CMMS",
    tagline: "Real-time classroom monitoring system with WebSocket control plane",
    description:
      "Real-time teacher → student control plane with WebSocket, JWT auth, application blocking, and website filtering. Paired with a cross-platform Java desktop student client.",
    category: "Full-Stack",
    year: 2025,
    role: "Solo builder",
    stack: ["Node.js", "Express", "MongoDB", "WebSocket", "JWT", "Java", "JavaFX", "Maven"],
    highlights: [
      "WebSocket session lifecycle with backpressure and connection reaping.",
      "Helmet, CORS, and rate limiting at the API edge.",
      "Java desktop client (Maven) with MongoDB Java driver.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/cmms" }],
    visibility: "Public",
    accent: "deepPink",
  },
  {
    slug: "friendlyminter",
    name: "FriendlyMinter",
    tagline: "Solana cNFT minting platform",
    description:
      "Compressed-NFT minting product built on Solana with Next.js + TypeScript. Wallet onboarding, minting flow, and launch-ready product structure.",
    category: "Web3",
    year: 2025,
    role: "Solo builder",
    stack: ["Next.js", "TypeScript", "Solana", "cNFT compression"],
    highlights: [
      "On-chain Merkle tree management for compressed minting.",
      "Wallet adapters wired for the Solana ecosystem.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/FriendlyMinter" }],
    visibility: "Public",
    accent: "bananaCream",
  },
  {
    slug: "discord-community-manager",
    name: "Discord Community Manager",
    tagline: "Production-grade verification, moderation, and automation bot",
    description:
      "Modular Discord bot with verification (button, math captcha, text captcha, emoji, image, word scramble), moderation, warnings, starboard, RSS feeds, and tags. Slash-command interface, mobile-friendly forms, role-based permissions, and automatic DB migrations.",
    category: "Bots",
    year: 2025,
    role: "Solo builder",
    stack: ["Python", "discord.py", "SQLite"],
    highlights: [
      "Multi-method captcha with anti-bot protection.",
      "Owner → Admin → Moderator → Member role hierarchy.",
      "Built and operated in live communities before being open-sourced.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/discord-community-manager" }],
    visibility: "Public",
    accent: "lavender",
  },
  {
    slug: "syndicate-den",
    name: "The Syndicate's Den",
    tagline: "Casino-style Discord game system with persistent wallets",
    description:
      "Discord casino bot built in Java with JDA. Six games (Dice, Roulette, Slots, Blackjack, Russian Roulette, Coin Flip), mathematically accurate payouts, and SQLite-backed user wallets.",
    category: "Bots",
    year: 2025,
    role: "Solo builder",
    stack: ["Java 17", "JDA 5", "SQLite", "Maven"],
    highlights: [
      "Clean separation between commands, game logic, and persistence.",
      "Casino-grade math: probability-correct payouts, configurable house edge.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/discord-gambling-bot" }],
    visibility: "Public",
    accent: "deepSkyBlue",
  },
  {
    slug: "easy-file-share",
    name: "Easy File Share",
    tagline: "Cross-device file sharing with QR pairing",
    description:
      "React + Express prototype for sharing files across devices over a QR-paired WebSocket connection with real-time progress.",
    category: "Full-Stack",
    year: 2025,
    role: "Solo builder",
    stack: ["React 18", "Vite", "Express", "Socket.io", "MongoDB"],
    highlights: [
      "WebSocket transfer with progress and connection lifecycle handling.",
      "Local-network IP auto-detection for cross-device UX.",
    ],
    links: [{ label: "Source", href: "https://github.com/404Piyush/file-share-app" }],
    visibility: "Public",
    accent: "aquamarine",
  },
  {
    slug: "instagramvault",
    name: "instagramvault",
    tagline: "Async Instagram media downloader with encrypted sessions",
    description:
      "Python CLI for downloading Instagram stories, highlights, posts, reels, and profile media using your own account credentials with full 2FA support. Encrypted session in OS keychain.",
    category: "Tooling",
    year: 2026,
    role: "Solo builder",
    stack: ["Python 3.12", "uv", "Typer", "Rich", "instagrapi", "httpx", "cryptography"],
    highlights: [
      "Fernet-encrypted session stored in macOS Keychain / equivalent.",
      "Parallel async downloads with progress, resume-by-content-hash, ffmpeg DASH merge.",
      "Layered config: defaults → TOML → env → CLI.",
    ],
    links: [
      {
        label: "Request walkthrough",
        href: "mailto:contact@404piyush.me?subject=Walkthrough%20request%20%E2%80%94%20instagramvault",
      },
    ],
    visibility: "Private",
    accent: "deepPink",
  },
  {
    slug: "push-stakes",
    name: "Push Stakes",
    tagline: "Web3 casino with operator-controlled on-chain game wallet",
    description:
      "Web3 casino-style gaming platform built with Next.js, Wagmi, and an operator-controlled on-chain game wallet. Signed-payload verification with timestamp window on all mutating routes.",
    category: "Web3",
    year: 2025,
    role: "Solo builder",
    stack: ["Next.js", "Wagmi", "WalletConnect", "MongoDB"],
    highlights: [
      "Server-side operator checks before any wallet withdrawal.",
      "Live deployment at pushstakes.404piyush.me.",
    ],
    links: [
      {
        label: "Request walkthrough",
        href: "mailto:contact@404piyush.me?subject=Walkthrough%20request%20%E2%80%94%20Push%20Stakes",
      },
    ],
    visibility: "Private",
    accent: "bananaCream",
  },
  {
    slug: "virtue-leaderboard",
    name: "Virtue Token Leaderboard",
    tagline: "Full-stack token analytics SaaS with role classification",
    description:
      "FastAPI + React leaderboard for tracking Virtue Token holders. Classifies wallets into roles (Diamond Hands, Gladiator, Trader, Jeet) based on hold-time and sell behavior, with an admin dashboard for KOL/whale tagging.",
    category: "Web3",
    year: 2025,
    role: "Solo builder",
    stack: ["FastAPI", "PostgreSQL", "React", "Covalent", "Alchemy", "Etherscan"],
    highlights: [
      "SQLAlchemy ORM with index-optimized leaderboard queries.",
      "Production-deployed on Render + Vercel.",
    ],
    links: [
      {
        label: "Request walkthrough",
        href: "mailto:contact@404piyush.me?subject=Walkthrough%20request%20%E2%80%94%20Virtue%20Leaderboard",
      },
    ],
    visibility: "Private",
    accent: "deepSkyBlue",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)