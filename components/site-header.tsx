"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { profile } from "@/data/profile"

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/web3", label: "Web3" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="rounded-xl border-[3px] border-border bg-deepPink px-3 py-1 font-mono text-sm font-black text-black shadow-[3px_3px_0_0_var(--border)]">
            {profile.initials}{"//"}LAB
          </span>
          <div className="leading-tight">
            <p className="font-mono text-sm font-bold">{profile.shortName}</p>
            <p className="text-xs text-ink-muted">{profile.location}</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl border-[3px] border-border px-3 py-1.5 text-xs font-bold transition ${
                  active
                    ? "bg-bananaCream shadow-[3px_3px_0_0_var(--border)]"
                    : "bg-bg-elevated shadow-[2px_2px_0_0_var(--border)] hover:-translate-y-0.5"
                }`}
              >
                {label}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}