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
  const [hoveredProject1, setHoveredProject1] = useState(null);
  const [hoveredProject2, setHoveredProject2] = useState(null);
  const [hoveredProject3, setHoveredProject3] = useState(null);
  const [hoveredProject4, setHoveredProject4] = useState(null);
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
      className="transition-transform duration-400 select-none"
      id="projects"
    >

      <div
        onMouseEnter={() => setHoveredProject1(true)}
        onMouseLeave={() => setHoveredProject1(false)}
        className="sticky top-23">

           <div className={`${hoveredProject1 ? "bg-black text-white border-black " : "bg-white text-black "} space-mono-bold border transition-all border-[#999] items-center px-3  w-full h-8 flex justify-between font-bold`}>
          <p>
            SaaS & White label Platform
          </p>
          <p className="flex justify-center items-center">
            ITI Graduation Project
          </p>
          <p>
            <MdArrowOutward />
          </p>

        </div>
        {/* </Link> */}
        <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background image that fills the entire card */}
          <Image
            src="/project-3.png"
            alt="Admin-dashboard"
            fill  // Next.js shortcut for full width + height
            className={`transition-all duration-300 object-cover ${hoveredProject1? "brightness-90" :"brightness-40"}`} // covers area + slightly faded
          />

          {/* Overlay text and content */}
           <div
              className={`${hoveredProject1? "opactiy-100" :"opacity-0"} transition-all duration-500 absolute text-[#232323] goldman-regular z-10 bottom-1/4  w-[30%] right-1/3 px-20 py-10 bg-white/40 backdrop-blur-sm`}>
            A SaaS and White label platform that enables restaurants to create and manage digital menus accessible via QR codes, enhancing customer experience and streamlining order management.
          <div className="flex items-center justify-center gap-8 mt-5">
                <Link href="https://github.com/GraduationMERN/restaurant-system" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-gray-900 hover:scale-110 transition-all duration-200" >
                  Github
                </Link>
                <Link href="https://brandbite-1ybv.vercel.app/" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-black hover:scale-110 transition-all duration-200" >
                  Live Demo
                </Link>
              </div>
          </div>
        </div> 
      </div>

      <div
        onMouseEnter={() => setHoveredProject2(true)}
        onMouseLeave={() => setHoveredProject2(false)}
        className="sticky top-28">
        <Link target="_blank" href="https://cloth-store-angular-three.vercel.app/">
          <div className={`${hoveredProject2 ? "bg-black text-white border-black" : "bg-white text-black "} space-mono-bold border transition-all border-[#999] items-center px-3  w-full h-8 flex justify-between font-bold`}>
            <p>
              Fashion Market
            </p>
            <p >
              Angular E-Commerce
            </p>
            <p>
              <MdArrowOutward />
            </p>
          </div>
         </Link>
          <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
            <Image
              src="/project-2.png"
              alt="e-commerce"
              fill  
              className={` transition-all duration-300 object-cover ${hoveredProject2? "brightness-90" :"brightness-40"}`} // covers area + slightly faded
            />

            <div
              className={`${hoveredProject2? "opactiy-100" :"opacity-0"} transition-all duration-500 absolute text-[#232323] goldman-regular z-10 bottom-1/4  w-[30%] right-1/3 px-20 py-10 bg-white/40 backdrop-blur-sm`}>
              An Angular-based e-commerce application with a focus on fashion products, featuring a user-friendly interface, product catalog, shopping cart, and secure checkout process.
             <div className="flex items-center justify-center gap-8 mt-5">
                <Link href="https://github.com/Fantasitc-4-2/cloth-store-angular" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-gray-900 hover:scale-110 transition-all duration-200" >
                  Github
                </Link>
                <Link href="https://cloth-store-angular-three.vercel.app/" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-black hover:scale-110 transition-all duration-200" >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
      </div>

      <div
        onMouseEnter={() => setHoveredProject3(true)}
        onMouseLeave={() => setHoveredProject3(false)}
        className="sticky top-33">
          <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/">
          <div
            className={`${hoveredProject3 ? "bg-black text-white border-black" : "bg-white text-black"} space-mono-bold  border transition-all border-[#999] items-center px-3  w-full h-8 flex justify-between font-bold`}>
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
          <div className="relative h-[100vh] flex items-end overflow-hidden">
            {/* Background image that fills the entire card */}
            <Image
              src="/project-1.png"
              alt="e-commerce"
              fill
              className={` transition-all duration-500 object-cover ${hoveredProject3? "brightness-90" :"brightness-40"}`} // covers area + slightly faded
            />

            {/* Overlay text and content */}
            <div
              className={`${hoveredProject3? "opactiy-100" :"opacity-0"} transition-all duration-500 absolute text-[#232323] goldman-regular z-10 bottom-1/4  w-[30%] right-1/3 px-20 py-10 bg-white/40 backdrop-blur-sm`}>
              An e-commerce platform built with React, Node.js, and MongoDB, featuring user authentication, product management, shopping cart functionality, and secure payment integration.
              <div className="flex items-center justify-center gap-8 mt-5">
                <Link href="https://github.com/Fantasitc-4-2/e-commerce-MERN" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-gray-900 hover:scale-110 transition-all duration-200" >
                  Github
                </Link>
                <Link href="https://e-commerce-mern-beige.vercel.app/" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-black hover:scale-110 transition-all duration-200" >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        {/* <Link target="_blank" href="https://e-commerce-mern-beige.vercel.app/"> */}
       
      </div>
      <div onMouseEnter={() => setHoveredProject4(true)}
        onMouseLeave={() => setHoveredProject4(false)}
        className="h-[150vh]">
        <div className="sticky top-38">
          <Link href="/">
            <div className={`${hoveredProject4 ? "bg-black text-white border-black" : "bg-white text-black"} space-mono-bold border transition-all border-[#999] items-center px-3  w-full h-8 flex justify-between font-bold`}>
              <p>
                PORTFOLIO
              </p>
              <p >
                NEGM
              </p>
              <p>
                WE ARE HERE
              </p>
            </div>
             </Link>
            <div ref={lastProjectRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
              {/* Background image that fills the entire card */}
              <Image
                src="/project-4.jpg"
                alt="e-commerce"
                fill
                className={`transition-all duration-300 object-cover ${hoveredProject4? "brightness-90" :"brightness-40"}`}
              />
              {/* Overlay text and content */}
               <div
              className={`${hoveredProject4? "opactiy-100" :"opacity-0"} transition-all duration-500 absolute text-[#232323] goldman-regular z-10 bottom-1/4  w-[30%] right-1/3 px-20 py-10 bg-white/40 backdrop-blur-sm`}>
                My personal portfolio website showcasing my projects, skills, and experience as a full-stack developer. Built with Next.js, Tailwind CSS and GSAP for animation.
              <div className="flex items-center justify-center gap-8 mt-5">
                <Link href="https://github.com/neggmmm/my-portfolio" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 rounded-full bg-gray-900 hover:scale-110 transition-all duration-200" >
                  Github
                </Link>
              </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
}
