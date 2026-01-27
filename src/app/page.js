"use client";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "./context/DarkModeContext";
import ContactUs from "./contactUs/page";
import Projects from "./projects/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import PixelCursorDot from "./Components/PixelCursorDot";

export default function Home() {
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const { darkMode, setDarkMode, menuOpen } = useDarkMode();
  const [cursorColor, setCursorColor] = useState("#000");

  const contactRef = useRef(null);
  const [pixelEnabled, setPixelEnabled] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(skillsRef.current);
    // observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCursorColor(darkMode && !menuOpen ? "#fff" : "#000");
  }, [darkMode, menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPixelEnabled(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`transition-colors duration-1000 ${
        darkMode ? "bg-[#111] text-white" : "bg-white text-[#111]"
      }`}
    >
      <PixelCursorDot color={cursorColor} />
      <Hero />
      <div ref={aboutRef}></div>
      <Projects />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
}
