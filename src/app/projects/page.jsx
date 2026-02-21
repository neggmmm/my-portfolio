"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

export default function Projects() {
  const [isZooming, setIsZooming] = useState(false);
  const lastProjectRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const projectsRef = useRef(null);
  const [scale, setScale] = useState(1);
  const { setDarkMode, darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      { threshold: 0.8 }, // trigger when it's mostly visible
    );

    if (lastProjectRef.current) observer.observe(lastProjectRef.current);
    return () => observer.disconnect();
  }, [scrollDir]);

  const projects = [
    {
      title: "SaaS & White label Platform",
      subTitle: "ITI Graduation Project",
      arrow: true,
      description:
        "A SaaS and White label platform that enables restaurants to create and manage digital menus accessible via QR codes, enhancing customer experience and streamlining order management.",
      image: "/project-3.png",
      github: "https://github.com/GraduationMERN/restaurant-system",
      live: "https://brandbite-1ybv.vercel.app/"
    },
    {
      title: "Fashion Market",
      subTitle: "Angular E-Commerce",
      arrow: true,
      description: "An Angular-based e-commerce application with a focus on fashion products, featuring a user-friendly interface, product catalog,shopping cart, and secure checkout process.",
      image: "/project-2.png",
      github: "https://cloth-store-angular-three.vercel.app/",
      live: "https://cloth-store-angular-three.vercel.app/"
    },
    {
      title: "X Market",
      subTitle: "MERN E-Commerce",
      arrow: true,
      description:
        " An e-commerce platform built with React, Node.js, and MongoDB, featuring user authentication, product management, shopping cart functionality, and secure payment integration.",
      image: "/project-1.png",
      github: "",
      live: "https://ecommerce-platform-graduation.vercel.app/"
    },
    {
      title: "PORTFOLIO",
      subTitle: "NEGM",
      description:
        "My personal portfolio website showcasing my projects, skills, and experience as a full-stack developer. Built with Next.js, Tailwind CSS and GSAP for animation.",
      image: "/project-4.jpg",
      github: "https://github.com/neggmmm/my-portfolio",
    }
  ]
  return (
    <div
      ref={projectsRef}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
        zIndex: 0,
      }}
      className="transition-transform text-xs md:text-lg  duration-400 select-none"
      id="projects"
    >
      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="sticky"
            style={{position: "sticky", top: `${100 + index * 20}px` }}   // ✅ dynamic sticky
          >
            {/* Header */}
            <div
              className={`${isHovered
                ? "bg-black text-white border-black"
                : "bg-white text-black"
                } space-mono-bold border transition-all border-[#dedede] items-center px-3 w-full h-8 flex justify-between font-bold`}
            >
              <p>{project.title}</p>
              <p>{project.subTitle}</p>
              {project.arrow ? <MdArrowOutward /> : <p>WE ARE HERE</p>}
            </div>

            {/* Image Section */}
            <div className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-white">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`transition-all duration-300 object-cover ${isHovered ? "brightness-90" : "brightness-40"
                  }`}
              />

              {/* Overlay */}
              <div
                className={`${isHovered ? "opacity-100" : "opacity-0"
                  } transition-all duration-500 md:absolute text-[#232323] goldman-regular z-10 bottom-1/4 md:w-[30%] right-1/3 px-20 py-10 bg-white/40 backdrop-blur-sm`}
              >
                {project.description}

                <div className="flex items-center gap-8 mt-5">
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      Github
                    </Link>
                  )}

                  {project.live && (
                    <Link href={project.live} target="_blank">
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
