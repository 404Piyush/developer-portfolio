"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type MotionRevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
