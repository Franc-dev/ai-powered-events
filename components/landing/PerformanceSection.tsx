"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import InteractiveCodeTags from "./InteractiveCodeTags"

const performanceStats = [
  {
    number: "2.5M",
    label: "Events in one platform",
    description: "Manage millions of events seamlessly",
  },
  {
    number: "50ms",
    label: "P90 response latency",
    description: "Lightning-fast event processing",
  },
  {
    number: "99%",
    label: "P50 uptime",
    description: "Enterprise-grade reliability",
  },
]

export default function PerformanceSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display mb-6 text-gray-900">
                Performance at scale for <span className="pinecone-text-gradient">intelligent events</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl">
                The purpose-built event management platform delivering seamless experiences at any scale.
              </p>
            </div>

            <div className="hidden lg:block">
              <Button className="pinecone-button-secondary">Learn More</Button>
            </div>
          </div>
        </motion.div>

        {/* Interactive Code Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InteractiveCodeTags />
        </motion.div>

        {/* Customer workload section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer workload:</h3>
            <p className="text-gray-600 mb-8">
              Large event company providing comprehensive event solutions to global organizations
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {performanceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl lg:text-6xl font-display mb-4 text-gray-900">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
