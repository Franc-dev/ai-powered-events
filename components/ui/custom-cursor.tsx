"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    // Add class to body to enable custom cursor styles
    document.body.classList.add("custom-cursor-enabled")

    let trailId = 0

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail effect
      setTrails(prev => {
        const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ }
        const updatedTrails = [...prev, newTrail].slice(-5) // Keep last 5 trails
        return updatedTrails
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      
      // Remove class from body to restore default cursor
      document.body.classList.remove("custom-cursor-enabled")
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        }}
      />
      
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            transform: `translate(${trail.x - 4}px, ${trail.y - 4}px)`,
            opacity: (index + 1) / trails.length,
            scale: (index + 1) / trails.length,
          }}
        />
      ))}
    </>
  )
} 