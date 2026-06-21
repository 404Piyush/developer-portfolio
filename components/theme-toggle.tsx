"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "pjulab-theme"

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

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

  const label = !mounted ? "Theme" : theme === "dark" ? "Light" : "Dark"
  const Icon = !mounted ? SunIcon : theme === "dark" ? SunIcon : MoonIcon

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex items-center gap-2 rounded-xl border-[3px] border-border bg-bg-elevated px-3 py-2 text-sm font-bold shadow-[3px_3px_0_0_var(--border)] transition hover:-translate-y-0.5"
    >
      <Icon />
      <span>{label}</span>
    </button>
  )
}