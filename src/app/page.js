"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import CurvedLoop from "@/components/CurvedLoop";
import Skills from "./Pages/Skills";

export default function Home() {
  const skillsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`transition-colors duration-1000 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Hero />

      <Projects />
      <div ref={skillsRef}>
        <Skills />
      </div>
    </div>
  );
}
