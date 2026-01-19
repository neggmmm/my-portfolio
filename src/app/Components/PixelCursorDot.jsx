"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function PixelCursorDot() {
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

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.5
      pos.y += (mouse.y - pos.y) * 0.5

      gsap.set(cursorRef.current, {
        x: pos.x,
        y: pos.y,
      })
    })

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 20,
        height: 20,
        backgroundColor: "black",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}
