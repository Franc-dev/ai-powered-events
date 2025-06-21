"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
    description: "Trusted by professionals worldwide",
  },
  {
    icon: Award,
    value: "99.5%",
    label: "Accuracy Rate",
    description: "Industry-leading precision",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Languages",
    description: "Global language support",
  },
  {
    icon: TrendingUp,
    value: "10M+",
    label: "Hours Processed",
    description: "Audio transcribed to date",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">TranscribeAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make audio content accessible to everyone. Our cutting-edge AI technology transforms
            the way people interact with audio, making transcription faster, more accurate, and more affordable than
            ever before.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-1"
        >
          <div className="bg-white rounded-3xl p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Our Story</h3>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Founded in 2023 by a team of AI researchers and audio engineers, TranscribeAI was born from the
                    frustration of spending countless hours manually transcribing interviews and meetings.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We believed there had to be a better way. Using state-of-the-art machine learning models and years
                    of research, we've created the most accurate and efficient transcription service available today.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, we're proud to serve thousands of customers worldwide, from individual content creators to
                    Fortune 500 companies, helping them unlock the value hidden in their audio content.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">🎯</div>
                  </div>
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl"
                  >
                    ⚡
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xl"
                  >
                    🚀
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
