"use client"

import { ReactNode } from "react"
import { SectionReveal } from "@/components/section-reveal"

type MotionRevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  return (
    <SectionReveal delay={delay} className={className}>
      {children}
    </SectionReveal>
  )
}