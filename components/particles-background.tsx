"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  baseRadius: number
  phase: number
  color: string // "r,g,b"
}

// Brand palette as rgb tuples so we can vary alpha per draw call.
const COLORS = ["129,140,248", "192,132,252", "244,114,182", "34,211,238", "52,211,153"]

const LINK_DISTANCE = 130
const MOUSE_RADIUS = 180
const MAX_SPEED = 0.45

const rand = (min: number, max: number) => Math.random() * (max - min) + min

function createParticle(width: number, height: number): Particle {
  return {
    x: rand(0, width),
    y: rand(0, height),
    vx: rand(-MAX_SPEED, MAX_SPEED),
    vy: rand(-MAX_SPEED, MAX_SPEED),
    baseRadius: rand(1, 2.4),
    phase: rand(0, Math.PI * 2),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }
}

/**
 * Full-viewport constellation of floating particles that react to the cursor.
 * Pure canvas, no dependencies. Pauses when the tab is hidden and renders a
 * single static frame for users who prefer reduced motion.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let frame = 0
    let tick = 0
    let running = true
    const mouse = { x: -9999, y: -9999, active: false }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Density scales with viewport area, clamped so phones stay light.
      const target = Math.min(110, Math.max(28, Math.floor((width * height) / 15000)))
      if (particles.length > target) particles = particles.slice(0, target)
      while (particles.length < target) particles.push(createParticle(width, height))
    }

    const update = () => {
      tick += 1
      for (const p of particles) {
        // Cursor gently pushes particles away, which makes the field feel alive.
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0.001) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.035
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        // Keep speeds bounded so the push never becomes chaotic.
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > MAX_SPEED * 1.8) {
          p.vx = (p.vx / speed) * MAX_SPEED * 1.8
          p.vy = (p.vy / speed) * MAX_SPEED * 1.8
        } else if (speed < 0.08) {
          p.vx += rand(-0.02, 0.02)
          p.vy += rand(-0.02, 0.02)
        }
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy

        // Wrap around the edges.
        if (p.x < -10) p.x = width + 10
        else if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        else if (p.y > height + 10) p.y = -10
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Links between neighbours.
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (Math.abs(dx) > LINK_DISTANCE || Math.abs(dy) > LINK_DISTANCE) continue
          const dist = Math.hypot(dx, dy)
          if (dist > LINK_DISTANCE) continue
          const alpha = (1 - dist / LINK_DISTANCE) * 0.28
          ctx.strokeStyle = `rgba(${a.color},${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Links from the cursor to nearby particles.
      if (mouse.active) {
        for (const p of particles) {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y)
          if (dist > MOUSE_RADIUS) continue
          const alpha = (1 - dist / MOUSE_RADIUS) * 0.55
          ctx.strokeStyle = `rgba(${p.color},${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
        }
      }

      // Particles with a soft halo and a twinkle.
      for (const p of particles) {
        const twinkle = 0.75 + 0.25 * Math.sin(tick * 0.03 + p.phase)
        const r = p.baseRadius * twinkle
        ctx.fillStyle = `rgba(${p.color},0.12)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(${p.color},${(0.9 * twinkle).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      if (!running) return
      update()
      draw()
      frame = requestAnimationFrame(loop)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onMouseLeave = () => {
      mouse.active = false
    }
    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!reduceMotion) {
        running = true
        frame = requestAnimationFrame(loop)
      }
    }

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        resize()
        if (reduceMotion) draw()
      }, 120)
    }

    resize()

    if (reduceMotion) {
      draw()
    } else {
      frame = requestAnimationFrame(loop)
      window.addEventListener("mousemove", onMouseMove, { passive: true })
      document.documentElement.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("visibilitychange", onVisibility)
    }
    window.addEventListener("resize", onResize)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.clearTimeout(resizeTimer)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
      document.documentElement.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
