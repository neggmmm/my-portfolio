"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";


export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const lastProjectRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const projectsRef = useRef(null);
  const [scale, setScale] = useState(1);


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
      <div className="border hover:bg-black hover:text-white transition-all border-black items-center px-3 rounded-t-2xl bg-white   w-full h-8 flex justify-between font-bold">
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
      <div className="flex h-[100vh] justify-between sticky  top-28  bg-[#EDE8D0] w-full ">
        

        <div className=" flex  justify-between items-center w-[40%]">
          <div className="h-[80%] flex flex-col justify-around">
            <h2 className="text-6xl font-bold">Electronics E-Commerce</h2>
            <div className="text-[#444]">
              <p className="">
                I have built an E-commerce using React, tailwindCSS, MUI for
                Frontend, useMemo for lazy Loading{" "}
              </p>
              <p>For backend i have used Node, Express, Mongoose, MongoDB</p>
            </div>
            <p className="text-3xl text-black mb-20 hover:underline my-20 flex justify-center">
              Try it out
            </p>
          </div>
        </div>
       
        
        <div className=" flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1000}
            src="/project-1.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
         </div>
      </div>
      
        <div className="sticky top-28">
        <div className="border hover:bg-black hover:text-white transition-all border-black items-center px-3 rounded-t-2xl bg-white w-full h-8 flex justify-between font-bold">
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
      <div className="flex justify-between top-25 text-black h-[95vh] bg-white  ">
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <h2 className="text-6xl">Electronics E-Commerce</h2>
          <p className="text-3xl hover:underline my-20">Try it out</p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-2.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      </div>

      <div className="sticky top-33">
         <div className="border hover:bg-black hover:text-white transition-all border-black items-center px-3 rounded-t-2xl bg-white w-full h-8 flex justify-between font-bold">
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

      <div className="flex justify-between text-white h-[85vh] bg-black sticky top-40">
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <p className=" ml-50  w-full h-10 font-bold flex justify-center items-center">
            - Fashion Market Using MEAN -
          </p>
          <h2 className="text-6xl">Fashion Market</h2>
          <p className="text-3xl  my-20">
            Angular - Node - Express - MongoDB - TailwindCSS
          </p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-3.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      </div>
      <div className="h-[150vh]">
      <div className="sticky top-38">
          <div className="border hover:bg-black hover:text-white transition-all border-black items-center px-3 rounded-t-2xl bg-white w-full h-8 flex justify-between font-bold">
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
      <div
        ref={lastProjectRef}
        className={`flex justify-between text-black h-[85vh] bg-[#EDE8D0] sticky top-50 transition-all duration-700`}
      >
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <p className=" ml-50 w-full h-10 font-bold flex justify-center items-center">
            - E-Commerce -
          </p>
          <h2 className="text-6xl">Electronics E-Commerce</h2>
          <p className="text-3xl hover:underline my-20">Try it out</p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-2.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
