'use client'

import { useEffect, useRef } from 'react'

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const shapes: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      rotation: number
      rotationSpeed: number
      type: 'cube' | 'sphere' | 'triangle'
      color: string
    }> = []

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']

    for (let i = 0; i < 30; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 5,
        size: Math.random() * 20 + 10,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        type: ['cube', 'sphere', 'triangle'][Math.floor(Math.random() * 3)] as 'cube' | 'sphere' | 'triangle',
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    function drawShape(shape: typeof shapes[0]) {
      if (!ctx) return
      
      const scale = 1000 / (1000 + shape.z)
      const x = shape.x * scale
      const y = shape.y * scale
      const size = shape.size * scale

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(shape.rotation)
      ctx.globalAlpha = 0.6 * scale

      ctx.fillStyle = shape.color
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 2

      switch (shape.type) {
        case 'cube':
          ctx.fillRect(-size/2, -size/2, size, size)
          ctx.strokeRect(-size/2, -size/2, size, size)
          break
        case 'sphere':
          ctx.beginPath()
          ctx.arc(0, 0, size/2, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -size/2)
          ctx.lineTo(-size/2, size/2)
          ctx.lineTo(size/2, size/2)
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
          break
      }
      ctx.restore()
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      shapes.forEach(shape => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.z += shape.vz
        shape.rotation += shape.rotationSpeed
        
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1
        if (shape.z < -500 || shape.z > 1000) shape.vz *= -1
        
        drawShape(shape)
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}