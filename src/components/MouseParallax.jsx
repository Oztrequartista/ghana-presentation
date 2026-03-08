import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function MouseParallax({ children, intensity = 20 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    setPosition({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <motion.div
      animate={{
        x: position.x * intensity,
        y: position.y * intensity,
      }}
      transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export function ParallaxLayer({ children, depth = 1, className = '' }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    setPosition({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <motion.div
      animate={{
        x: position.x * depth * 15,
        y: position.y * depth * 15,
        rotateX: position.y * depth * -2,
        rotateY: position.x * depth * 2,
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 30 }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
