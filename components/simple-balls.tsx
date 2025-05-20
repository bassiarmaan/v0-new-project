"use client"

import { useEffect, useState } from "react"

interface Ball {
  id: number
  left: string
  top: string
  size: string
  color: string
  animationDuration: string
  animationDelay: string
}

export default function SimpleBalls() {
  const [balls, setBalls] = useState<Ball[]>([])

  useEffect(() => {
    // Generate random balls
    const ballCount = window.innerWidth < 768 ? 12 : 20
    const colors = ["#ef4444", "#f97316", "#eab308"]

    const newBalls = Array.from({ length: ballCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 25 + 10}px`, // Larger size: between 10px and 35px
      color: colors[i % colors.length],
      animationDuration: `${Math.random() * 40 + 40}s`, // Faster animation: between 40s and 80s
      animationDelay: `${Math.random() * -20}s`,
    }))

    setBalls(newBalls)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute rounded-full opacity-20" // Increased opacity from 0.1 to 0.2
          style={{
            width: ball.size,
            height: ball.size,
            left: ball.left,
            top: ball.top,
            backgroundColor: ball.color,
            animation: `float ${ball.animationDuration} infinite linear ${ball.animationDelay}`,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(150px, -150px); // More pronounced movement
          }
          50% {
            transform: translate(250px, 50px); // More pronounced movement
          }
          75% {
            transform: translate(150px, 150px); // More pronounced movement
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  )
}
