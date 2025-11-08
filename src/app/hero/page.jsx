'use client'
import React, { useState } from "react";
import TextPressure from "../Components/TextPressure";
import Magnet from "../Components/Magnet";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import CircularText from "../Components/CricularText";
import { hover } from "motion";

export default function Hero() {
  const { darkMode } = useDarkMode();
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
  const [hoveredGitHub, setHoveredGitHub] = useState(false);
  return (

    <div id="hero" className="h-screen overflow-hidden select-none">

      <div className="grid grid-cols-3 my-30 h-[70%]">
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex flex-col justify-center mx-20 w-full ">
            <TextPressure
              text="Abdalkareem Negm"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              textColor="black"
              strokeColor="#ff0000"
              minFontSize={200}
            />
            <div className="text-3xl flex content-between justify-between flex-col">
              <div className="">
                <span>Software Engineer </span>|<span> Web Developer</span>
              </div>
            </div>
            <div className="flex">
            <Link 
            onMouseEnter={() => setHoveredLinkedIn(true)}
            onMouseLeave={() => setHoveredLinkedIn(false)}
            target="_blank"
            href="https://linkedin.com/in/neggmmm">
            <div className={`${hoveredGitHub?"bg-white text-black skew-x-0":"bg-black text-white"}  mt-10 py-2 px-6   skew-x-24 hover:-skew-x-24 transition-all duration-300   z-20`}>
              LINKEDIN
            </div>
            </Link>
             <Link 
             onMouseEnter={()=>setHoveredGitHub(true)}
              onMouseLeave={()=>setHoveredGitHub(false)}
              target="_blank"
             href="https://github.com/neggmmm">
            <div className={` mt-10 py-2 px-6  hover:text-white hover:bg-black  hover:skew-x-24 transition-all duration-300`}>
              GITHUB
            </div>
            
            </Link>
          </div>
          </div>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contactUs")?.scrollIntoView();
            }}
          >
            <div className="absolute bottom-40 right-40">
              <CircularText
                text="OPEN TO WORK | FULLSTACK | "
                onHover="pause"
                spinDuration={20}
                className="custom-class monoton-regular"
              />
            </div>
          </Link>
        </div>
      </div>

    </div>

  );
}
