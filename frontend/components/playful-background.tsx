"use client"

import { useEffect, useRef } from "react"

export function PlayfulBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawPattern()
    }

    const drawPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set pattern properties
      const horseshoeSize = 15
      const spacing = 120
      const rows = Math.ceil(canvas.height / spacing) + 1
      const cols = Math.ceil(canvas.width / spacing) + 1

      // Draw horseshoe pattern
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing + ((i % 2) * spacing) / 2
          const y = i * spacing

          // Only draw if within canvas bounds with some margin
          if (x > -spacing && x < canvas.width + spacing && y > -spacing && y < canvas.height + spacing) {
            // Draw horseshoe
            ctx.save()
            ctx.translate(x, y)
            ctx.rotate(Math.random() * Math.PI * 2) // Random rotation

            // Set style
            ctx.strokeStyle = "rgba(217, 119, 6, 0.05)" // amber-600 with low opacity
            ctx.lineWidth = 2

            // Draw horseshoe shape
            ctx.beginPath()
            ctx.arc(0, 0, horseshoeSize, 0, Math.PI, false)
            ctx.moveTo(-horseshoeSize, 0)
            ctx.lineTo(-horseshoeSize, horseshoeSize)
            ctx.moveTo(horseshoeSize, 0)
            ctx.lineTo(horseshoeSize, horseshoeSize)
            ctx.stroke()

            ctx.restore()
          }
        }
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" aria-hidden="true" />
}

