export type WritingPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
}

export const writingPosts: WritingPost[] = [
  {
    slug: "building-veltrix-l2",
    title: "Building Veltrix L2: From Chain Spec to Working Bridge",
    excerpt:
      "How I stood up a working OP-Stack rollup, including the genesis config, bridge UI, and the withdrawal lifecycle from initiate to finalize.",
    date: "2026-04-12",
    readingTime: "9 min",
    tags: ["Web3", "OP Stack", "Solidity"],
  },
  {
    slug: "patterns-discord-bots-that-survive",
    title: "Patterns for Discord Bots That Survive Real Communities",
    excerpt:
      "Six patterns I've learned shipping production Discord bots for paying clients: verification, moderation, economy, and the failure modes nobody warns you about.",
    date: "2026-02-21",
    readingTime: "7 min",
    tags: ["Bots", "Python", "discord.py"],
  },
  {
    slug: "writing-c-from-scratch",
    title: "Writing C From Scratch: What Three Months in a Public Curriculum Teaches You",
    excerpt:
      "Notes from the first three months of my gpu-engineering curriculum: what worked, what I would cut, and how the discipline translates to systems work elsewhere.",
    date: "2025-12-30",
    readingTime: "11 min",
    tags: ["Systems", "C", "Learning"],
  },
]