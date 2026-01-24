"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function PixelCursorDot({ color = "#000" }) {
  const cursorRef = useRef(null)
  const sparksRef = useRef([])

  useEffect(() => {
    if (window.innerWidth < 768) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const mouse = { x: pos.x, y: pos.y }

    const move = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", move)

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.35
      pos.y += (mouse.y - pos.y) * 0.35

      const GRID = 4
      const snappedX = Math.round(pos.x / GRID) * GRID
      const snappedY = Math.round(pos.y / GRID) * GRID

      gsap.set(cursorRef.current, { x: snappedX, y: snappedY })
    }

    gsap.ticker.add(tick)

    // CLICK SPARKS 💥
    const handleClick = () => {
      const sparks = sparksRef.current
      sparks.forEach((spark) => {
        const angle = Math.random() * Math.PI * 2
        const distance = 20 + Math.random() * 20

        gsap.fromTo(
          spark,
          { x: 0, y: 0, opacity: 1, scale: 1 },
          {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 0,
            scale: 0.5,
            duration: 0.4,
            ease: "power2.out",
          }
        )
      })
    }

    window.addEventListener("mousedown", handleClick)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", handleClick)
      gsap.ticker.remove(tick)
    }
  }, [])

  const arrowShape = [
    1,0,0,0,0,0,
    1,1,0,0,0,0,
    1,1,1,0,0,0,
    1,1,1,1,0,0,
    1,1,1,1,1,0,
    1,1,1,1,1,1,
    1,1,1,1,0,0,
    1,1,1,0,0,0,
    1,1,0,0,0,0,
    1,0,0,0,0,0,
  ]

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ transform: "translate(0, 0)" }}
    >
      {/* SPARK LINES (hidden until animated) */}
      <div className="absolute top-3 left-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (sparksRef.current[i] = el)}
            style={{
              width: 6,
              height: 2,
              backgroundColor: color,
              position: "absolute",
            }}
          />
        ))}
      </div>

      {/* MAIN PIXEL ARROW */}
      <div className="grid grid-cols-6">
        {arrowShape.map((cell, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: 3,
              backgroundColor: cell ? color : "transparent",
            }}
          />
        ))}
      </div>
    </div>
  )
}
