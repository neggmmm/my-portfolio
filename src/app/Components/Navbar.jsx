"use client";
import React, { useState, useEffect } from "react";
import Divider from "./Divider";
import Link from "next/link";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setMenuOpen: setGlobalMenuOpen } = useDarkMode();

  useEffect(() => {
    setGlobalMenuOpen(menuOpen);
  }, [menuOpen, setGlobalMenuOpen]);
  const eRotateStart = () =>{
     gsap.killTweensOf("#eLogo");
    gsap.to("#eLogo", {
      rotationY: 180,   
      duration: 1,     
      ease: "power2.out",  
     
    });
  }
  const eRotateEnd = () =>{
     // hint: bring the letter back to its original state
      gsap.killTweensOf("#eLogo");
    gsap.to("#eLogo", {
      rotationY: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  }

    const mRotateStart = () =>{
       gsap.killTweensOf("#mLogo");
    gsap.to("#mLogo", {
      rotationY: 360,   
      duration: 0.5,     
      ease: "power2.out",  
      transformOrigin: "center center" 
    });
  }
  const mRotateEnd = () =>{
     // hint: bring the letter back to its original state
      gsap.killTweensOf("#mLogo");
    gsap.to("#mLogo", {
      rotationY: 0,
      duration: 1,
      ease: "power2.out"
    });
  }
  return (
    <div className={`fixed top-0 w-full z-50 select-none ${darkMode ? "bg-transparent" : "bg-white"}`}>
      <div className={`${darkMode ? "" : ""}  transition-all duration-500 `} >
        <nav className="flex justify-between mx-20">
          <Link href={"/"}>
           <h1
  onMouseEnter={() => {eRotateStart(); mRotateStart()}}
  onMouseLeave={() => {eRotateEnd(); mRotateEnd()}}
  className={`${darkMode ? "text-white" : "text-black"} text-3xl my-7 font-bold rounded-full transition-all duration-500`}
>
  N<span className="inline-block" id="eLogo">E</span>G<span id="mLogo" className="inline-block">M</span>
</h1>
          </Link>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 cursor-pointer z-60 mt-4"
          >
            {/* top bar */}
            <div className={`
        absolute left-1/2 -translate-x-1/2 w-12 h-[2px] origin-center  duration-300 transition-transform 
       ${menuOpen ? "bg-black" : darkMode ? "bg-white" : "bg-black"}
        ${menuOpen
                ? "top-1/2 -translate-y-1/3 rotate-45 bg-black"
                : "top-[calc(50%-8px)] translate-y-0 rotate-0"
              }
      `} />
            {/* bottom bar */}
            <div className={`
        absolute left-1/2 -translate-x-1/2 w-12 h-[2px] origin-center duration-300 transition-transform 
        ${menuOpen
                ? "top-1/2 -translate-y-1/3 -rotate-45 bg-black"
                : "top-[calc(50%+8px)] translate-y-0 rotate-0"
              }
        ${menuOpen ? "bg-black" : darkMode ? "bg-white" : "bg-black"}
      `} />
          </div>
          <ul
            className={` fixed right-0 top-0 w-full md:w-[50%] xl:w-[35%] h-full duration-500 bg-white ${menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className=" flex flex-col h-full justify-between goldman-regular">
              <div>
                <div className="mt-20">
                  <p className="text-4xl mb-4 mx-15">Navigation</p>
                  <div className="group ">
                    <li className="px-15 p-1 group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link
                        href="/"
                        onClick={(e) => {
                          e.preventDefault(); // stop URL change
                          document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false); // close menu
                        }}
                      >
                        HOME
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-1 group-hover:bg-black group-hover:text-[#EDE8D0]">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // stop URL change
                          document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false); // close menu
                        }}
                      >
                        PROJECTS
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // stop URL change
                          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false); // close menu
                        }}
                      >
                        SKILLS
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0]">
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(); // stop URL change
                          document.querySelector("#contactUs")?.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false); // close menu
                        }}
                      >
                        CONTACT US
                      </Link>

                    </li>
                    <Divider />
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-4xl mb-4 mx-15">Socials</p>
                  <div className="group">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href="https://linkedin.com/in/neggmmm" >
                        LINKEDIN
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-1 group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href="https://github.com/neggmmm" >
                        GITHUB
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group ">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href={"https://wa.me/201063681459?text=Hello, I like your portfolio"}>
                        WHATSAPP
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group ">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href={"mailto:abdalkareemnegm@gmail.com"}>
                        EMAIL
                      </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group ">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href={"https://www.upwork.com/freelancers/~01d5e39e4861b93c37"}>
                        UPWORK
                      </Link>
                    </li>
                    <Divider />
                  </div>

                   <div className="group ">
                    <li className="px-15 p-1  group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href={"https://leetcode.com/u/neggmmm/"}>
                        LEETCODE
                      </Link>
                    </li>
                    <Divider />
                  </div>
                </div>
              </div>

              <div className="flex justify-center my-5">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // stop URL change
                    document.querySelector("#contactUs")?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false); // close menu
                  }}
                >
                  <button className="h-20 w-110 p-5 text-5xl md:mt-10 md:h-15 md:w-90 md:p-2 md:text-3xl xl:mt-20 xl:h-25 xl:w-110 xl:p-4 xl:text-5xl  2xl:mt-20 2xl:h-30 2xl:w-130 2xl:p-5  group  cursor-pointer relative  font-normal border-0 flex items-center justify-centerbg-transparent text-black overflow-hidden  transition-all duration-400">
                    <span className="group-hover:w-full absolute  left-0  h-full w-5  border-y border-l-2 border-black transition-all duration-500"></span>
                    <div className="group-hover:opacity-0 flex justify-around absolute translate-x-0 transition-all duration-200">
                      <span>
                        <HiArrowTurnDownRight />
                      </span>
                      <p>GET IN TOUCH</p>
                    </div>
                    <span className="group-hover:translate-x-0 flex  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-500">
                      <span>
                        <HiArrowTurnDownRight />
                      </span>
                      <p>GET IN TOUCH</p>
                    </span>
                    <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r-2  border-black transition-all duration-700"></span>
                  </button>
                </Link>
              </div>

            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
