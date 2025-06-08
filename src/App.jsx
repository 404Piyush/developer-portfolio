import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Quick loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="text-center">
        <motion.div
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ 
            scale: 1,
            opacity: 1,
            y: -100,
            x: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Piyush Utkar
        </motion.div>
        <motion.div
          className="w-32 h-1 bg-blue-500 rounded-full mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Navigation */}
            <Header />

            {/* Page Sections with subtle entrance animations */}
            <main>
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Hero />
              </motion.section>

              <About />

              <Skills />

              <Projects />

              <Contact />
            </main>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Footer />
            </motion.div>

            {/* Scroll to Top */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App 