import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaDatabase, 
  FaGitAlt, 
  FaFigma,
  FaDiscord,
  FaProjectDiagram,
  FaChartLine,
  FaCogs
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiExpress, 
  SiCplusplus, 
  SiC
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Skills = () => {
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
        staggerChildren: 0.2
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: FaJsSquare, level: "Expert", color: "text-yellow-500" },
        { name: "Java", icon: FaCogs, level: "Proficient", color: "text-red-500" },
        { name: "C++", icon: SiCplusplus, level: "Proficient", color: "text-blue-600" },
        { name: "C", icon: SiC, level: "Proficient", color: "text-gray-600" }
      ]
    },
    {
      title: "MERN Stack",
      skills: [
        { name: "React.js", icon: FaReact, level: "Proficient", color: "text-cyan-500" },
        { name: "Node.js", icon: FaNodeJs, level: "Proficient", color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, level: "Proficient", color: "text-gray-700" },
        { name: "MongoDB", icon: SiMongodb, level: "Proficient", color: "text-green-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Discord API", icon: FaDiscord, level: "Proficient", color: "text-indigo-500" },
        { name: "Git & GitHub", icon: FaGitAlt, level: "Expert", color: "text-orange-500" },
        { name: "VS Code", icon: VscCode, level: "Expert", color: "text-blue-500" },
        { name: "Figma", icon: FaFigma, level: "Familiar", color: "text-pink-500" }
      ]
    },
    {
      title: "Methodologies & Soft Skills",
      skills: [
        { name: "Project Management", icon: FaProjectDiagram, level: "Experienced", color: "text-purple-600" },
        { name: "Marketing Strategy", icon: FaChartLine, level: "Experienced", color: "text-green-600" },
        { name: "Agile/Scrum", icon: FaCogs, level: "Experienced", color: "text-blue-600" },
        { name: "Database Design", icon: FaDatabase, level: "Proficient", color: "text-gray-600" }
      ]
    }
  ]

  const featuredSkills = [
    {
      name: "MERN Stack Development",
      description: "Building full-stack applications with React, Node.js, Express, and MongoDB",
      projects: ["Project Epsilon", "Project Eta"],
      icon: FaReact,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Discord API Integration",
      description: "Creating engaging Discord bots and community management tools",
      projects: ["Community Bot", "NFT Discord Tools"],
      icon: FaDiscord,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Project Management",
      description: "Leading cross-functional teams and managing project lifecycles effectively",
      projects: ["NFT Initiatives", "Team Collaborations"],
      icon: FaProjectDiagram,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500'
      case 'Proficient': return 'bg-blue-500'
      case 'Experienced': return 'bg-purple-500'
      case 'Familiar': return 'bg-gray-500'
      default: return 'bg-gray-400'
    }
  }

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full'
      case 'Proficient': return 'w-4/5'
      case 'Experienced': return 'w-4/5'
      case 'Familiar': return 'w-3/5'
      default: return 'w-2/5'
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit combining technical expertise with strategic thinking and project management acumen.
            </p>
          </motion.div>

          {/* Featured Skills */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Core Specializations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 group"
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project, projectIndex) => (
                      <motion.span 
                        key={projectIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                      className="flex items-center justify-between group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        </motion.div>
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: '100%' } : { width: 0 }}
                            transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                            className={`h-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                            whileHover={{ scale: 1.05 }}
                          ></motion.div>
                        </div>
                        <motion.span 
                          className={`text-sm font-medium px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {skill.level}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Technologies */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Responsive Design', 
                'Team Leadership', 'Community Building', 'Agile Methodologies', 'Problem Solving'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            >
              I'm constantly learning and adapting to new technologies. Currently exploring Web3 development, 
              blockchain technologies, and advanced React patterns to stay at the forefront of web development.
            </motion.p>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#projects')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              See My Work in Action
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 