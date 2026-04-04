import githubRepoData from "@/github_repo_data.json"
import profileExport from "@/export_1775282440166.json"
import jobsExport from "@/export_1775282499733.json"

type ProfileExportRecord = {
  "Full Name": string
  Title: string
  Description: string
  Country: string
  City: string
  Skills: string
  "Member Since": string
  "Profile URL": string
  "Portfolio Items Count": string
  "Total Jobs Worked": string
  "Hire Again Percentage": string
  "English Level": string
  "Other Languages": string
  Education: string
  "Employment History": string
}

type JobExportRecord = {
  "Job Title": string
  "Job URL": string
  "Start Date": string
  "End Date": string
  Status: string
  "Job Type": string
  Skills: string
  "Client Feedback Score": string
  "Client Feedback Comment": string
  "Freelancer Feedback Score": string
  "Freelancer Feedback Comment": string
  "Access Type": string
}

type GithubRepoRecord = {
  name: string
  visibility: string
  description: string | null
  primary_language: string | null
  url: string
  last_updated: string
  structure_tree: string[]
  readme_raw: string
}

export type ProjectShowcaseItem = {
  name: string
  subtitle: string
  description: string
  visibility: string
  stack: string[]
  href: string
  ctaLabel: string
  accent: string
  image: string
  year: string
  source: string
  category: string
  tags: string[]
  spotlight?: boolean
}

const profileRecord = (profileExport as ProfileExportRecord[])[0]
const jobRecords = jobsExport as JobExportRecord[]
const githubRecords = githubRepoData as GithubRepoRecord[]

const accents = ["bg-deepSkyBlue", "bg-bananaCream", "bg-aquamarine", "bg-deepPink", "bg-lavender"] as const

const publicProfileUrl = "https://github.com/404Piyush"

const hiddenRepos = new Set(["404Piyush", "404piyush.github.io", "clone-v3", "my-private-repo"])

const repoOverrides: Record<
  string,
  Partial<ProjectShowcaseItem> & {
    displayName?: string
    subtitle: string
    description?: string
    category?: string
    tags?: string[]
    stack?: string[]
    image?: string
    spotlight?: boolean
  }
> = {
  cmms: {
    displayName: "CMMS",
    subtitle: "Classroom Management and Monitoring System",
    description:
      "Real-time classroom control system with dashboard views, student monitoring, website filtering, and backend coordination between desktop and server layers.",
    category: "Systems",
    stack: ["Java", "WebSockets", "Backend API", "Desktop"],
    tags: ["education", "monitoring", "desktop", "realtime"],
    image: "/images/teacher-dashboard.jpg",
    spotlight: true,
  },
  DevObservatory: {
    subtitle: "Observability for developer and trading systems",
    description:
      "FastAPI and RabbitMQ observability platform with async ingestion, worker persistence, and a polished Next.js 15 frontend for inspecting live events.",
    category: "Systems",
    stack: ["FastAPI", "RabbitMQ", "Next.js 15", "Docker"],
    tags: ["observability", "queues", "monitoring", "full-stack"],
    spotlight: true,
  },
  "DeFi-Token-Swap-DApp": {
    displayName: "DeFi Token Swap DApp",
    subtitle: "Swap interface with on-chain history",
    description:
      "DeFi application for ETH and ERC20 swaps with wallet connection, transaction history, price-impact awareness, and smart contract integration.",
    category: "Web3",
    stack: ["Solidity", "Hardhat", "Ethers.js", "TypeScript"],
    tags: ["defi", "swap", "wallet", "smart-contracts"],
    spotlight: true,
  },
  "discord-community-manager": {
    displayName: "Discord Community Manager",
    subtitle: "Verification, moderation, and automation bot",
    description:
      "Advanced community operations bot with multi-step verification, moderation controls, reaction roles, RSS updates, and everyday utility commands.",
    category: "Bots",
    stack: ["Python", "discord.py", "Automation", "Moderation"],
    tags: ["discord", "bot", "verification", "community"],
    image: "/images/community-manager-info.png",
    spotlight: true,
  },
  "discord-gambling-bot": {
    displayName: "Discord Gambling Bot",
    subtitle: "Casino-style Discord game system",
    description:
      "Feature-rich Discord experience with casino games, economy mechanics, and interactive flows built for a lively community experience.",
    category: "Bots",
    stack: ["Java", "Discord API", "Game Logic", "Menus"],
    tags: ["discord", "games", "economy", "bot"],
    image: "/images/blackjack.png",
  },
  FriendlyMinter: {
    subtitle: "Compressed NFT minting platform",
    description:
      "Next.js and TypeScript minting product for cNFT campaigns with wallet onboarding, Solana integrations, and launch-ready product structure.",
    category: "Web3",
    stack: ["Next.js", "TypeScript", "Solana", "Wallets"],
    tags: ["cnft", "minting", "solana", "launch"],
    spotlight: true,
  },
  "fictional-fate": {
    displayName: "Fictional Fate",
    subtitle: "Swipe-style quiz product",
    description:
      "Interactive quiz experience with swipe-based flows, personality matching, polished motion, and strong front-end presentation.",
    category: "Full-Stack",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    tags: ["quiz", "frontend", "interactive", "motion"],
  },
  "dao-ai-assistant": {
    displayName: "DAO AI Assistant",
    subtitle: "AI tooling with on-chain context",
    description:
      "DAO-oriented assistant that blends chat UX, proposal tooling, contract hooks, and live system integration in one product surface.",
    category: "Web3",
    stack: ["Next.js", "TypeScript", "Solidity", "WebSockets"],
    tags: ["dao", "ai", "contracts", "proposals"],
  },
  pfims: {
    displayName: "PFIMS",
    subtitle: "Personal Finance Management System",
    description:
      "Full-stack finance system for budgeting, reporting, and category-level money management with a practical user-oriented workflow.",
    category: "Full-Stack",
    stack: ["JavaScript", "Node.js", "MongoDB", "React"],
    tags: ["finance", "dashboard", "reports", "full-stack"],
    spotlight: true,
  },
  "business-finder": {
    displayName: "Business Finder",
    subtitle: "AI-assisted search and classification workflow",
    description:
      "TypeScript-heavy search product for classifying local businesses, ranking results, and turning messy queries into structured matches.",
    category: "Systems",
    stack: ["TypeScript", "Deno", "OpenSearch", "Frontend"],
    tags: ["search", "classification", "ai", "data"],
  },
  "case-management-system": {
    displayName: "Case Management System",
    subtitle: "Legal case tracking platform",
    description:
      "Comprehensive case-tracking system built with React, TypeScript, Node.js, and MongoDB for managing legal workflows and records.",
    category: "Full-Stack",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    tags: ["legal-tech", "dashboard", "full-stack", "workflow"],
  },
  "tron-transfer-dapp": {
    displayName: "TRON Transfer DApp",
    subtitle: "Client MVP for TRON asset transfers",
    description:
      "Full-stack TRON transfer application with a React frontend, Node.js backend, and blockchain-facing logic for client MVP delivery.",
    category: "Web3",
    stack: ["React", "Node.js", "TRON", "Express"],
    tags: ["tron", "dapp", "client", "wallet"],
  },
  "resume-builder-cloud-private": {
    displayName: "Resume Builder Cloud",
    subtitle: "Cloud-hosted resume builder",
    description:
      "Team-oriented resume builder deployed with cloud tooling and focused on customizable single-page resume generation.",
    category: "Full-Stack",
    stack: ["TypeScript", "Cloud", "Forms", "Templates"],
    tags: ["resume", "cloud", "team-project", "builder"],
  },
  "locktalk-app": {
    displayName: "LockTalk App",
    subtitle: "Flutter mobile application",
    description:
      "Cross-platform Flutter application focused on app-level interaction flows, component structure, and mobile product delivery.",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Mobile UI"],
    tags: ["mobile", "flutter", "ui", "app"],
  },
  "skillspark-fixed": {
    displayName: "SkillSpark",
    subtitle: "Private TypeScript product build",
    description:
      "Private TypeScript build centered on structured learning flows, product polish, and dependable feature delivery for a client-facing experience.",
    category: "Full-Stack",
    stack: ["TypeScript", "UI", "Product Logic"],
    tags: ["learning", "typescript", "private-build"],
  },
  "viewmax-workshop-bot": {
    displayName: "Viewmax Workshop Bot",
    subtitle: "Workshop automation bot",
    description:
      "Automation-focused bot for workshop operations with event handling, sweeper routines, and lightweight service logic.",
    category: "Bots",
    stack: ["JavaScript", "Automation", "Node.js"],
    tags: ["bot", "automation", "workshop"],
  },
  "virtue-leaderboard": {
    displayName: "Virtue Leaderboard",
    subtitle: "Blockchain leaderboard application",
    description:
      "Full-stack leaderboard for tracking token holders and blockchain activity with separate frontend and backend services.",
    category: "Web3",
    stack: ["Python", "Backend", "Frontend", "Blockchain Data"],
    tags: ["leaderboard", "tokens", "analytics", "blockchain"],
  },
  "google-maps-review-analyzer": {
    displayName: "Google Maps Review Analyzer",
    subtitle: "Scraping and analysis workflow",
    description:
      "Automation script set for collecting, analyzing, and organizing Google Maps reviews into usable insights and topic-level patterns.",
    category: "Tooling",
    stack: ["JavaScript", "Automation", "Analysis"],
    tags: ["scraping", "analysis", "reviews", "automation"],
  },
  "file-share-app": {
    displayName: "File Share App",
    subtitle: "Cross-device sharing prototype",
    description:
      "React and Express prototype for quick file sharing across devices using lightweight flows and QR-driven handoff.",
    category: "Full-Stack",
    stack: ["React", "Express", "QR Codes", "JavaScript"],
    tags: ["sharing", "prototype", "qr", "full-stack"],
  },
  "gpu-engineering": {
    displayName: "GPU Engineering",
    subtitle: "Low-level systems exploration",
    description:
      "C-based experimentation around systems thinking, low-level programming, and GPU-oriented learning work.",
    category: "Systems",
    stack: ["C", "Systems", "GPU"],
    tags: ["c", "systems", "engineering", "low-level"],
  },
  TMS: {
    subtitle: "Temporary email service with Discord integration",
    description:
      "Java service for temporary email workflows integrated with the Discord bot ecosystem and API-level handling.",
    category: "Bots",
    stack: ["Java", "Discord API", "Backend"],
    tags: ["email", "discord", "service", "bot"],
  },
  "developer-portfolio": {
    displayName: "Developer Portfolio",
    subtitle: "Earlier portfolio iteration",
    description:
      "A previous portfolio build focused on animation, responsive layout, and a more classic full-stack presentation of your work.",
    category: "Full-Stack",
    stack: ["JavaScript", "Frontend", "Portfolio"],
    tags: ["portfolio", "frontend", "animation"],
  },
  "ES-Futures-Bot": {
    displayName: "ES Futures Bot",
    subtitle: "Trading workflow automation",
    description:
      "Private Python bot project aligned with trading system logic, execution discipline, and automation-heavy development.",
    category: "Systems",
    stack: ["Python", "Trading", "Automation"],
    tags: ["trading", "bot", "automation", "systems"],
  },
  "mayan-dfns-forwarder": {
    displayName: "Mayan DFNS Forwarder",
    subtitle: "Wallet and transaction forwarding utility",
    description:
      "Private JavaScript service for forwarding wallet-related requests and integrating secure transaction workflows.",
    category: "Web3",
    stack: ["JavaScript", "Wallets", "Services"],
    tags: ["wallet", "transactions", "forwarder", "web3"],
  },
  "ninjatrader-bot": {
    displayName: "NinjaTrader Bot",
    subtitle: "Private trading bot build",
    description:
      "Automation-focused trading bot project built around strategy execution, market workflows, and consistent systems thinking.",
    category: "Systems",
    stack: ["JavaScript", "Trading", "Automation"],
    tags: ["trading", "bot", "execution", "systems"],
  },
  "discord-trader": {
    displayName: "Discord Trader",
    subtitle: "Private trading interface experiment",
    description:
      "Private build that combines trading workflows with a Discord-facing interface and lightweight front-end delivery.",
    category: "Bots",
    stack: ["HTML", "JavaScript", "Trading UI"],
    tags: ["discord", "trading", "interface"],
  },
}

const clientProjectEntries: ProjectShowcaseItem[] = [
  {
    name: "TRON USDT Proxy Delivery",
    subtitle: "Public smart contract delivery",
    description:
      "Verified client work centered on TRON transfer flows, Solidity architecture, secure execution patterns, and production-minded blockchain delivery.",
    visibility: "Client Delivery",
    stack: ["TRON", "Solidity", "Proxy Pattern", "Blockchain Architecture"],
    href: "https://www.upwork.com/jobs/~021943604875816266979",
    ctaLabel: "View project brief",
    accent: "bg-bananaCream",
    image: "",
    year: "2025",
    source: "Upwork",
    category: "Web3",
    tags: ["tron", "proxy", "smart-contracts", "client"],
    spotlight: true,
  },
  {
    name: "Arbitrum Backend Delivery",
    subtitle: "Private backend infrastructure work",
    description:
      "Client backend build aligned with Arbitrum workflows, low-latency execution thinking, and systems-first implementation.",
    visibility: "Private Delivery",
    stack: ["Arbitrum", "Backend", "APIs", "Systems Design"],
    href: `mailto:piyushutkarxb@gmail.com?subject=${encodeURIComponent("Request walkthrough - Arbitrum Backend Delivery")}`,
    ctaLabel: "Request walkthrough",
    accent: "bg-lavender",
    image: "",
    year: "2025",
    source: "Upwork",
    category: "Web3",
    tags: ["arbitrum", "backend", "private", "client"],
  },
  {
    name: "Web3 Token Swap Implementation",
    subtitle: "Swap logic and API integration",
    description:
      "Client-facing token swap work combining API integration, JavaScript delivery, and practical Web3 problem solving in a compact engagement.",
    visibility: "Client Delivery",
    stack: ["JavaScript", "Web3", "REST API", "API Integration"],
    href: "https://www.upwork.com/jobs/~021991493485148465647",
    ctaLabel: "View project brief",
    accent: "bg-deepPink",
    image: "",
    year: "2026",
    source: "Upwork",
    category: "Web3",
    tags: ["token-swap", "integration", "web3", "api"],
  },
  {
    name: "Discord Voice + LLM Bot",
    subtitle: "Voice chat integration for Discord",
    description:
      "Built a production Discord bot that combined voice workflows, LLM interactions, and API-driven chatbot behavior.",
    visibility: "Client Delivery",
    stack: ["Node.js", "Discord", "LLM", "APIs"],
    href: "https://www.upwork.com/jobs/~021933860763560848196",
    ctaLabel: "View project brief",
    accent: "bg-deepSkyBlue",
    image: "",
    year: "2025",
    source: "Upwork",
    category: "Bots",
    tags: ["discord", "voice", "llm", "automation"],
    spotlight: true,
  },
  {
    name: "Email Verification Discord Bot",
    subtitle: "Role management and verification flow",
    description:
      "Client bot delivery built around email verification, role assignment, and dependable community management workflows.",
    visibility: "Private Delivery",
    stack: ["JavaScript", "Discord Bot Development", "Verification"],
    href: `mailto:piyushutkarxb@gmail.com?subject=${encodeURIComponent("Request walkthrough - Email Verification Discord Bot")}`,
    ctaLabel: "Request walkthrough",
    accent: "bg-aquamarine",
    image: "/images/community-manager-verification.png",
    year: "2025",
    source: "Upwork",
    category: "Bots",
    tags: ["discord", "verification", "roles", "client"],
  },
  {
    name: "Case Management Web App",
    subtitle: "Private client web application",
    description:
      "Case-management delivery focused on practical workflows, organized interfaces, and dependable full-stack implementation for real usage.",
    visibility: "Private Delivery",
    stack: ["Web App", "Full-Stack", "Case Management"],
    href: `mailto:piyushutkarxb@gmail.com?subject=${encodeURIComponent("Request walkthrough - Case Management Web App")}`,
    ctaLabel: "Request walkthrough",
    accent: "bg-bananaCream",
    image: "",
    year: "2025",
    source: "Upwork",
    category: "Full-Stack",
    tags: ["web-app", "case-management", "client", "private"],
  },
]

const titleize = (value: string) =>
  value
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")

const cleanText = (value: string | null | undefined) =>
  (value ?? "")
    .replace(/[#>*`_[\]()]/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/\s+/g, " ")
    .trim()

const readmeSnippet = (value: string) => {
  const plain = cleanText(value).replace(/^No README found\.?$/i, "")
  if (!plain) return ""
  return plain.slice(0, 170).trim()
}

const inferCategory = (repo: GithubRepoRecord) => {
  const haystack = `${repo.name} ${repo.description ?? ""} ${repo.readme_raw}`.toLowerCase()
  if (/tron|swap|wallet|solidity|token|blockchain|dao|web3|nft|solana|arbitrum|defi/.test(haystack)) return "Web3"
  if (/discord|bot|chat/.test(haystack)) return "Bots"
  if (/flutter|dart|mobile/.test(haystack)) return "Mobile"
  if (/system|monitor|queue|observability|gpu|trading|leaderboard|desktop/.test(haystack)) return "Systems"
  if (/scrape|analyz|tool|share/.test(haystack)) return "Tooling"
  return "Full-Stack"
}

const defaultTags = (repo: GithubRepoRecord) => {
  const parts = [
    repo.primary_language ?? "",
    inferCategory(repo),
    ...repo.name.split(/[-_]/g),
    ...repo.structure_tree.slice(0, 3).map((entry) => entry.replace(/[^\w\s]/g, " ").trim()),
  ]

  return Array.from(new Set(parts.filter(Boolean))).slice(0, 6)
}

const repoProjects: ProjectShowcaseItem[] = githubRecords
  .filter((repo) => !hiddenRepos.has(repo.name))
  .map((repo, index) => {
    const override = repoOverrides[repo.name]
    const accent = accents[index % accents.length]
    const fallbackName = override?.displayName ?? titleize(repo.name)
    const description =
      override?.description ??
      cleanText(repo.description) ??
      readmeSnippet(repo.readme_raw) ??
      "Project details available on request."
    const category = override?.category ?? inferCategory(repo)
    const isPrivate = repo.visibility === "Private"
    const stack = override?.stack ?? [repo.primary_language ?? "Software Engineering", category, isPrivate ? "Private Build" : "Public Repo"]

    return {
      name: fallbackName,
      subtitle: override?.subtitle ?? `${category} project`,
      description: description || "Project details available on request.",
      visibility: isPrivate ? "Private Repository" : "Public Repository",
      stack,
      href: isPrivate
        ? `mailto:piyushutkarxb@gmail.com?subject=${encodeURIComponent(`Request walkthrough - ${fallbackName}`)}`
        : repo.url,
      ctaLabel: isPrivate ? "Request walkthrough" : "Open repository",
      accent,
      image: override?.image ?? "",
      year: new Date(repo.last_updated).getFullYear().toString(),
      source: "GitHub",
      category,
      tags: override?.tags ?? defaultTags(repo),
      spotlight: override?.spotlight ?? false,
    }
  })

export const allProjects = [...clientProjectEntries, ...repoProjects].sort((left, right) => Number(right.year) - Number(left.year))

export const featuredProjects = allProjects.filter((project) => project.spotlight).slice(0, 6)

const successfulJobs = jobRecords.filter((job) => {
  const title = job["Job Title"].toLowerCase()
  const comment = job["Client Feedback Comment"].toLowerCase()
  return (
    !title.includes("keplr wallet") &&
    !comment.includes("warning!") &&
    job["Client Feedback Score"] !== "1" &&
    job["Freelancer Feedback Score"] !== "1"
  )
})

const formatMonth = (value: string) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(value))

const jobPeriod = (job: JobExportRecord) => `${formatMonth(job["Start Date"])} → ${formatMonth(job["End Date"])}`

export const profile = {
  name: profileRecord["Full Name"],
  title: "Full-Stack, Web3 & Automation Engineer",
  location: `${profileRecord.City}, ${profileRecord.Country}`,
  hero: "I turn sharp technical ideas into products that feel fast, clear, and hard to ignore.",
  summary:
    "I build the parts that usually get split across three different engineers: smart contract logic, automation-heavy backends, and polished interfaces that make serious systems feel usable. This portfolio pulls from real exports and real repositories so the signal lands quickly.",
  github: publicProfileUrl,
  upwork: profileRecord["Profile URL"],
  email: "piyushutkarxb@gmail.com",
  linkedin: "https://www.linkedin.com/in/piyush-utkar-0489b12b2",
  calendly: "https://calendly.com/404piyush",
  highlights: [
    "Comfortable building where protocols, product UX, automation, and backend systems collide.",
    "Portfolio range now spans public repos, private builds, and verified client deliveries across Web3, bots, and systems engineering.",
    "Based in Mumbai and fully comfortable shipping independently, iterating fast, and communicating clearly with global clients.",
  ],
}

export const credibilityStats = [
  { value: profileRecord["Total Jobs Worked"], label: "completed client jobs", tone: "bg-deepSkyBlue" },
  { value: profileRecord["Portfolio Items Count"], label: "portfolio items listed", tone: "bg-lavender" },
  { value: new Date(profileRecord["Member Since"]).getFullYear().toString(), label: "member since", tone: "bg-aquamarine" },
  { value: profileRecord["Hire Again Percentage"], label: "hire again signal", tone: "bg-deepPink" },
]

export const introCards = [
  {
    title: "Background",
    body: "Computer Engineering track at Rajiv Gandhi Institute of Technology, with enough technical range to move from low-level thinking to product-facing delivery without losing the thread.",
    color: "bg-bananaCream",
  },
  {
    title: "Core Stack",
    body: cleanText(profileRecord.Skills)
      .split(",")
      .slice(0, 8)
      .join(", "),
    color: "bg-aquamarine",
  },
  {
    title: "Communication",
    body: `${profileRecord["English Level"]} English and ${profileRecord["Other Languages"]}. Strong fit for fast-moving global client communication.`,
    color: "bg-deepSkyBlue",
  },
]

export const focusAreas = [
  {
    title: "Web3 delivery with real context",
    body: "TRON, token swaps, NFT minting, wallet flows, DAO tooling, and backend logic for blockchain-adjacent products.",
    tone: "bg-bananaCream",
  },
  {
    title: "Bots that do actual work",
    body: "Discord verification, community automation, voice + LLM integrations, workshop bots, and utility-driven operational tooling.",
    tone: "bg-aquamarine",
  },
  {
    title: "Systems and full-stack execution",
    body: "Observability platforms, classroom monitoring, dashboards, queue-driven pipelines, and polished frontend delivery.",
    tone: "bg-deepSkyBlue",
  },
  {
    title: "Private builds worth mentioning",
    body: "Case management, finance, mobile, trading, and search products now show up as visible portfolio categories instead of hidden work.",
    tone: "bg-lavender",
  },
]

export const projectSearchHints = ["web3", "discord", "systems", "private", "typescript", "python"]

export const clientSignals = [
  {
    quote: "Great developer with deep knowledge about Discord and creating Discord bots. Highly recommend.",
    source: "Discord Bot Developer for Email Verification and Role Management",
    tone: "bg-aquamarine",
  },
  {
    quote: "Awesome communication and work. Super recommended.",
    source: "Migrate Tg bot to discord bot",
    tone: "bg-bananaCream",
  },
  {
    quote: "The site is intentionally built around verified exports and repo evidence, not vague claims.",
    source: "Portfolio direction",
    tone: "bg-lavender",
  },
]

export const upworkWins = successfulJobs.slice(0, 5).map((job, index) => ({
  title: job["Job Title"],
  meta: `Client engagement • ${jobPeriod(job)}`,
  detail: cleanText(job.Skills)
    .split(",")
    .slice(0, 5)
    .join(" • "),
  tone: accents[index % accents.length],
}))

export const experienceTimeline = [
  {
    title: "Smart contract and wallet flows",
    period: "2025 → 2026",
    detail:
      "Token swap implementation, TRON transfer architecture, wallet-facing work, and Web3 support projects show repeated blockchain delivery instead of a one-off demo.",
    tone: "bg-bananaCream",
  },
  {
    title: "Discord and automation systems",
    period: "2025 → 2026",
    detail:
      "Verification bots, role automation, voice + LLM integrations, community tooling, and service-style bot products form a consistent second lane of work.",
    tone: "bg-aquamarine",
  },
  {
    title: "Full-stack and monitoring products",
    period: "2025 → 2026",
    detail:
      "Case management, personal finance, observability tooling, classroom monitoring, and search products round out the product engineering side.",
    tone: "bg-deepSkyBlue",
  },
]

export const web3Badges = ["TRON", "Arbitrum", "Solidity", "Token Swaps", "Wallet Flows", "DeFi UX", "DAO Tooling", "Solana cNFT"]

export const vaultEntries = [
  {
    title: "TRON delivery history",
    text: "Your files confirm both public Web3 delivery and private repo work around transfer flows, smart contracts, and client-facing DApp implementation.",
    tone: "bg-bananaCream",
  },
  {
    title: "Arbitrum and execution systems",
    text: "The portfolio now frames Arbitrum work beside backend, trading, and observability projects so clients can see the systems angle, not just chain buzzwords.",
    tone: "bg-lavender",
  },
  {
    title: "Portfolio without dead ends",
    text: "Relevant Web3 experience, previous project work, and contact paths now sit together on one page so a client can decide quickly instead of clicking around.",
    tone: "bg-aquamarine",
  },
]

export const web3Experience = [
  {
    title: "TRON USDT Proxy delivery",
    meta: "Client work • public brief available",
    detail: "TRON, Solidity, blockchain architecture, and transfer-focused smart contract execution.",
  },
  {
    title: "Token swap implementation",
    meta: "Client work • Web3 + API integration",
    detail: "Swap-oriented JavaScript delivery backed by API integration and practical client requirements.",
  },
  {
    title: "Arbitrum backend development",
    meta: "Private build • systems context",
    detail: "Backend-oriented work aligned with low-latency thinking and blockchain-connected infrastructure.",
  },
  {
    title: "FriendlyMinter + DeFi Token Swap DApp",
    meta: "Portfolio projects • public repositories",
    detail: "cNFT minting, wallet flows, swap UX, and smart contract product delivery from your GitHub snapshot.",
  },
]

export const web3Projects = allProjects.filter((project) => project.category === "Web3" || project.tags.some((tag) => /wallet|token|swap|dao|tron|arbitrum|solidity|solana/i.test(tag)))

export const workProjects = allProjects
