"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "pjulab-theme"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "dark" || saved === "light") {
      setTheme(saved)
      document.documentElement.dataset.theme = saved
    }
    // Otherwise: leave the site in its default light theme.
    // Do not auto-detect the OS preference — the cream/yellow palette is
    // intentional and should not flip to dark behind the user's back.
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="rounded-xl border-[3px] border-border bg-bg-elevated px-3 py-2 text-sm font-bold shadow-[3px_3px_0_0_var(--border)] transition hover:-translate-y-0.5"
    >
      {mounted ? (theme === "dark" ? "Light" : "Dark") : "Theme"}
    </button>
  )
}