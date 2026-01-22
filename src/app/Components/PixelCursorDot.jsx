"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import StarPixel from "./StarPixel"

export default function PixelCursorDot({ color = "#000" }) {
  const cursorRef = useRef(null)

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

      // snap to grid = pixel feel
      const GRID = 4
      const snappedX = Math.round(pos.x / GRID) * GRID
      const snappedY = Math.round(pos.y / GRID) * GRID

      gsap.set(cursorRef.current, {
        x: snappedX,
        y: snappedY,
      })
    }

    gsap.ticker.add(tick)

    return () => {
      window.removeEventListener("mousemove", move)
      gsap.ticker.remove(tick)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: "translate(0, 0)", // hotspot top-left
      }}
    >
      {/* Minecraft-style arrow (pixels) */}
      <div className="grid grid-cols-5 gap-[1px]">
        {[
          1, 0, 0, 0, 0,
          1, 1, 0, 0, 0,
          1, 1, 1, 0, 0,
          1, 1, 1, 1, 0,
          1, 1, 1, 1, 1,
          1, 1, 1, 0, 0,
          1, 1, 0, 0, 0,
          1, 0, 0, 0, 0,
        ].map((cell, i) => (
          <div key={i}>
            {cell ? <StarPixel color={color} /> : <div style={{ width: 3, height: 3 }} />}
          </div>
        ))}
      </div>
    </div>
  )
}
