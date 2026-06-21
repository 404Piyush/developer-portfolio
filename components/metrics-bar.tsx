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
    <dl className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border-[3px] border-border bg-bg-elevated px-4 py-3 font-mono text-xs shadow-[4px_4px_0_0_var(--border)]">
      <div className="inline-flex items-center gap-2 font-bold">
        <span className="h-2 w-2 animate-pulse rounded-full bg-aquamarine" aria-hidden />
        <span>Status: Online</span>
      </div>
      <div className="flex items-center gap-1.5">
        <dt className="text-ink-muted">Repos</dt>
        <dd className="font-bold">{publicRepos}</dd>
      </div>
      <div className="flex items-center gap-1.5">
        <dt className="text-ink-muted">Client jobs</dt>
        <dd className="font-bold">{totalJobs}</dd>
      </div>
      <div className="flex items-center gap-1.5">
        <dt className="text-ink-muted">Since</dt>
        <dd className="font-bold">{memberSince}</dd>
      </div>
      <div className="flex items-center gap-1.5">
        <dt className="text-ink-muted">Local</dt>
        <dd className="font-bold">{time} IST</dd>
      </div>
    </dl>
  )
}