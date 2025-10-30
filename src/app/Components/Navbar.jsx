"use client";
import React, { useState } from "react";
import Magnet from "./Magnet";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="hover:bg-[#EDE8D0] transition-all duration-500">
        <nav className="flex justify-around ">
          <Magnet padding={50} disabled={false} magnetStrength={2}>
            <h1
              className={` text-3xl my-7 font-bold hover:text-white  rounded-full transition-all duration-500`}
            >
              NEGM
            </h1>
          </Magnet>
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
              setIsClicked(!isClicked);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`transition-all duration-500   ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <span>_____</span>
            <span
              className={`text-[#ccc] transition-all  duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              ____
            </span>
            <span
              className={`text-[#ccc] transition-all duration-400 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              ____
            </span>

            <div
              className={`mt-3 rounded-xl hover:text-white hover:bg-black  px-5`}
            >
              OPEN
            </div>
            <span>_____</span>
            <span
              className={`text-[#ccc] transition-all  duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              ____
            </span>
            <span
              className={`text-[#ccc] transition-all duration-400 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              ____
            </span>
          </div>
          <ul
            className={`fixed right-0 top-0 w-[20%] h-full bg-black text-white duration-500 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute text-5xl right-5"
            >
              X
            </div>
            <div className="flex flex-col h-[40%] content-end justify-around">
              <li className="hover:underline text-3xl m-2 hover:translate-x-5 transition-all duration-500 w-[30%]">
                Home
              </li>
              <li className="hover:underline m-2 text-3xl hover:translate-x-5 transition-all duration-500 w-[30%]">
                About
              </li>
              <li className="hover:underline m-2 text-3xl hover:translate-x-5 transition-all duration-500 w-[30%]">
                Contact
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
