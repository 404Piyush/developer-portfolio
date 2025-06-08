import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/404Piyush', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/piyush-utkar-0489b12b2/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:piyushutkar@outlook.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Piyush Utkar
              </motion.h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Full-stack developer passionate about creating innovative web solutions, 
                Discord integrations, and managing successful digital projects.
              </p>
              <motion.button
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors duration-200"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Top ↑
              </motion.button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-flex items-center"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <p className="text-gray-300 mb-4">
                Ready to start your next project? Let's make something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 4px 8px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                © {currentYear} Piyush Utkar. Made with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-1"
                >
                  <FaHeart className="text-red-500" />
                </motion.span>
                and 
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="mx-1"
                >
                  <FaCode className="text-blue-400" />
                </motion.span>
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <span>Built with React & Vite</span>
                <span>•</span>
                <span>Designed with Tailwind CSS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 