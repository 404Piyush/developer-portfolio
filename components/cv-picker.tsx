import { Download } from "lucide-react"
import type { Cv } from "@/data/profile"

type CvPickerProps = {
  cvs: Cv[]
  primaryLabel?: string
  primaryHref?: string
  variant?: "inline" | "stacked"
}

export function CvPicker({ cvs, primaryLabel, primaryHref, variant = "inline" }: CvPickerProps) {
  const items = primaryHref
    ? [{ label: primaryLabel ?? "Download", description: "One-page summary", href: primaryHref, accent: "bg-bananaCream" }, ...cvs]
    : cvs

  if (variant === "stacked") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((cv) => (
          <li key={cv.href}>
            <a
              href={cv.href}
              target="_blank"
              rel="noreferrer"
              className={`card-flat ${cv.accent} flex items-center justify-between gap-3 p-4 transition hover:-translate-y-0.5`}
            >
              <div>
                <p className="text-sm font-black">{cv.label}</p>
                <p className="mt-1 text-xs font-medium text-ink-soft">{cv.description}</p>
              </div>
              <Download className="h-4 w-4 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="flex flex-wrap items-center gap-2">
      {items.map((cv) => (
        <li key={cv.href}>
          <a
            href={cv.href}
            target="_blank"
            rel="noreferrer"
            className={`btn ${cv.accent}`}
            aria-label={`Download ${cv.label} CV`}
          >
            <Download className="h-4 w-4" />
            {cv.label}
          </a>
        </li>
      ))}
    </ul>
  )
}