"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { useMemo, useState } from "react"
import { ProjectCard } from "@/components/project-card"
import type { ProjectShowcaseItem } from "@/data/portfolio"

type ProjectBrowserProps = {
  projects: ProjectShowcaseItem[]
  hints?: string[]
  defaultCategory?: string
  defaultSource?: string
}

export function ProjectBrowser({
  projects,
  hints = [],
  defaultCategory = "All",
  defaultSource = "All",
}: ProjectBrowserProps) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [activeSource, setActiveSource] = useState(defaultSource)

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  )

  const sources = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.source)))],
    [projects]
  )

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesSource = activeSource === "All" || project.source === activeSource
      const haystack = [project.name, project.subtitle, project.description, project.visibility, project.source, project.category, ...project.stack, ...project.tags]
        .join(" ")
        .toLowerCase()
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery)

      return matchesCategory && matchesSource && matchesQuery
    })
  }, [activeCategory, activeSource, projects, query])

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border-[3px] border-black bg-white p-5 shadow-[8px_8px_0_#000]">
        <div className="flex flex-col gap-4">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/55" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by project name, stack, category, or keyword"
              className="w-full rounded-[22px] border-[3px] border-black bg-[#fff8ef] py-3 pl-12 pr-4 text-sm font-bold text-black outline-none transition focus:-translate-y-0.5 focus:bg-white"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            {hints.map((hint) => (
              <button
                key={hint}
                type="button"
                onClick={() => setQuery(hint)}
                className="rounded-xl border-[3px] border-black bg-bananaCream px-3 py-1.5 text-xs font-black uppercase tracking-wide text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5"
              >
                {hint}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = activeCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-xl border-[3px] border-black px-3 py-2 text-xs font-black uppercase tracking-wide text-black transition ${
                      active ? "bg-deepSkyBlue shadow-[4px_4px_0_#000]" : "bg-white shadow-[2px_2px_0_#000] hover:bg-aquamarine"
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {sources.map((source) => {
                const active = activeSource === source

                return (
                  <button
                    key={source}
                    type="button"
                    onClick={() => setActiveSource(source)}
                    className={`rounded-xl border-[3px] border-black px-3 py-2 text-xs font-black uppercase tracking-wide text-black transition ${
                      active ? "bg-deepPink shadow-[4px_4px_0_#000]" : "bg-white shadow-[2px_2px_0_#000] hover:bg-lavender"
                    }`}
                  >
                    {source}
                  </button>
                )
              })}
            </div>
          </div>

          <p className="font-mono text-xs font-black uppercase tracking-wide text-black/60">
            {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"} surfaced instantly
          </p>
        </div>
      </div>

      <motion.div layout className="grid gap-5 xl:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={`${project.source}-${project.name}`}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -18 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-[28px] border-[3px] border-black bg-lavender p-6 text-sm font-bold text-black shadow-[6px_6px_0_#000]">
          No exact match yet. Try another keyword like web3, discord, private, systems, or typescript.
        </div>
      ) : null}
    </div>
  )
}
