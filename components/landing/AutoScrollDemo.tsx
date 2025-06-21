"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "hero", name: "Hero", duration: 3000 },
  { id: "performance", name: "Performance", duration: 4000 },
  { id: "features", name: "Features", duration: 4000 },
  { id: "pricing", name: "Pricing", duration: 3000 },
  { id: "resources", name: "Resources", duration: 3000 },
  { id: "faq", name: "FAQ", duration: 2000 },
]

export default function AutoScrollDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSection((prev) => {
        const nextSection = (prev + 1) % sections.length

        // Scroll to the next section
        const element = document.getElementById(sections[nextSection].id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }

        return nextSection
      })
    }, sections[currentSection]?.duration || 3000)

    return () => clearInterval(interval)
  }, [isPlaying, currentSection])

  const handleToggleAutoScroll = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Start from current position
      const element = document.getElementById(sections[currentSection].id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Button
            onClick={handleToggleAutoScroll}
            className={`${isPlaying ? "bg-red-500 hover:bg-red-600 text-white" : "pinecone-button-primary"}`}
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? "Pause Demo" : "Auto Demo"}
          </Button>

          {isPlaying && (
            <div className="flex items-center space-x-2">
              <div className="text-sm text-gray-600">{sections[currentSection]?.name}</div>
              <div className="flex space-x-1">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentSection ? "bg-blue-500" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
