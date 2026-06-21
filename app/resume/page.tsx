import type { Metadata } from "next"
import Link from "next/link"
import { Download, Mail } from "lucide-react"
import { MotionReveal } from "@/components/motion-reveal"
import { profile } from "@/data/profile"
import { featuredProjects } from "@/data/projects"
import { freelance, freelanceSummary } from "@/data/freelance"
import { skills } from "@/data/skills"

export const metadata: Metadata = {
  title: "Resume",
  description: `One-page resume for ${profile.name}: ${profile.role} based in ${profile.location}.`,
}

const summary =
  "Self-taught engineer shipping across Web3, full-stack, and systems. From-scratch OP-Stack L2, production Discord and DeFi client work, and a public 3-year C/GPU roadmap with standalone C11 libraries."

export default function ResumePage() {
  return (
    <div className="space-y-10 pb-12 pt-2">
      <MotionReveal>
        <header className="card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-ink-muted">Resume</p>
              <h1 className="mt-2 text-4xl font-black">{profile.name}</h1>
              <p className="mt-1 text-sm font-bold text-ink-soft">{profile.role}</p>
              <p className="mt-1 text-sm text-ink-muted">
                {profile.location} · {profile.email} · {profile.phone}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/resume.pdf" className="btn btn-primary">
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
              <Link href="#contact" className="btn">
                <Mail className="h-4 w-4" />
                Email me
              </Link>
            </div>
          </div>
        </header>
      </MotionReveal>

      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Summary</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{summary}</p>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Selected projects</p>
          <div className="mt-4 space-y-4">
            {featuredProjects.slice(0, 6).map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl border-[3px] border-border bg-bg-muted p-4"
              >
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-black">
                    <Link href={`/work/${project.slug}`} className="hover:underline">
                      {project.name}
                    </Link>{" "}
                    <span className="font-medium text-ink-soft">— {project.tagline}</span>
                  </h3>
                  <span className="font-mono text-xs font-bold text-ink-muted">{project.year}</span>
                </header>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="mt-2 font-mono text-xs text-ink-muted">
                  {project.stack.slice(0, 6).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Recent freelance highlights</p>
          <p className="mt-1 text-xs font-bold text-ink-muted">
            {freelanceSummary.totalJobs} jobs delivered · Member since {freelanceSummary.memberSince} ·
            Average rating {freelanceSummary.averageRating}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {freelance
              .filter((job) => job.rating === 5 || job.publicLink)
              .slice(0, 6)
              .map((job) => (
                <li key={job.title} className="flex flex-wrap items-baseline justify-between gap-2">
                  <span>
                    <strong>{job.title}</strong>
                    <span className="text-ink-muted"> — {job.outcome}</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-ink-muted">
                    {job.period} {job.rating ? `· ★${job.rating}` : ""}
                  </span>
                </li>
              ))}
          </ul>
        </section>
      </MotionReveal>

      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Skills</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black">{group.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </MotionReveal>
    </div>
  )
}