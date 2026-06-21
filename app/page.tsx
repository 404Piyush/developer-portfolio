import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { CvPicker } from "@/components/cv-picker"
import { GetInTouch } from "@/components/get-in-touch"
import { JumpToContactFab } from "@/components/jump-to-contact-fab"
import { MetricsBar } from "@/components/metrics-bar"
import { MotionReveal } from "@/components/motion-reveal"
import { ProjectCard } from "@/components/project-card"
import { profile } from "@/data/profile"
import { featuredProjects } from "@/data/projects"
import { freelance, freelanceSummary } from "@/data/freelance"
import { skills } from "@/data/skills"

export default function HomePage() {
  const publicRepos = featuredProjects.filter((p) => p.visibility === "Public").length

  return (
    <div className="space-y-20 pb-16 pt-2">
      {/* HERO */}
      <MotionReveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="card relative overflow-hidden bg-bananaCream p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-2xl border-[3px] border-border bg-lavender px-3 py-1 font-mono text-xs font-black text-ink">
              {profile.role}
            </span>
            <span className="rounded-2xl border-[3px] border-border bg-bg-elevated px-3 py-1 text-xs font-black text-ink">
              {profile.location}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
            Self-taught engineer shipping across Web3, full-stack, and systems.
          </h1>

          <ul className="mt-4 flex flex-wrap items-center gap-2" aria-label="Specialties">
            {[
              { label: "Web3", tone: "bg-deepPink" },
              { label: "Full-stack", tone: "bg-deepSkyBlue" },
              { label: "Systems (C)", tone: "bg-aquamarine" },
              { label: "Discord bots", tone: "bg-bananaCream" },
            ].map((item) => (
              <li
                key={item.label}
                className={`rounded-xl border-[3px] border-border px-3 py-1 font-mono text-xs font-black text-ink ${item.tone}`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work" className="btn btn-primary">
              View selected work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </div>

          <div className="mt-5">
            <p className="eyebrow text-ink-muted">Resume — pick the lane</p>
            <div className="mt-3">
              <CvPicker cvs={profile.cvs} primaryHref={profile.resume.href} primaryLabel={profile.resume.label} />
            </div>
          </div>

          <div className="mt-6">
            <MetricsBar
              publicRepos={publicRepos + 12}
              totalJobs={freelanceSummary.totalJobs}
              memberSince={freelanceSummary.memberSince}
            />
          </div>
        </section>

        <aside className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">What I am building right now</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-2xl border-[3px] border-border bg-bg-muted p-3 font-bold">
              <span className="text-deepPink">→</span> Hardening Veltrix L2 devnet, expanding the explorer.
            </li>
            <li className="rounded-2xl border-[3px] border-border bg-bg-muted p-3 font-bold">
              <span className="text-deepSkyBlue">→</span> Continuing the gpu-engineering curriculum — profiling and concurrency.
            </li>
            <li className="rounded-2xl border-[3px] border-border bg-bg-muted p-3 font-bold">
              <span className="text-aquamarine">→</span> Selected freelance work on Discord bots and full-stack SaaS.
            </li>
          </ul>
          <div className="mt-5 border-t-[3px] border-border pt-4">
            <p className="eyebrow text-ink-muted">Currently reading</p>
            <p className="mt-2 text-sm font-bold">Computer Systems: A Programmer&rsquo;s Perspective</p>
          </div>
        </aside>
      </MotionReveal>

      {/* HIGHLIGHTS */}
      <MotionReveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.highlights.map((highlight, index) => (
            <li
              key={highlight}
              className={`card-flat p-4 text-sm font-bold leading-relaxed text-ink ${
                index % 4 === 0
                  ? "bg-deepSkyBlue"
                  : index % 4 === 1
                    ? "bg-aquamarine"
                    : index % 4 === 2
                      ? "bg-bananaCream"
                      : "bg-lavender"
              }`}
            >
              {highlight}
            </li>
          ))}
        </ul>
      </MotionReveal>

      {/* WHAT I BUILD */}
      <MotionReveal>
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-muted">What I build</p>
            <h2 className="mt-1 text-3xl font-black">Three lanes, one standard.</h2>
          </div>
          <Link href="/work" className="hidden text-sm font-bold underline-offset-4 hover:underline sm:inline">
            See all projects →
          </Link>
        </header>
        <div className="grid gap-4 lg:grid-cols-3">
          <LaneCard
            title="Web3"
            accent="bg-deepPink"
            description="OP-Stack L2s, smart contracts, AMMs, bridges, Solana cNFT minting, multi-chain swap tooling."
            bullets={["Solidity + Foundry", "OP Stack / Arbitrum / Tron", "React + ethers frontends"]}
            href="/web3"
          />
          <LaneCard
            title="Full-Stack"
            accent="bg-deepSkyBlue"
            description="Async APIs, real-time control planes, observability platforms, role-based SaaS, production deploys."
            bullets={["FastAPI + Next.js 15", "RabbitMQ + Postgres", "Render + Vercel + Docker"]}
            href="/work?category=Full-Stack"
          />
          <LaneCard
            title="Systems (C)"
            accent="bg-aquamarine"
            description="Public 3-year C/GPU roadmap. Custom allocators, POSIX tooling, microbenchmarks, and CI on Linux + macOS."
            bullets={["C11 + POSIX", "273 passing assertions", "Public curriculum"]}
            href="/work?category=Systems"
          />
        </div>
      </MotionReveal>

      {/* SELECTED WORK */}
      <MotionReveal>
        <header className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-muted">Selected work</p>
            <h2 className="mt-1 text-3xl font-black">Six case studies with proof.</h2>
          </div>
          <Link href="/work" className="text-sm font-bold underline-offset-4 hover:underline">
            Full project browser →
          </Link>
        </header>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </MotionReveal>

      {/* RECENT FREELANCE */}
      <MotionReveal>
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow text-ink-muted">Recent freelance</p>
            <h2 className="mt-1 text-3xl font-black">{freelanceSummary.totalJobs}+ delivered client jobs.</h2>
          </div>
          <p className="font-mono text-xs font-bold text-ink-muted">
            Average rating {freelanceSummary.averageRating} · Member since {freelanceSummary.memberSince}
          </p>
        </header>
        <div className="grid gap-4 lg:grid-cols-2">
          {freelance
            .filter((job) => job.rating === 5)
            .slice(0, 4)
            .map((job, index) => (
              <article
                key={job.title}
                className={`card p-5 ${index % 2 === 0 ? "bg-bananaCream" : "bg-aquamarine"}`}
              >
                <header className="flex flex-wrap items-center justify-between gap-2">
                  <span className="tag bg-bg-elevated">{job.category}</span>
                  <span className="font-mono text-xs font-bold text-ink">{job.period}</span>
                </header>
                <h3 className="mt-3 text-lg font-black text-ink">{job.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{job.outcome}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((item) => (
                    <span key={item} className="tag bg-bg-elevated">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
        </div>
        <div className="mt-4 text-right">
          <Link href="/work?category=Bots" className="text-sm font-bold underline-offset-4 hover:underline">
            See more on the Work page →
          </Link>
        </div>
      </MotionReveal>

      {/* SKILLS */}
      <MotionReveal>
        <header className="mb-6">
          <p className="eyebrow text-ink-muted">Skills</p>
          <h2 className="mt-1 text-3xl font-black">What I work with daily.</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className={`card p-5 ${index % 2 === 0 ? "bg-bg-elevated" : "bg-bg-muted"}`}
            >
              <h3 className="text-sm font-black uppercase tracking-wide">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="tag bg-bg-elevated">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </MotionReveal>

      {/* CONTACT */}
      <MotionReveal>
        <GetInTouch />
      </MotionReveal>

      {/* JUMP-TO-CONTACT FAB */}
      <JumpToContactFab />
    </div>
  )
}

function LaneCard({
  title,
  description,
  bullets,
  href,
  accent,
}: {
  title: string
  description: string
  bullets: string[]
  href: string
  accent: string
}) {
  return (
    <article className="card p-6">
      <span
        className={`inline-block rounded-xl border-[3px] border-border px-3 py-1 font-mono text-xs font-black text-ink ${accent}`}
      >
        {title}
      </span>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{description}</p>
      <ul className="mt-4 space-y-2 text-sm font-bold">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="text-ink-muted">→</span>
            {bullet}
          </li>
        ))}
      </ul>
      <Link href={href} className="mt-5 inline-flex text-sm font-bold underline-offset-4 hover:underline">
        Browse {title} work →
      </Link>
    </article>
  )
}