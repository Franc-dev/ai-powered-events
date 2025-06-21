"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 pinecone-grid-pattern opacity-30" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-20 w-20 h-20 bg-blue-100 rounded-lg opacity-60"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                BUILD INTELLIGENT EVENTS
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-display mb-6 leading-tight text-gray-900"
            >
              The event platform
              <br />
              for <span className="pinecone-text-gradient">scale in production</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Create, manage, and optimize events with AI-powered insights. From intimate gatherings to massive
              conferences, scale seamlessly with intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button className="pinecone-button-primary text-lg px-8 py-4">Start Building</Button>
              <Button className="pinecone-button-secondary text-lg px-8 py-4">Get a Demo</Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>10K+ Events Created</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1M+ Attendees</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Isometric Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* 3D Event Management Stack Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform rotate-12 scale-90">
                  {/* Base layer */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="w-80 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg mb-4 flex items-center justify-center text-white font-semibold"
                  >
                    EVENT DATA PIPELINE
                  </motion.div>

                  {/* Middle layers */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    className="w-72 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg mb-4 ml-4 flex items-center justify-center text-white font-semibold"
                  >
                    AI RECOMMENDATIONS
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                    className="w-64 h-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-lg shadow-lg mb-4 ml-8 flex items-center justify-center text-white font-semibold"
                  >
                    ATTENDEE INSIGHTS
                  </motion.div>

                  {/* Top layer */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="w-56 h-16 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg ml-12 flex items-center justify-center text-blue-900 font-semibold"
                  >
                    REAL-TIME ANALYTICS
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute top-10 right-10 w-12 h-12 bg-yellow-400 rounded-full opacity-80"
              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-10 w-8 h-8 bg-green-400 rounded-lg opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
