export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: "Web3 & Smart Contracts",
    items: [
      "Solidity · Hardhat · Foundry",
      "OpenZeppelin · proxy patterns · ERC-20/721",
      "OP Stack · OptimismPortal · L2ToL1MessagePasser",
      "Ethers.js · Wagmi · WalletConnect",
      "Solana basics · cNFT compression",
      "TronWeb · TRC-20",
    ],
  },
  {
    title: "Full-Stack & Frontend",
    items: [
      "React 18 · Next.js (App Router) · Vite",
      "TypeScript · Tailwind · shadcn/ui",
      "Node.js · Express · Fastify",
      "FastAPI · Pydantic · SQLAlchemy · Alembic",
      "JWT · OAuth · RBAC",
      "WebSocket · Socket.io · Server-Sent Events",
    ],
  },
  {
    title: "Systems (C & low-level)",
    items: [
      "C11 · POSIX (fork/exec/wait, pipe, dup2, mmap)",
      "x86-64 reading · ASan · valgrind · perf",
      "Custom allocators · memory profiling",
      "Make · GitHub Actions CI",
      "Concurrency primitives · cache-aware code",
      "Algorithms & data structures",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "PostgreSQL · MongoDB · Redis · SQLite",
      "Drizzle ORM · Mongoose · SQLAlchemy",
      "RabbitMQ · aio-pika · BullMQ",
      "Docker · Docker Compose",
      "Render · Vercel · Fly.io",
      "GitHub Actions · CI/CD",
    ],
  },
  {
    title: "Bot Development",
    items: [
      "discord.py · JDA · discord.js",
      "Slash commands · button interactions",
      "Captcha · verification · moderation",
      "Economy systems · game logic",
      "Voice + LLM integrations",
      "Telegram · WhatsApp Business API",
    ],
  },
  {
    title: "Tooling & Workflow",
    items: [
      "Git · GitHub · trunk-based dev",
      "pytest · mypy · ruff · ESLint · Prettier",
      "TypeScript strict mode",
      "macOS · Linux · Docker dev loops",
      "Figma → component handoff",
      "Linear · Notion · Slack · Discord",
    ],
  },
]