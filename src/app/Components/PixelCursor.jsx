"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function PixelCursor({ enabled }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    if (window.innerWidth < 768) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const DPR = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * DPR
    canvas.height = window.innerHeight * DPR
    canvas.style.width = window.innerWidth + "px"
    canvas.style.height = window.innerHeight + "px"
    ctx.scale(DPR, DPR)

    const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    const pixels = []

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", onMove)

    const ticker = gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15
      pos.y += (mouse.y - pos.y) * 0.15

      pixels.push({ x: pos.x, y: pos.y, life: 1 })
      if (pixels.length > 100) pixels.shift()
    })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pixels.forEach((p, i) => {
        p.life -= 0.02
        ctx.fillStyle = `rgba(0,0,0,${p.life})`
        ctx.fillRect(p.x, p.y, 20, 20)
        if (p.life <= 0) pixels.splice(i, 1)
      })

      requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("mousemove", onMove)
      gsap.ticker.remove(ticker)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [enabled])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
        enabled ? "opacity-100" : "opacity-0"
      }`}
    />
  )
}
