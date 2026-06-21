import type { Metadata } from "next"
import Link from "next/link"
import { MotionReveal } from "@/components/motion-reveal"
import { ProjectCard } from "@/components/project-card"
import { GetInTouch } from "@/components/get-in-touch"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Web3 work — Solidity, OP Stack, multi-chain",
  description:
    "Web3 delivery from Piyush Utkar: OP-Stack L2, Solidity smart contracts, AMMs, bridges, Solana cNFT, and multi-chain swap tooling.",
}

const web3Badges = [
  "Solidity",
  "Foundry",
  "Hardhat",
  "OP Stack",
  "Ethers.js",
  "Wagmi",
  "WalletConnect",
  "Solana",
  "Tron",
  "OpenZeppelin",
  "Mayan.Finance",
  "DFNS",
]

const caseStudies = [
  {
    title: "OP-Stack rollup, end to end",
    body:
      "Built a working L2 with bridge, explorer, and faucet. Designed the chain spec, deployed the genesis state, and wired the user-facing bridge through OptimismPortal and L2ToL1MessagePasser.",
    primary: true,
  },
  {
    title: "AMM with on-chain history",
    body:
      "Custom constant-product AMM on Sepolia with fee-on-transfer token. The UI indexes user swap history directly from on-chain Swap events.",
  },
  {
    title: "Cross-chain swap-and-forward",
    body:
      "Node.js service that detects deposits, fetches quotes from Mayan.Finance, signs and broadcasts through DFNS custody, and forwards USDC to Request.Finance. Ethereum, Solana, and BSC → Ethereum supported.",
  },
  {
    title: "Operator-controlled casino wallet",
    body:
      "Web3 casino platform with signed-payload verification on all mutating routes and server-side operator checks before any withdrawal.",
  },
  {
    title: "Token analytics SaaS",
    body:
      "FastAPI + React leaderboard for token holders with role classification (Diamond Hands, Gladiator, Trader, Jeet) based on hold-time and sell behavior.",
  },
  {
    title: "Solana cNFT minting",
    body:
      "Next.js + TypeScript minting platform for compressed-NFT campaigns with wallet onboarding and launch-ready product structure.",
  },
]

export default function Web3Page() {
  const web3Projects = projects.filter((project) => project.category === "Web3")

  return (
    <div className="space-y-16 pb-12 pt-2">
      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Web3</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-5xl">
            Smart contracts, L2 infrastructure, and multi-chain delivery.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-soft">
            Production work across the EVM stack and beyond: OP-Stack rollups, AMMs, bridges, wallet flows,
            token analytics, and Solana cNFT minting. The projects below are shipped, in production, or in
            private delivery — every claim links back to a repo or a walkthrough request.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {web3Badges.map((badge, index) => (
              <span
                key={badge}
                className={`rounded-xl border-[3px] border-border px-3 py-1.5 font-mono text-xs font-black ${
                  index % 4 === 0
                    ? "bg-deepPink"
                    : index % 4 === 1
                      ? "bg-deepSkyBlue"
                      : index % 4 === 2
                        ? "bg-aquamarine"
                        : "bg-bananaCream"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/cv/web3-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download Web3 CV (PDF)
            </a>
            <Link href="/resume" className="btn">
              All CVs
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <header className="mb-6">
          <p className="eyebrow text-ink-muted">Case studies</p>
          <h2 className="mt-1 text-3xl font-black">Six lanes, named and verifiable.</h2>
        </header>
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className={`card p-5 ${study.primary ? "bg-bananaCream lg:col-span-2" : "bg-bg-elevated"}`}
            >
              <h3 className="text-lg font-black">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{study.body}</p>
            </article>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal>
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-muted">Web3 portfolio</p>
            <h2 className="mt-1 text-3xl font-black">All Web3 projects.</h2>
          </div>
          <Link href="/work?category=Web3" className="text-sm font-bold underline-offset-4 hover:underline">
            Open in browser →
          </Link>
        </header>
        <div className="grid gap-5 md:grid-cols-2">
          {web3Projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </MotionReveal>

      <MotionReveal>
        <section className="card flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="eyebrow text-ink-muted">Need a Web3 engineer?</p>
            <h2 className="mt-1 text-2xl font-black">
              Send the brief. I will reply within 24 hours.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#contact" className="btn btn-primary">
              Get in touch
            </Link>
            <a href={`mailto:${profile.email}`} className="btn">
              {profile.email}
            </a>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <GetInTouch />
      </MotionReveal>
    </div>
  )
}