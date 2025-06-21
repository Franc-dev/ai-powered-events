"use client"

import { motion } from "framer-motion"
import { Calendar, TrendingUp, Filter, Clock, Search, Shuffle, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Calendar,
    title: "Event Creation",
    description:
      "Choose from our intelligent templates or create custom events with AI assistance and automated workflows.",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Optimized engagement",
    description: "Benchmark leading algorithms maximize attendee satisfaction with low latency interactions.",
    highlight: true,
    highlightText: "maximize engagement with low latency",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Retrieve only the events that match your specific criteria and audience preferences.",
    highlight: true,
    highlightText: "metadata filters",
  },
  {
    icon: Clock,
    title: "Real-time scheduling",
    description: "Upserted and updated events are dynamically scheduled in real-time to ensure optimal timing.",
    highlight: true,
    highlightText: "dynamically indexed",
  },
  {
    icon: Search,
    title: "Full-text search",
    description: "Get an exact keyword match with sparse indexes when semantic search isn't enough.",
    highlight: true,
    highlightText: "sparse indexes",
  },
  {
    icon: Shuffle,
    title: "Rerankers",
    description: "Add an extra layer of precision with rerankers to boost the most relevant matches.",
    highlight: true,
    highlightText: "rerankers",
  },
  {
    icon: Database,
    title: "Namespaces",
    description: "Create partitions of your data with namespaces to ensure tenant isolation.",
    highlight: true,
    highlightText: "namespaces",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-8">
            Advanced event management capabilities for precise coordination across dynamic schedules.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.slice(0, 6).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pinecone-card group hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-200">
                <feature.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.highlight && feature.highlightText ? (
                  <>
                    {feature.description.split(feature.highlightText)[0]}
                    <span className="underline decoration-blue-500 decoration-2 underline-offset-2">
                      {feature.highlightText}
                    </span>
                    {feature.description.split(feature.highlightText)[1]}
                  </>
                ) : (
                  feature.description
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="pinecone-card">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-gray-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">{features[6].title}</h3>

            <p className="text-gray-600 leading-relaxed">
              {features[6].highlight && features[6].highlightText ? (
                <>
                  {features[6].description.split(features[6].highlightText)[0]}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-2">
                    {features[6].highlightText}
                  </span>
                  {features[6].description.split(features[6].highlightText)[1]}
                </>
              ) : (
                features[6].description
              )}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Learn how to achieve <span className="pinecone-text-gradient">best-in-class relevance</span>
            </h3>
            <p className="text-gray-600">with cascading event management strategies and intelligent automation.</p>
            <Button className="pinecone-button-secondary">View sample code</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
