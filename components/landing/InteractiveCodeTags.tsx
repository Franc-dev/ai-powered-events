"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Search, TrendingUp, BarChart3 } from "lucide-react"

const codeTagSections = [
  {
    tag: "{events}",
    title: "Event Management",
    description: "Create, manage, and scale events with intelligent automation and AI-powered insights.",
    icon: Calendar,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    features: ["AI-powered event creation", "Automated scheduling", "Smart capacity management", "Real-time updates"],
  },
  {
    tag: "{search}",
    title: "Intelligent Search",
    description: "Find events, attendees, and insights instantly with semantic search and smart filters.",
    icon: Search,
    color: "bg-green-100 text-green-700 border-green-200",
    features: ["Semantic event search", "Advanced filtering", "Natural language queries", "Instant results"],
  },
  {
    tag: "{recommendations}",
    title: "AI Recommendations",
    description: "Get personalized suggestions for event optimization and attendee engagement.",
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    features: [
      "Personalized suggestions",
      "Optimal timing recommendations",
      "Venue suggestions",
      "Content optimization",
    ],
  },
  {
    tag: "{analytics}",
    title: "Advanced Analytics",
    description: "Deep insights into event performance, attendee behavior, and engagement metrics.",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-700 border-orange-200",
    features: ["Real-time dashboards", "Predictive analytics", "Engagement tracking", "ROI measurement"],
  },
]

export default function InteractiveCodeTags() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codeTagSections.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleTagClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const activeSection = codeTagSections[activeIndex]

  return (
    <div className="mb-16">
      {/* Interactive Code Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {codeTagSections.map((section, index) => (
          <motion.button
            key={section.tag}
            onClick={() => handleTagClick(index)}
            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 border font-semibold ${
              index === activeIndex
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.tag}
          </motion.button>
        ))}
        <div className="flex items-center ml-4">
          <div className="flex space-x-1">
            {codeTagSections.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                animate={{
                  scale: index === activeIndex ? 1.2 : 1,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">Auto-cycling</span>
        </div>
      </div>

      {/* Active Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-gray-200 p-8"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${activeSection.color}`}>
                  <activeSection.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{activeSection.title}</h3>
                  <span className={`text-sm font-mono px-2 py-1 rounded ${activeSection.color}`}>
                    {activeSection.tag}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-6">{activeSection.description}</p>
              <ul className="space-y-3">
                {activeSection.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-12 scale-150"></div>
                </div>

                {/* Icon display */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-8xl opacity-20"
                >
                  <activeSection.icon className="w-24 h-24 text-gray-400" />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full opacity-50"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
