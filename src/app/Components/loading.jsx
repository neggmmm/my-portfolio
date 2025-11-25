"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";


gsap.registerPlugin(Flip);

// Preloader Component
export default function Preloader({ onComplete }) {
   const loaderRef = useRef(null);
  const textRef = useRef(null);
   
  useEffect(() => {
   
    const textEl = textRef.current;
    const loaderEl = loaderRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight;


    gsap.set(textEl, {
      x: vw * 0.3, 
      y: vh * 0.4, 
      opacity: 1,
      scale: 0.3,  
    });

    // STEP 2: Stay for 2 seconds, then animate
    gsap.to(textEl, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 2, 
      ease: "expo.out",
      delay: 2,
    });

    // STEP 3: Transition to HERO section
    setTimeout(() => {
      const targetEl = document.querySelector("#navbar-negm");
      if (!targetEl) {
        onComplete();
        return;
      }

      const state = Flip.getState(textEl);
      targetEl.appendChild(textEl);

      Flip.from(state, {
        duration: 0.5,
        ease: "expo.inOut",
        absolute: true,
        onComplete: () => {
          // STEP 4: Fade out background
          gsap.to(loaderEl, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
            onComplete: () => {
              loaderEl.style.display = "none";
            },
          });
        },
      });
    }, 3800); // 2s delay + 2s animation + 0.2s buffer
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black text-white"
    >
      <div
        ref={textRef}
        className="text-9xl font-bold"
        id="preloader-text"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        NEGM
      </div>
    </div>
  );
}