"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useRef } from 'react'

interface Star {
    x : number
    y : number
    size: number
    speed: number
    color: string
}

export default function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const {theme} = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        
        let animationFrameId: number
        const stars: Star[] = []
        
        // Set canvas to full screen
        const resizeCanvas = () => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          
          // Initialize stars
          stars.length = 0
          const starCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 5000), 200)
          
          for (let i = 0; i < starCount; i++) {
            const lightColor = 'rgba(133, 100, 255, 0.6)'
            const darkColor = 'rgba(133, 100, 255, 0.8)'
            
            stars.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 2 + 0.5,
              speed: Math.random() * 0.3 + 0.1,
              color: theme === 'dark' ? lightColor : darkColor
            })
          }
        }
        
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Update and draw stars
          stars.forEach(star => {
            star.y += star.speed
            
            // Reset star when it goes off screen
            if (star.y > canvas.height) {
              star.y = 0
              star.x = Math.random() * canvas.width
            }
            
            // Draw star
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
            ctx.fillStyle = star.color
            ctx.fill()
          })
          
          animationFrameId = requestAnimationFrame(animate)
        }
        
        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()
        animate()
        
        return () => {
          window.removeEventListener('resize', resizeCanvas)
          cancelAnimationFrame(animationFrameId)
        }
      }, [theme])
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}
