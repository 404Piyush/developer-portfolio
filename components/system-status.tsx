"use client"

import { useEffect, useState } from "react"

function useLocalClock() {
  const [time, setTime] = useState("--:--:--")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    })

    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])

  return time
}

export function SystemStatus() {
  const time = useLocalClock()
  const [ping, setPing] = useState<number | null>(null)

  useEffect(() => {
    setPing(17 + Math.floor(Math.random() * 14))
  }, [])

  return (
    <div className="inline-flex w-full flex-wrap items-center gap-3 rounded-2xl border-[3px] border-black bg-white px-4 py-3 text-xs shadow-[5px_5px_0_#000] sm:w-auto sm:text-sm">
      <span className="inline-flex items-center gap-2 font-black text-black">
        <span className="h-2 w-2 animate-pulse rounded-full bg-aquamarine" />
        System Status: Online
      </span>
      <span className="text-black/40">|</span>
      <span className="font-mono font-bold text-deepSkyBlue">{ping ? `${ping}ms ping` : "--ms ping"}</span>
      <span className="text-black/40">|</span>
      <span className="font-mono font-bold text-deepPink">{time} IST</span>
    </div>
  )
}
