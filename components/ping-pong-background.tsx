"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Ball {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function PingPongBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ballsRef = useRef<Ball[]>([])
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  useEffect(() => {
    // Initialize balls
    const ballCount = window.innerWidth < 768 ? 5 : 10
    ballsRef.current = Array.from({ length: ballCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 10 + 5,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: Math.random() > 0.5 ? "#f97316" : "#ef4444", // orange or red
    }))

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current

        // Update ball positions
        ballsRef.current.forEach((ball) => {
          ball.x += ball.speedX
          ball.y += ball.speedY

          // Bounce off walls
          if (ball.x <= 0 || ball.x >= window.innerWidth) {
            ball.speedX *= -1
          }

          if (ball.y <= 0 || ball.y >= window.innerHeight) {
            ball.speedY *= -1
          }
        })
      }

      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" ref={containerRef}>
      {ballsRef.current.map((ball, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-20"
          animate={{
            x: [ball.x, ball.x + window.innerWidth * (Math.random() > 0.5 ? 1 : -1)],
            y: [ball.y, ball.y + window.innerHeight * (Math.random() > 0.5 ? 1 : -1)],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            width: ball.size,
            height: ball.size,
            backgroundColor: ball.color,
            left: ball.x,
            top: ball.y,
          }}
        />
      ))}
    </div>
  )
}
