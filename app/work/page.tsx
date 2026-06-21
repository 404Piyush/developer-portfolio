import type { Metadata } from "next"
import Link from "next/link"
import { MotionReveal } from "@/components/motion-reveal"
import { ProjectBrowser } from "@/components/project-browser"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Work — full project browser",
  description:
    "Full project catalog from Piyush Utkar: Web3, full-stack, systems, and bots. Search and filter by category, visibility, and keyword.",
}

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-12 pt-2">
      <MotionReveal>
        <section className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-muted">Work</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.05] sm:text-5xl">
            Every project worth showing, in one place.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
            Search by stack, category, or keyword. Public repositories open directly; private builds turn
            into walkthrough requests, so no card is a dead end.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/cv/fullstack-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download Full-Stack CV (PDF)
            </a>
            <Link href="/resume" className="btn">
              All CVs
            </Link>
          </div>
        </section>
      </MotionReveal>

      <MotionReveal>
        <ProjectBrowser projects={projects} />
      </MotionReveal>
    </div>
  )
}