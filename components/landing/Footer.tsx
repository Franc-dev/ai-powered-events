"use client"

import { motion } from "framer-motion"
import { Settings, Twitter, Linkedin, Youtube, Github, MessageSquare } from "lucide-react"

const footerSections = {
  Product: [
    { name: "Event Database", href: "#" },
    { name: "AI Assistant", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  Resources: [
    { name: "Community Forum", href: "#" },
    { name: "Learning Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Customer Case Studies", href: "#" },
    { name: "Status", href: "#" },
    { name: "What is Event Management?", href: "#" },
    { name: "What is AI Events?", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Newsroom", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Customer Terms", href: "#" },
    { name: "Website Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Cookie Preferences", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageSquare, href: "#", label: "Discord" },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EventFlow</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer links */}
          {Object.entries(footerSections).map(([section, links], sectionIndex) => (
            <div key={section}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-gray-900 mb-4"
              >
                {section}
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>© EventFlow Systems, Inc. | San Francisco, CA</p>
          <p className="mt-4 md:mt-0">EventFlow is a registered trademark of EventFlow Systems, Inc.</p>
        </motion.div>
      </div>
    </footer>
  )
}
