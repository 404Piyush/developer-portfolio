import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLaptopCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px -100px 0px'
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const values = [
    {
      icon: FaLaptopCode,
      title: "Technical Excellence",
      description: "Committed to writing clean, efficient code and staying current with the latest technologies and best practices."
    },
    {
      icon: FaUsers,
      title: "Collaborative Spirit",
      description: "Experienced in leading teams and managing cross-functional projects, fostering productive working relationships."
    },
    {
      icon: FaLightbulb,
      title: "Innovation Mindset",
      description: "Always seeking creative solutions to complex problems, from NFT platforms to Discord integrations."
    },
    {
      icon: FaRocket,
      title: "Results-Driven",
      description: "Focused on delivering tangible business value and measurable impact through strategic technical implementations."
    }
  ]

  const funFacts = [
    "🚀 Launched multiple NFT projects that generated significant community engagement",
    "🎮 Built Discord bots used by thousands of community members",
    "📚 Continuously learning new technologies - currently exploring Web3 and blockchain development",
    "☕ Powered by coffee and a passion for solving complex problems",
    "🌟 Believes that great code is like poetry - elegant, purposeful, and impactful"
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-custom section-padding"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond the code lies a story of passion, innovation, and the drive to create meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Story Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  My journey into development began with a simple curiosity about how websites work. 
                  What started as tinkering with HTML and CSS quickly evolved into a deep passion for 
                  creating sophisticated web applications that solve real-world problems.
                </p>
                <p>
                  As I honed my skills in the <span className="font-semibold text-primary-600">MERN Stack</span>, 
                  I discovered my knack for understanding both the technical and business sides of projects. 
                  This unique perspective led me to successfully manage and market multiple 
                  <span className="font-semibold text-secondary-600"> NFT initiatives</span>, where I learned 
                  valuable lessons about community building, user engagement, and project lifecycle management.
                </p>
                <p>
                  My experience with <span className="font-semibold text-accent-600">Discord API</span> development 
                  has taught me the importance of creating intuitive user experiences and building tools that 
                  genuinely improve people's daily interactions. Whether it's a complex web application or a 
                  simple Discord bot, I believe in crafting solutions that are both technically sound and 
                  delightfully user-friendly.
                </p>
                <p>
                  Today, I'm eager to bring this unique blend of technical expertise, project management 
                  experience, and strategic thinking to challenging full-stack development roles where I 
                  can contribute to innovative teams and impactful projects.
                </p>
              </div>
            </motion.div>

            {/* Professional Photo */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center shadow-xl overflow-hidden">
                  <img 
                    src="/images/professional-photo.jpg" 
                    alt="Piyush Utkar - Full Stack Developer"
                    className="w-72 h-72 rounded-2xl object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary-500 dark:bg-secondary-600 rounded-full flex items-center justify-center">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values & Approach */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">What Drives Me</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Fun Facts About Me
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-600 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <motion.span 
                    className="text-2xl group-hover:animate-bounce"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {fact.charAt(0)}
                  </motion.span>
                  <motion.span 
                    className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {fact.slice(2)}
                  </motion.span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: funFacts.length * 0.1 + 0.3, duration: 0.6 }}
            >
              <motion.p 
                className="text-gray-600 dark:text-gray-300 italic"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                ✨ Always excited to learn something new and take on challenging projects!
              </motion.p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities and explore how my unique blend of 
              technical skills and business acumen can contribute to your team's success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Let's Start a Conversation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 