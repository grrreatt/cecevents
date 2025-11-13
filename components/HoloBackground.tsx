"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HoloBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = containerRef.current!
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    let w = el.clientWidth
    let h = el.clientHeight
    camera.aspect = w / h
    camera.position.set(0, 2.2, 6)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const group = new THREE.Group()
    scene.add(group)

    const gridSize = 60
    const gridDiv = 60
    const grid = new THREE.GridHelper(gridSize, gridDiv, new THREE.Color('#00B2FF'), new THREE.Color('#00FFD1'))
    ;(grid.material as THREE.Material).transparent = true
    ;(grid.material as THREE.Material).opacity = 0.15
    grid.position.y = -2
    group.add(grid)

    const starGeo = new THREE.BufferGeometry()
    const starCount = 1500
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = Math.random() * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({ color: '#14F7FF', size: 0.04, sizeAttenuation: true, transparent: true, opacity: 0.7 })
    const stars = new THREE.Points(starGeo, starMat)
    group.add(stars)

    const nodeGeo = new THREE.SphereGeometry(0.04, 8, 8)
    const nodeMat = new THREE.MeshBasicMaterial({ color: '#A855F7' })
    const nodes: THREE.Mesh[] = []
    for (let i = 0; i < 80; i++) {
      const m = new THREE.Mesh(nodeGeo, nodeMat)
      m.position.set((Math.random() - 0.5) * 16, Math.random() * 6 - 1, (Math.random() - 0.5) * 16)
      nodes.push(m)
      group.add(m)
    }

    const targetRot = { x: -0.15, y: 0 }
    const mouse = { x: 0, y: 0 }

    const onResize = () => {
      w = el.clientWidth
      h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    let last = performance.now()
    const animate = (t: number) => {
      const dt = Math.min(32, t - last)
      last = t

      if (!reduced) {
        targetRot.y += (mouse.x * 0.3 - targetRot.y) * 0.04
        targetRot.x += (-mouse.y * 0.2 - targetRot.x) * 0.04
        group.rotation.x = targetRot.x
        group.rotation.y = targetRot.y

        stars.rotation.y += 0.0008 * dt
        grid.position.z = (grid.position.z + 0.01 * dt) % 10
        for (let i = 0; i < nodes.length; i++) {
          const m = nodes[i]
          m.position.y += Math.sin(t * 0.001 + i) * 0.0008 * dt
        }
      }

      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    const onVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      } else if (!rafRef.current) {
        last = performance.now()
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', onVis)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
