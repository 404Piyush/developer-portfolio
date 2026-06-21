"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type SectionRevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "section" | "article"
}

export function SectionReveal({ children, delay = 0, className, as = "div" }: SectionRevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}