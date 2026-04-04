"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const scanFrames = [
  "boot> initializing secure web3 probe...",
  "net> arbitrum: backend route confirmed",
  "net> tron: transfer workflow synchronized",
  "scan> token swap routes indexed",
  "scan> wallet flows + signatures validated",
  "result> systems healthy, portfolio evidence loaded",
]

export function BlockchainTerminal() {
  const [lines, setLines] = useState<string[]>(["terminal> ready"])
  const [running, setRunning] = useState(false)

  const runScan = async () => {
    if (running) return
    setRunning(true)
    setLines(["terminal> scan requested"])
    for (let i = 0; i < scanFrames.length; i += 1) {
      await new Promise((resolve) => setTimeout(resolve, 360))
      setLines((prev) => [...prev, scanFrames[i]])
    }
    setRunning(false)
  }

  const reset = () => {
    if (running) return
    setLines(["terminal> ready"])
  }

  return (
    <div className="rounded-[28px] border-[3px] border-black bg-white p-4 shadow-[8px_8px_0_#000]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-mono text-xs font-black text-black">/scan-chain</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={runScan}
            className="rounded-xl border-[3px] border-black bg-aquamarine px-3 py-1.5 text-xs font-black text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5"
          >
            Scan Blockchain
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border-[3px] border-black bg-bananaCream px-3 py-1.5 text-xs font-black text-black shadow-[3px_3px_0_#000] transition hover:-translate-y-0.5"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="h-52 overflow-hidden rounded-[22px] border-[3px] border-black bg-[#111111] p-3 font-mono text-xs text-aquamarine">
        {lines.map((line, index) => (
          <motion.p
            key={`${line}-${index}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-1"
          >
            {line}
          </motion.p>
        ))}
        {running && <span className="inline-block h-3 w-2 animate-pulse bg-aquamarine align-middle" />}
      </div>
    </div>
  )
}
