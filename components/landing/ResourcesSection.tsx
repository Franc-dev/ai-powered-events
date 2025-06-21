"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Users, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const resources = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides and API references to get you started quickly.",
    link: "View Docs",
    category: "Getting Started",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides covering all aspects of event management.",
    link: "Watch Videos",
    category: "Learning",
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Learn from successful events and industry best practices.",
    link: "Read Guide",
    category: "Strategy",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other event organizers and share experiences.",
    link: "Join Community",
    category: "Support",
  },
]

const blogPosts = [
  {
    title: "10 AI-Powered Event Strategies That Drive Engagement",
    excerpt: "Discover how leading event organizers use AI to create memorable experiences.",
    readTime: "5 min read",
    category: "Strategy",
  },
  {
    title: "The Future of Hybrid Events: Trends for 2024",
    excerpt: "Explore the latest trends shaping the future of hybrid event experiences.",
    readTime: "7 min read",
    category: "Trends",
  },
  {
    title: "Scaling Event Operations with Automation",
    excerpt: "Learn how to automate repetitive tasks and focus on what matters most.",
    readTime: "6 min read",
    category: "Automation",
  },
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-6 text-gray-900">
            Resources to help you <span className="pinecone-text-gradient">succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master event management, from beginner guides to advanced strategies.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm text-blue-600 font-medium mb-2">{resource.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    {resource.link}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest from our blog</h3>
            <Button variant="outline">View all posts</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">{post.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="text-sm text-gray-500">{post.readTime}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
