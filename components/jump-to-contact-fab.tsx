"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function JumpToContactFab() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (~700px) and only if the contact
      // section is not yet in view.
      const contactEl = document.getElementById("contact")
      if (!contactEl) return
      const rect = contactEl.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      setShow(window.scrollY > 700 && !inView)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label="Jump to contact section"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border-[3px] border-border bg-deepPink px-5 py-3 text-sm font-black text-ink shadow-[4px_4px_0_0_var(--border)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ink ${
        show ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowDown className="h-4 w-4" />
      Get in touch
    </a>
  )
}