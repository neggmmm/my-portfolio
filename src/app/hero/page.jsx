'use client'
import React from "react";
import TextPressure from "../Components/TextPressure";
import CurvedLoop from "../Components/CurvedLoop";
import Magnet from "../Components/Magnet";
import {  useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

export default function Hero() {
  const { darkMode } = useDarkMode();
  return (
    
    <div className="h-screen overflow-hidden">
    
      <div className="grid grid-cols-3 my-30 h-[70%]">
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex flex-col justify-center mx-20">
            <TextPressure
              text="Abdalkareem Negm"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              textColor="black"
              strokeColor="#ff0000"
              minFontSize={44}
            />
            <div className="text-3xl flex content-between justify-between flex-col">
              <div className="">
                <span>Software Engineer </span>|<span> Web Developer</span>
              </div>
            </div>
            <div className=" flex ">
              <Magnet padding={20} disabled={false} magnetStrength={1.7}>
                <Link href={"#contactUs"}>
                <h1
                  className={`${darkMode?"hover:bg-white ":" text-black  border-[#EDE8D0] hover:bg-[#EDE8D0]"} hover:text-[#3e280f] text-3xl ml-5 mt-20 px-5 py-2 font-bold rounded-3xl border   transition-all duration-500`}
                >
                  Contact Me
                </h1>
                </Link>
              </Magnet>
            </div>
          </div>
          {/* <div className="w-screen ">
            <CurvedLoop
              marqueeText="React Developer ✦ Software Engineer ✦"
              speed={1.5}
              curveAmount={180}
              direction="right"
              interactive={true}
              className="custom-text-style"
            />
          </div> */}
        </div>
      </div>
      
    </div>
 
  );
}
