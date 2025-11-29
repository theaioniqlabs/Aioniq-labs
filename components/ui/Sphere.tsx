'use client'

import React, { useRef, useEffect } from 'react'

interface Point {
  x: number
  y: number
  z: number
  rotateX(amount: number): void
  rotateY(amount: number): void
  rotateZ(amount: number): void
  getProjection(distance: number, xy: number, offSet: number, offSetZ: number): number
  draw(x: number, y: number, size: number, color: string, context: CanvasRenderingContext2D): void
}

class Point3D {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  rotateX(amount: number) {
    const y = this.y
    this.y = y * Math.cos(amount) + this.z * Math.sin(amount) * -1.0
    this.z = y * Math.sin(amount) + this.z * Math.cos(amount)
  }

  rotateY(amount: number) {
    const x = this.x
    this.x = x * Math.cos(amount) + this.z * Math.sin(amount) * -1.0
    this.z = x * Math.sin(amount) + this.z * Math.cos(amount)
  }

  rotateZ(amount: number) {
    const x = this.x
    this.x = x * Math.cos(amount) + this.y * Math.sin(amount) * -1.0
    this.y = x * Math.sin(amount) + this.y * Math.cos(amount)
  }

  getProjection(distance: number, xy: number, offSet: number, offSetZ: number): number {
    return (distance * xy) / (this.z - offSetZ) + offSet
  }

  draw(x: number, y: number, size: number, color: string, context: CanvasRenderingContext2D) {
    context.save()
    context.beginPath()
    context.fillStyle = color
    context.arc(x, y, size, 0, 2 * Math.PI, true)
    context.fill()
    context.restore()
  }
}

class Sphere3D {
  point: Point3D[]
  color: string
  radius: number
  numberOfVertexes: number
  rotation: number
  distance: number

  constructor(radius: number = 20.0) {
    this.point = []
    this.color = 'rgb(100,0,255)'
    this.radius = radius
    this.numberOfVertexes = 0
    this.rotation = 0
    this.distance = 0
    this.init()
  }

  init() {
    for (let alpha = 0; alpha <= 6.28; alpha += 0.17) {
      const p = new Point3D(0, 0, 0)
      p.x = Math.cos(alpha) * this.radius
      p.y = 0
      p.z = Math.sin(alpha) * this.radius
      this.point[this.numberOfVertexes] = p
      this.numberOfVertexes++
    }

    for (let direction = 1; direction >= -1; direction -= 2) {
      for (let beta = 0.17; beta < Math.PI; beta += 0.17) {
        const radius = Math.cos(beta) * this.radius
        const fixedY = Math.sin(beta) * this.radius * direction

        for (let alpha = 0; alpha < 6.28; alpha += 0.17) {
          const p = new Point3D(0, 0, 0)
          p.x = Math.cos(alpha) * radius
          p.y = fixedY
          p.z = Math.sin(alpha) * radius
          this.point[this.numberOfVertexes] = p
          this.numberOfVertexes++
        }
      }
    }
  }

  draw(context: CanvasRenderingContext2D, sphereWidth: number, sphereHeight: number) {
    let x: number, y: number
    const p = new Point3D(0, 0, 0)

    for (let i = 0; i < this.numberOfVertexes; i++) {
      p.x = this.point[i].x
      p.y = this.point[i].y
      p.z = this.point[i].z

      p.rotateX(this.rotation)
      p.rotateY(this.rotation)
      p.rotateZ(this.rotation)

      x = p.getProjection(this.distance, p.x, sphereWidth / 2.0, 100.0)
      y = p.getProjection(this.distance, p.y, sphereHeight / 2.0, 100.0)

      if (x >= 0 && x < sphereWidth) {
        if (y >= 0 && y < sphereHeight) {
          if (p.z < 0) {
            p.draw(x, y, 1, 'rgba(120,120,120,0.7)', context)
          } else {
            p.draw(x, y, 1, 'rgb(200,200,200)', context)
          }
        }
      }
    }
  }

  update() {
    this.rotation += Math.PI / 360.0

    if (this.distance < 1000) {
      this.distance += 10
    }
  }
}

interface SphereProps {
  width?: number
  height?: number
  className?: string
}

export function Sphere({ width = 420, height = 420, className = '' }: SphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const sphereRef = useRef<Sphere3D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const sphereWidth = (canvas.width = width)
    const sphereHeight = (canvas.height = height)

    // Initialize sphere
    if (!sphereRef.current) {
      sphereRef.current = new Sphere3D()
    }

    const sphere = sphereRef.current

    function draw() {
      if (!context) return
      
      animationFrameRef.current = window.requestAnimationFrame(draw)

      context.save()
      context.clearRect(0, 0, sphereWidth, sphereHeight)

      sphere.draw(context, sphereWidth, sphereHeight)

      context.restore()

      sphere.update()
    }

    draw()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [width, height])

  return (
    <div className={className} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <canvas ref={canvasRef} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  )
}

