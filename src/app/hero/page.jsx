"use client";
import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="h-screen overflow-hidden select-none">
      <div className="grid grid-cols-3 my-30 h-[70%]">
        <div className="col-span-2 flex flex-col">
          <div className="flex flex-col justify-center my-30 md:my-5 mx-20 w-full  goldman-regular">
            <div className="text-8xl orbitron-regular">
              <span className="hidden lg:block">Abdalkareem</span>{" "}
              <span className="text-brand orbitron-bold block ">NEGM</span>
            </div>
            <div className="text-3xl flex content-between justify-between flex-col">
              <div className="">
                <span>Software Engineer </span>|<span> Web Developer</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 mt-5">
              <Link
                href="https://www.github.com/neggmmm/"
                target="_blank"
                className="flex justify-center items-center gap-2 text-black border border-[#aaa] py-2 px-4  bg-transparent hover:bg-black hover:scale-110 hover:border-black hover:text-[#FCFCFCFC] transition-all duration-200"
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/neggmmm/"
                target="_blank"
                className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 border border-black bg-black hover:scale-110 transition-all duration-200"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
