import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { MotionReveal } from "@/components/motion-reveal"
import { projectBySlug, projects } from "@/data/projects"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const project = projectBySlug(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = projectBySlug(slug)
  if (!project) notFound()

  const accent =
    project.accent === "deepSkyBlue"
      ? "bg-deepSkyBlue"
      : project.accent === "aquamarine"
        ? "bg-aquamarine"
        : project.accent === "deepPink"
          ? "bg-deepPink"
          : project.accent === "lavender"
            ? "bg-lavender"
            : "bg-bananaCream"

  return (
    <article className="space-y-10 pb-12 pt-2">
      <MotionReveal>
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to all projects
        </Link>
      </MotionReveal>

      <MotionReveal>
        <header className={`card overflow-hidden`}>
          <div className={`${accent} border-b-[3px] border-border px-6 py-8 sm:px-10`}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag bg-bg-elevated">{project.category}</span>
              <span className="tag bg-bg-elevated">{project.visibility}</span>
              <span className="font-mono text-xs font-bold text-ink">{project.year}</span>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{project.name}</h1>
            <p className="mt-3 max-w-3xl text-base font-medium text-ink">{project.tagline}</p>
          </div>
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-base leading-relaxed text-ink-soft">{project.description}</p>

              <h2 className="mt-8 text-sm font-black uppercase tracking-wide">Highlights</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 rounded-2xl border-[3px] border-border bg-bg-muted p-3 font-medium">
                    <span className="mt-0.5 font-black text-deepPink">★</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-5">
              <div className="card-flat bg-bg-muted p-5">
                <p className="eyebrow text-ink-muted">Role</p>
                <p className="mt-1 text-sm font-bold">{project.role}</p>
              </div>
              <div className="card-flat bg-bg-muted p-5">
                <p className="eyebrow text-ink-muted">Stack</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li key={item} className="tag bg-bg-elevated">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-flat bg-bg-muted p-5">
                <p className="eyebrow text-ink-muted">Links</p>
                <ul className="mt-2 space-y-2 text-sm font-bold">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </header>
      </MotionReveal>
    </article>
  )
}