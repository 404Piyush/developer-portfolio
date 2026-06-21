"use client"

import { useEffect, useState } from "react"

function useLocalClock(timeZone: string) {
  const [time, setTime] = useState("--:--")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    })
    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = window.setInterval(update, 30_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

type MetricsBarProps = {
  publicRepos: number
  totalJobs: number
  memberSince: string
}

export function MetricsBar({ publicRepos, totalJobs, memberSince }: MetricsBarProps) {
  const time = useLocalClock("Asia/Kolkata")
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 font-mono text-xs shadow-[4px_4px_0_0_var(--border)]">
      <span className="inline-flex items-center gap-2 font-bold">
        <span className="h-2 w-2 animate-pulse rounded-full bg-aquamarine" />
        Status: Online
      </span>
      <span className="text-ink-muted">·</span>
      <span>
        <strong className="font-bold">{publicRepos}</strong>{" "}
        <span className="text-ink-muted">public repos</span>
      </span>
      <span className="text-ink-muted">·</span>
      <span>
        <strong className="font-bold">{totalJobs}</strong>{" "}
        <span className="text-ink-muted">client jobs delivered</span>
      </span>
      <span className="text-ink-muted">·</span>
      <span className="text-ink-muted">since</span>{" "}
      <span className="font-bold">{memberSince}</span>
      <span className="text-ink-muted">·</span>
      <span className="font-bold">{time} IST</span>
    </div>
  )
}