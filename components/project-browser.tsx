"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/data/projects"

type ProjectBrowserProps = {
  projects: Project[]
  defaultCategory?: string
  hints?: string[]
}

export function ProjectBrowser({
  projects,
  defaultCategory = "All",
  hints = ["web3", "full-stack", "systems", "bots", "trading"],
}: ProjectBrowserProps) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [activeVisibility, setActiveVisibility] = useState<"All" | "Public" | "Private">("All")

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesVisibility = activeVisibility === "All" || project.visibility === activeVisibility
      if (!matchesCategory || !matchesVisibility) return false
      if (!q) return true
      const haystack = [
        project.name,
        project.tagline,
        project.description,
        project.category,
        project.role,
        ...project.stack,
        ...project.highlights,
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [projects, query, activeCategory, activeVisibility])

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, stack, or keywords"
            aria-label="Search projects"
            className="w-full rounded-2xl border-[3px] border-border bg-bg-muted py-3 pl-12 pr-4 text-sm font-bold text-ink outline-none focus:bg-bg-elevated"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {hints.map((hint) => (
            <button
              key={hint}
              type="button"
              onClick={() => setQuery(hint)}
              className="rounded-xl border-[2px] border-border bg-bg-elevated px-3 py-1 text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-bananaCream"
            >
              {hint}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`rounded-xl border-[2px] border-border px-3 py-1.5 text-xs font-bold transition ${
                    active ? "bg-deepSkyBlue shadow-[3px_3px_0_0_var(--border)]" : "bg-bg-elevated"
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", "Public", "Private"] as const).map((visibility) => {
              const active = activeVisibility === visibility
              return (
                <button
                  key={visibility}
                  type="button"
                  onClick={() => setActiveVisibility(visibility)}
                  aria-pressed={active}
                  className={`rounded-xl border-[2px] border-border px-3 py-1.5 text-xs font-bold transition ${
                    active ? "bg-deepPink shadow-[3px_3px_0_0_var(--border)]" : "bg-bg-elevated"
                  }`}
                >
                  {visibility}
                </button>
              )
            })}
          </div>
        </div>

        <p className="mt-4 font-mono text-xs font-bold text-ink-muted">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"} matching your filters
        </p>
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ProjectCard project={project} size="compact" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="card p-6 text-sm font-bold text-ink-soft">
          No matches yet. Try a different keyword or clear the filters.
        </div>
      ) : null}
    </div>
  )
}