import Link from "next/link"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  size?: "default" | "compact"
}

const accentBg: Record<string, string> = {
  deepSkyBlue: "bg-deepSkyBlue",
  aquamarine: "bg-aquamarine",
  deepPink: "bg-deepPink",
  bananaCream: "bg-bananaCream",
  lavender: "bg-lavender",
}

export function ProjectCard({ project, size = "default" }: ProjectCardProps) {
  const accent = accentBg[project.accent] ?? "bg-bananaCream"

  return (
    <article className="card group flex flex-col">
      <header className={`flex flex-wrap items-center justify-between gap-2 rounded-t-[25px] border-b-[3px] border-border ${accent} px-5 py-3`}>
        <span className="tag bg-bg-elevated">{project.visibility}</span>
        <span className="font-mono text-xs font-bold text-ink">{project.year}</span>
      </header>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag bg-bg-elevated">{project.category}</span>
          <span className="tag bg-bg-muted">Solo build</span>
        </div>

        <h3 className="mt-3 text-2xl font-black text-ink">
          <Link href={`/work/${project.slug}`} className="hover:underline">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, size === "compact" ? 4 : 6).map((item) => (
            <span key={item} className="tag bg-bg-muted">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <Link href={`/work/${project.slug}`} className="btn btn-primary">
            Read case study →
          </Link>
          {project.links[0] ? (
            <a
              href={project.links[0].href}
              target={project.links[0].href.startsWith("http") ? "_blank" : undefined}
              rel={project.links[0].href.startsWith("http") ? "noreferrer" : undefined}
              className="text-xs font-bold text-ink-muted underline-offset-2 hover:underline"
            >
              {project.links[0].label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}