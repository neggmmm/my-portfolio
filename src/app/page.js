"use client";
import { useEffect, useRef } from "react";
import { useDarkMode } from "./context/DarkModeContext";
import ContactUs from "./contactUs/page";
import Projects from "./projects/page";
import Hero from "./hero/page";
import Skills from "./skills/page";


export default function Home() {
  const skillsRef = useRef(null);
  const aboutRef = useRef(null)
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
    // observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`transition-colors duration-1000 ${
        darkMode ? "bg-[#111] text-white" : "bg-white text-[#111]"
      }`}
    >
      <Hero />
      <div ref={aboutRef}>
      </div>
      <Projects />
      <div ref={skillsRef}>
      <Skills />
      <ContactUs />
      </div>
    </div>
  );
}
