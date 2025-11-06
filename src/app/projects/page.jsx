"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import { HoverBorderGradient } from "../Components/hover-border-gradient";
import BlurText from "../Components/BlurText";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const lastProjectRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const projectsRef = useRef(null);
  const [scale, setScale] = useState(1);
  const { setDarkMode, darkMode } = useDarkMode();
  const [btnHoverd, setBtnHovered] = useState(false);
  useEffect(() => {
    let ticking = false; // prevents spamming scroll updates

    const handleScroll = () => {
      if (!projectsRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = projectsRef.current.getBoundingClientRect();

          // Adjust scroll positions for smoother timing
          const startZoomAt = 1400.17;
          const endZoomAt = 800.65;

          // Calculate scroll progress (between 0 → 1)
          if (rect.bottom < startZoomAt && rect.bottom > endZoomAt) {
            const progress =
              1 - (rect.bottom - endZoomAt) / (startZoomAt - endZoomAt);

            // Scale goes from 1 → 0.95 instead of 1 → 0.9
            const newScale = 1 - progress * 0.05;
            setScale(newScale);
          } else if (rect.bottom <= endZoomAt) {
            setScale(0.9); // final zoom level
          } else {
            setScale(1);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!lastProjectRef.current) return;

      const rect = lastProjectRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the top of the last project has scrolled 100vh up
      if (rect.bottom < windowHeight) {
        // this means you've scrolled 100px into the 150vh section
        setTimeout(() => setDarkMode(true), 100);
      } else {
        setTimeout(() => setDarkMode(false), 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setDarkMode]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDir === "down") {
          setIsZooming(true); // zoom out when scrolling down
        } else if (!entry.isIntersecting && scrollDir === "up") {
          setIsZooming(false); // zoom back in when scrolling up
        }
      },
      { threshold: 0.8 } // trigger when it's mostly visible
    );

    if (lastProjectRef.current) observer.observe(lastProjectRef.current);
    return () => observer.disconnect();
  }, [scrollDir]);

  return (
    <div
      ref={projectsRef}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
        zIndex: 0
      }}
      className="transition-transform duration-400"
    >

      <div className="sticky top-23">
        <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/">
        <div
          className={`${darkMode ? "bg-black text-white  hover:bg-white hover:text-black" : "bg-white text-black  hover:bg-black hover:text-white"}  border transition-all border-black items-center px-3 rounded-t-2xl w-full h-8 flex justify-between font-bold`}>
          <p>
            X Market
          </p>
          <p >
            E-Commerce
          </p>
          <p>
            <MdArrowOutward />
          </p>
        </div>
        </Link>
        <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background image that fills the entire card */}
          <Image
            src="/project-1.png"
            alt="e-commerce"
            fill  // Next.js shortcut for full width + height
            className={`${btnHoverd?"opacity-60":"opacity-100"} transition-all duration-300 object-cover`} // covers area + slightly faded
          />

          {/* Overlay text and content */}
          <div className="relative z-10 top-40 flex flex-col items-center justify-between ">
           <BlurText
                        text="Electronics E Commerce"
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="text-4xl tracking-tighter "
                    />
            <HoverBorderGradient duration={0.5} 
            

             onMouseEnter={()=>setBtnHovered(true)}
            onMouseLeave={()=>setBtnHovered(false)}
            >
                Try it out
            </HoverBorderGradient>
        
          </div>
        </div>
      </div>

      <div className="sticky top-28">
        <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/">
        <div className={`${darkMode ? "bg-black text-white  hover:bg-white hover:text-black" : "bg-white text-black  hover:bg-black hover:text-white"} border transition-all border-black items-center px-3 rounded-t-2xl w-full h-8 flex justify-between font-bold`}>
          <p>
            NEGM's Portfolio
          </p>
          <p >
            Porftolio
          </p>
          <p>
            <MdArrowOutward />
          </p>
        </div>
        </Link>
          <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background image that fills the entire card */}
          <Image
            src="/project-3.png"
            alt="e-commerce"
            fill  // Next.js shortcut for full width + height
            className={`${btnHoverd?"opacity-100":"opacity-50"} transition-all duration-300 object-cover`} // covers area + slightly faded
          />

          {/* Overlay text and content */}
          <div className="relative z-10  flex  flex-col items-center justify-between">
            <h2 className="text-6xl font-bold mb-6">NEGM's Portfolio</h2>
            <button
            onMouseEnter={()=>setBtnHovered(true)}
            onMouseLeave={()=>setBtnHovered(false)}
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition-all">
              Try it out
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-33">
        
          <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/">
          <div className={`${darkMode ? "bg-black text-white  hover:bg-white hover:text-black" : "bg-white text-black  hover:bg-black hover:text-white"} border transition-all border-black items-center px-3 rounded-t-2xl w-full h-8 flex justify-between font-bold`}>
          <p>
            NEGM's Portfolio
          </p>
          <p >
            Porftolio
          </p>
          <p>
            <MdArrowOutward />
          </p>
          
        </div>
      </Link>
         <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background image that fills the entire card */}
          <Image
            src="/project-1.png"
            alt="e-commerce"
            fill  // Next.js shortcut for full width + height
            className={`${btnHoverd?"opacity-100":"opacity-50"} transition-all duration-300 object-cover`} // covers area + slightly faded
          />

          {/* Overlay text and content */}
          <div className="relative z-10  flex  flex-col items-center justify-between">
            <h2 className="text-6xl font-bold mb-6">Fashion Market</h2>
            <button
            onMouseEnter={()=>setBtnHovered(true)}
            onMouseLeave={()=>setBtnHovered(false)}
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition-all">
              Try it out
            </button>
          </div>
        </div>
      </div>
      <div className="h-[150vh]">
        <div className="sticky top-38">
          <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/">
          <div className={`${darkMode ? "bg-black text-white  hover:bg-white hover:text-black" : "bg-white text-black  hover:bg-black hover:text-white"} border transition-all border-black items-center px-3 rounded-t-2xl w-full h-8 flex justify-between font-bold`}>
            <p>
              NEGM's Portfolio
            </p>
            <p >
              Porftolio
            </p>
            <p>
              <MdArrowOutward />
            </p>
          </div>
          </Link>
           
           <div  ref={lastProjectRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background image that fills the entire card */}
          <Image
            src="/project-3.png"
            alt="e-commerce"
            fill  // Next.js shortcut for full width + height
            className={`${btnHoverd?"opacity-100":"opacity-50"} transition-all duration-300 object-cover`} // covers area + slightly faded
          />

          {/* Overlay text and content */}
          <div className="relative z-10  flex  flex-col items-center justify-between">
            <h2 className="text-6xl font-bold mb-6">NEGM's Portfolio</h2>
            <button
            onMouseEnter={()=>setBtnHovered(true)}
            onMouseLeave={()=>setBtnHovered(false)}
            className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white transition-all">
              Try it out
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
