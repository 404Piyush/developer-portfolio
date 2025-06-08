import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

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

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      description: "Let's discuss your project",
      contact: "piyushutkar@outlook.com",
      href: "mailto:piyushutkar@outlook.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Professional networking",
      contact: "/in/piyush-utkar-0489b12b2",
      href: "https://www.linkedin.com/in/piyush-utkar-0489b12b2/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: FaCalendarAlt,
      title: "Schedule a Call",
      description: "Book a 30-min consultation",
      contact: "calendly.com/piyushutkar",
      href: "https://calendly.com/piyushutkar",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "View my code repositories",
      contact: "github.com/404Piyush",
      href: "https://github.com/404Piyush",
      color: "from-gray-700 to-gray-800"
    }
  ]

  const projectTypes = [
    "Full-Stack Web Application",
    "Discord Bot Development",
    "NFT/Web3 Project",
    "E-Commerce Platform",
    "API Development",
    "Consulting & Strategy",
    "Other"
  ]

  // EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_onvutof" // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "template_0ui57wf" // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "b_cHETaO3Za54HI6j" // Replace with your EmailJS public key

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // EmailJS parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        project_type: formData.projectType,
        to_email: 'piyushutkar@outlook.com', // Your email
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError('Failed to send message. Please try again or contact me directly at piyushutkar@outlook.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
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
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new projects 
              and explore how my technical expertise can help achieve your goals.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{method.description}</p>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">{method.contact}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Start a Conversation</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <div>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-3"
                      >
                        <FaExclamationTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
                      </motion.div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                          placeholder="Brief project description"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none"
                          placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                          isFormValid && !isSubmitting
                            ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Discuss Your Project</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-300">Remote & Available Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaCalendarAlt className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-300">Free initial consultation</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What Happens Next?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">I'll review your message and respond within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">We'll schedule a free consultation to discuss your needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">I'll provide a detailed proposal with timeline and pricing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">We'll start bringing your vision to life!</p>
                  </div>
                </div>
              </div>

              {/* Additional Contact */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Prefer a Different Approach?</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Feel free to reach out through any of these platforms:
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/piyush-utkar-0489b12b2/", label: "LinkedIn" },
                    { icon: FaGithub, href: "https://github.com/404Piyush", label: "GitHub" },
                    { icon: FaEnvelope, href: "mailto:piyushutkar@outlook.com", label: "Email" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 