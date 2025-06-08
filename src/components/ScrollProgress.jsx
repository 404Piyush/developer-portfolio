import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/30 dark:bg-gray-700/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
      
      {/* Glowing effect */}
      <motion.div
        className="absolute top-0 h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 origin-left blur-sm opacity-50"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  )
}

export default ScrollProgress 