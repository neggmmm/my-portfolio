"use client";
import { useEffect, useRef } from "react";
import { useDarkMode } from "./context/DarkModeContext";
import ContactUs from "./contactUs/page";
import Projects from "./projects/page";
import Hero from "./hero/page";
import Skills from "./skills/page";


export default function Home() {
  const skillsRef = useRef(null);
  const { darkMode, setDarkMode } = useDarkMode();
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
      <ContactUs />
    </div>
  );
}
