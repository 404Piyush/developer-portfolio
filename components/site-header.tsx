"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/web3", label: "Web3" },
  { href: "/work", label: "Work" },
  { href: "/#contact", label: "Get in touch" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#fff8ef]/95 shadow-[0_4px_0_#000] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="rotate-[-3deg] rounded-xl border-[3px] border-black bg-deepPink px-3 py-1 font-mono text-sm font-black text-black shadow-[4px_4px_0_#000]">
            PJU//LAB
          </span>
          <div>
            <p className="font-mono text-sm font-bold text-black">Piyush J. Utkar</p>
            <p className="text-xs font-medium text-black/70">full-stack + web3 + systems</p>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {links.map(({ href, label }) => {
            const active = href === "/#contact" ? pathname === "/" : pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-xl border-[3px] border-black px-4 py-2 text-sm font-black text-black transition ${
                  active
                    ? "rotate-[-2deg] bg-bananaCream shadow-[4px_4px_0_#000]"
                    : "bg-white shadow-[2px_2px_0_#000] hover:-translate-y-0.5 hover:bg-aquamarine"
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
