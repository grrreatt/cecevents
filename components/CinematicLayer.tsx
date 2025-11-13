'use client'

import { useEffect, useRef } from 'react'

export default function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!

    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    let particles: {x:number;y:number;vx:number;vy:number;size:number;life:number;color:string}[] = []
    const max = 120
    const mouse = { x: w/2, y: h/2 }

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)

    const spawn = () => {
      for (let i = particles.length; i < max; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 0.2 + Math.random() * 0.6
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 0.6 + Math.random() * 2.2,
          life: 0.5 + Math.random() * 1.5,
          color: Math.random() > 0.5 ? 'rgba(212,175,55,0.35)' : 'rgba(255,255,255,0.15)'
        })
      }
    }

    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(33, t - last); last = t
      ctx.clearRect(0,0,w,h)

      // soft vignette
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, w/2, h/2, Math.max(w,h))
      grad.addColorStop(0, 'rgba(212,175,55,0.08)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,w,h)

      // particles
      particles.forEach(p => {
        p.x += p.vx * dt * 0.06
        p.y += p.vy * dt * 0.06
        p.vx += (mouse.x - p.x) * 0.00001
        p.vy += (mouse.y - p.y) * 0.00001
        if (p.x < -10) p.x = w+10
        if (p.x > w+10) p.x = -10
        if (p.y < -10) p.y = h+10
        if (p.y > h+10) p.y = -10
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2)
        ctx.fill()
      })

      // subtle scanline
      ctx.fillStyle = 'rgba(255,255,255,0.03)'
      for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1)

      rafRef.current = requestAnimationFrame(loop)
    }

    spawn()
    rafRef.current = requestAnimationFrame(loop)

    const onVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      } else if (!rafRef.current) {
        last = performance.now()
        rafRef.current = requestAnimationFrame(loop)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('visibilitychange', onVis)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"/>
}
