"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Ball {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingBalls() {
  const ballsRef = useRef<Ball[]>([])

  useEffect(() => {
    // Generate random balls
    const ballCount = window.innerWidth < 768 ? 8 : 15

    ballsRef.current = Array.from({ length: ballCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of viewport width
      y: Math.random() * 100, // percentage of viewport height
      size: Math.random() * 15 + 5, // between 5px and 20px
      duration: Math.random() * 60 + 60, // between 60s and 120s
      delay: Math.random() * -30, // random start time
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {ballsRef.current.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: ball.size,
            height: ball.size,
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            backgroundColor: ball.id % 3 === 0 ? "#ef4444" : ball.id % 3 === 1 ? "#f97316" : "#eab308",
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
          }}
          transition={{
            duration: ball.duration,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: ball.delay,
          }}
        />
      ))}
    </div>
  )
}
