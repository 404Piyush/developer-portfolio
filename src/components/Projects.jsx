import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaChartLine,
  FaDiscord,
  FaUsers,
  FaCogs,
  FaPlay,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaDice,
  FaGamepad,
  FaPython,
  FaShieldAlt,
  FaUserShield,
  FaClipboard,
  FaLaptopCode
} from 'react-icons/fa'
import { SiSqlite } from 'react-icons/si'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Classroom Management & Monitoring System (CMMS)",
      category: "software",
      description: "A comprehensive real-time classroom management solution with WebSocket communication, enabling teachers to monitor and control student computer activities during sessions.",
      longDescription: "CMMS is a sophisticated full-stack classroom management platform built with Node.js/Express backend and Java desktop client. This comprehensive solution enables teachers to create real-time monitoring sessions, control student computer activities, block applications, filter websites, and manage classroom environments effectively. The system demonstrates advanced backend development, WebSocket implementation, desktop application development, and real-time communication protocols.",
      challenge: "Educational institutions needed a robust solution for managing classroom computer sessions, monitoring student activities in real-time, and maintaining control over learning environments. Traditional solutions lacked comprehensive features, real-time capabilities, and cross-platform compatibility.",
      solution: "Developed a full-stack solution with Node.js/Express RESTful API backend featuring WebSocket integration for real-time communication, JWT authentication for secure sessions, and a Java desktop client application. Implemented comprehensive session management, application control, website filtering, and real-time activity monitoring with MongoDB data persistence.",
      impact: "Demonstrates expertise in full-stack development, real-time communication systems, desktop application development, database design, and educational technology solutions. Successfully enables efficient classroom management for educational institutions with scalable architecture supporting multiple concurrent sessions.",
      technologies: ["Node.js", "Express.js", "MongoDB", "WebSocket", "Java", "JWT", "Maven"],
      techIcons: [FaNodeJs, FaDatabase, FaJava, FaShieldAlt, FaCogs, FaUsers],
      image: "/images/teacher-dashboard.jpg",
      demoImages: [
        { src: "/images/teacher-dashboard.jpg", caption: "Real-time teacher dashboard with session management controls" },
        { src: "/images/student-interface.jpg", caption: "Clean and intuitive student connection interface" },
        { src: "/images/session-management.jpg", caption: "Comprehensive session creation and management features" },
        { src: "/images/monitoring-features.jpg", caption: "Advanced monitoring capabilities with app blocking and website filtering" }
      ],
      github: "https://github.com/404Piyush/cmms",
      featured: true,
      testimonial: {
        text: "This project showcases exceptional full-stack development skills, demonstrating mastery of backend APIs, real-time communication, desktop applications, and educational technology solutions.",
        author: "Technical Showcase - Educational Management Platform",
        rating: 5
      },
      features: [
        "Real-time WebSocket Communication for instant updates",
        "Teacher Dashboard with Session Management Controls",
        "Student Activity Monitoring and Application Control",
        "Website Filtering and Content Management",
        "JWT Authentication and Secure Session Handling",
        "Cross-platform Java Desktop Client Application",
        "MongoDB Integration with Robust Data Persistence",
        "RESTful API with Comprehensive Endpoint Coverage"
      ]
    },
    {
      id: 2,
      title: "Discord Community Manager Bot",
      category: "discord",
      description: "A comprehensive Discord bot for advanced community management with verification systems, moderation tools, and automation features. Built with Python and discord.py.",
      longDescription: "Community Manager Bot is a sophisticated Discord moderation and management solution built with Python and discord.py. This comprehensive bot provides advanced verification systems, moderation tools, and community automation features designed to handle large-scale Discord servers efficiently. The project demonstrates expertise in Python development, Discord API integration, database management, and scalable bot architecture.",
      challenge: "Managing large Discord communities requires sophisticated tools for verification, moderation, and automation while maintaining user experience and security. Traditional bots lack comprehensive feature sets and customization options for complex community needs.",
      solution: "Developed a feature-rich Python Discord bot using discord.py with modular architecture, advanced verification systems (7 different types), comprehensive moderation tools, and SQLite database integration. Implemented role-based permission systems, automated deployment scripts, and mobile-optimized interfaces.",
      impact: "Demonstrates proficiency in Python development, Discord bot architecture, community management systems, database design, and production deployment. Features include advanced captcha systems, automated moderation, warning systems, and comprehensive administrative tools for community management.",
      technologies: ["Python 3.11+", "discord.py", "SQLite", "Asyncio", "Discord API", "Bot Architecture"],
      techIcons: [FaPython, FaDiscord, SiSqlite, FaShieldAlt, FaUserShield, FaClipboard],
      image: "/screenshots/community-manager-info.png",
      demoImages: [
        { src: "/screenshots/community-manager-info.png", caption: "Bot information and feature overview" },
        { src: "/screenshots/community-manager-verification.png", caption: "Advanced verification system with multiple security levels" },
        { src: "/screenshots/community-manager-help.png", caption: "Interactive help system with navigation" },
        { src: "/screenshots/community-manager-cmdline.png", caption: "Command line interface and deployment" }
      ],
      github: "https://github.com/404Piyush/discord-community-manager",
      featured: true,
      testimonial: {
        text: "This bot demonstrates exceptional Python development skills and showcases comprehensive understanding of Discord community management, security systems, and scalable bot architecture.",
        author: "Technical Showcase - Community Management Platform",
        rating: 5
      },
      features: [
        "Advanced Multi-Method Verification System (7 types including captcha)",
        "Comprehensive Moderation Tools (kick, ban, timeout, message management)",
        "Warning System with Automatic Action Thresholds",
        "Role Management and Permission Hierarchy System",
        "Anti-Bot Protection with Rate Limiting",
        "Mobile-Optimized Interface Design",
        "SQLite Database with Automatic Backups",
        "Cross-Platform Deployment Scripts (Windows/Linux)"
      ]
    },
    {
      id: 3,
      title: "The Syndicate's Den - Discord Casino Bot",
      category: "discord",
      description: "A sophisticated Discord bot that transforms servers into virtual casinos, featuring 6 complete casino games, comprehensive economy system, and professional UI design built with Java and JDA.",
      longDescription: "The Syndicate's Den is a feature-rich Discord gambling bot that provides a complete casino experience within Discord servers. Built with Java 17+ and the JDA (Java Discord API), this bot demonstrates advanced backend development, game logic implementation, and interactive user interface design. The project showcases enterprise-level Java development patterns, mathematical algorithm implementation, and production-ready software architecture.",
      challenge: "Creating a sophisticated gaming platform that handles complex game logic, manages virtual economy transactions, ensures fair gameplay with proper mathematical odds, and provides an engaging user experience through Discord's interface limitations.",
      solution: "Implemented a robust Java application using modern design patterns including clean architecture, SOLID principles, and comprehensive error handling. Utilized SQLite for persistent data storage, implemented mathematically accurate game algorithms, and created an intuitive button-based navigation system with real-time feedback.",
      impact: "Demonstrates proficiency in enterprise Java development, Discord bot architecture, database design, interactive UI development, mathematical algorithm implementation, and production-ready software delivery. Features include 6 complete casino games, persistent user economy, and professional game session management.",
      technologies: ["Java 17+", "JDA 5.0.0", "SQLite", "Maven", "Discord API", "Game Logic"],
      techIcons: [FaJava, FaDiscord, SiSqlite, FaCogs, FaDice, FaGamepad],
      image: "/screenshots/help.png",
      demoImages: [
        { src: "/screenshots/help.png", caption: "Comprehensive command guide and help system" },
        { src: "/screenshots/russian-roulette.png", caption: "High-stakes Russian Roulette game interface" },
        { src: "/screenshots/blackjack.png", caption: "Interactive blackjack with real-time gameplay" }
      ],
      github: "https://github.com/404Piyush/discord-gambling-bot",
      featured: false,
      testimonial: {
        text: "This bot showcases exceptional Java development skills and demonstrates the ability to create complex, production-ready applications with sophisticated game logic and user interaction systems.",
        author: "Technical Showcase - Discord Gaming Platform",
        rating: 5
      },
      features: [
        "6 Complete Casino Games (Dice, Roulette, Slots, Blackjack, Russian Roulette, Coin Flip)",
        "Advanced Economy System with User Balances and Transfers",
        "Interactive UI with Button-based Navigation",
        "Real-time Game Sessions with Timeout Protection",
        "SQLite Database with Transaction Safety",
        "Mathematical Game Logic with Proper Odds",
        "Comprehensive Error Handling and Validation",
        "Slash Commands with Discord Integration"
      ]
    },
    {
      id: 4,
      title: "TMS - Temporary Email Service Bot",
      category: "discord",
      description: "A Discord bot that provides temporary email services using the temp-mail.io API. Features email generation, inbox management, and attachment handling through interactive Discord commands.",
      longDescription: "TMS (Temporary Mail Service) is a practical Discord bot built in Java that integrates with the temp-mail.io API to provide users with temporary email addresses directly through Discord. Created in 2022 when I was 16 and learning Java, this project demonstrates API integration, user interaction design, and practical problem-solving skills. The bot features a clean, user-friendly interface with button interactions and comprehensive email management capabilities.",
      challenge: "Creating a seamless integration between Discord's interface and external email APIs while handling various email formats, attachments, and providing an intuitive user experience for temporary email management.",
      solution: "Developed a Java application using JDA (Java Discord API) with modular architecture, integrated multiple HTTP clients for API communication, and implemented interactive button-based navigation for better user experience. Used Gson for JSON parsing and Apache Commons libraries for file handling.",
      impact: "Demonstrates practical API integration skills, user-focused design thinking, and ability to create useful tools that solve real-world problems. Shows progression in Java development and understanding of external service integration.",
      technologies: ["Java", "JDA 5.0.0", "temp-mail.io API", "Gson", "OkHttp", "Apache HttpClient"],
      techIcons: [FaJava, FaDiscord, FaDatabase, FaCogs, FaUsers, FaPlay],
      image: "/api/placeholder/600/400",
      github: "https://github.com/404Piyush/TMS",
      featured: false,
      features: [
        "Temporary Email Generation with /get-mail command",
        "Interactive Button-based Interface (Refresh, Copy, New Mail)",
        "Real-time Inbox Checking and Email Retrieval", 
        "Attachment Handling and File Management",
        "Domain List Retrieval with /domains command",
        "Direct Message Email Content Delivery",
        "Email Address Clipboard Integration",
        "temp-mail.io API Integration"
      ]
    }
    // Commented out placeholder projects - will be added when ready
    /*
    {
      id: 5,
      title: "Full-Stack E-Commerce Platform",
      category: "fullstack",
      description: "A complete e-commerce solution built with the MERN stack, featuring user authentication, payment processing, and admin dashboard.",
      longDescription: "A comprehensive e-commerce platform designed to showcase modern web development practices and full-stack capabilities using the MERN stack.",
      challenge: "Creating a scalable e-commerce platform that handles user management, inventory tracking, payment processing, and provides a smooth user experience across devices.",
      solution: "Implemented a full MERN stack solution with JWT authentication, Stripe payment integration, responsive design, and comprehensive admin features.",
      impact: "Demonstrates proficiency in full-stack development with modern best practices, including security, performance optimization, and user experience design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      techIcons: [FaReact, FaNodeJs, SiExpress, SiMongodb],
      image: "/api/placeholder/600/400",
      github: "https://github.com/404Piyush/ecommerce-mern",
      featured: false
    },
    */
  ]

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaCogs },
    // { key: 'fullstack', label: 'Full-Stack', icon: FaReact },
    { key: 'discord', label: 'Discord', icon: FaDiscord },
    { key: 'software', label: 'Software', icon: FaLaptopCode }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  const _containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const _itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project Image/Demo */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 h-48">
        {project.image && (project.image.startsWith('/screenshots/') || project.image.startsWith('/images/')) ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center" style={{display: project.image && (project.image.startsWith('/screenshots/') || project.image.startsWith('/images/')) ? 'none' : 'flex'}}>
          <FaPlay className="w-12 h-12 text-gray-400 dark:text-gray-500 opacity-50" />
          <span className="ml-2 text-gray-400 dark:text-gray-500 font-medium">Preview Available in Case Study</span>
        </div>
        {project.demoVideo && !featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              Video Demo
            </span>
          </div>
        )}
        {project.demoImages && featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              Screenshots Available
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </div>
          {project.featured && (
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Quick Stats */}
        {project.impact && (
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Key Impact:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{project.impact}</p>
          </div>
        )}

        {/* Action Buttons - Different for featured vs regular projects */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.liveDemo && !featured && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
          >
            Read Case Study →
          </motion.button>
        </div>

        {/* Testimonial for featured projects */}
        {featured && project.testimonial && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-2">"{project.testimonial.text}"</p>
                <p className="text-xs text-gray-500 font-medium">{project.testimonial.author}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A curated collection of projects showcasing full-stack development, 
              Discord integrations, and strategic project management capabilities.
            </p>
          </motion.div>

          {/* Featured Projects - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Highlighted Work</h3>
            </div>
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Projects</h3>
            <AnimatePresence>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              These projects represent just a glimpse of what's possible. Let's discuss how I can 
              bring the same level of technical expertise and strategic thinking to your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start a Project
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/404Piyush"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                View All Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Demo Images/Screenshots Gallery */}
                {selectedProject.demoImages && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Screenshots & Demo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.demoImages.map((demo, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={demo.src} 
                            alt={demo.caption}
                            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg">
                            <p className="text-sm">{demo.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List for Discord Bot */}
                {selectedProject.features && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <FaGamepad className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.challenge}</p>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Impact & Results</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.impact}</p>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          <FaGithub className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      )}
                      {selectedProject.liveDemo && (
                        <a
                          href={selectedProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 