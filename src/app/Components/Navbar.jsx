"use client";
import React, { useState } from "react";
import Divider from "./Divider";
import Link from "next/link";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { darkMode } = useDarkMode();
  return (
    <div className={`fixed top-0 w-full z-50 select-none ${darkMode?"bg-transparent":"bg-white"}`}>
      <div className={`${darkMode?"":""}  transition-all duration-500 `} >
        <nav className="flex justify-between mx-20">
          <Link href={"/"}>
            <h1
            
              className={` ${darkMode?"text-white":"text-black"}  text-3xl my-7 font-bold rounded-full transition-all duration-500`}
            >
              NEGM
            </h1>
          </Link>
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
              setIsClicked(!isClicked);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`transition-all duration-500 cursor-pointer   ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
          
            <div className={`${darkMode?"bg-white":"bg-black"} translate-y-9 h-[2px] w-7 bg-black`} ></div>
            <div className={`${darkMode?"bg-white":"bg-black"} translate-y-11 h-[2px] w-7 bg-black`} ></div>
            {/* <div className={` translate-y-9 h-[2px] w-7 bg-black`} ></div>
            <div className={` translate-y-11 h-[2px] w-7 bg-black`} ></div> */}
          </div>
          <ul
            className={` fixed right-0 top-0 w-[35%] h-full duration-500 bg-white ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute text-3xl my-7 right-20 cursor-pointer"
            >
              X
            </div>
            <div className=" flex flex-col h-full justify-between">
              <div>
                <div className="mt-20">
                  <p className="text-4xl mb-4 mx-15">Navigation</p>
                  <div className="group ">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      HOME
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0]">
                      PROJECTS
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      SKILLS
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0]">
                      CONTACT US
                    </li>
                    <Divider />
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-4xl mb-4 mx-15">Socials</p>
                  <div className="group">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      <Link target="_blank" href="https://linkedin.com/in/neggmmm" >
                      LINKEDIN
                    </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] ">
                    <Link target="_blank" href="https://github.com/neggmmm" >
                      GITHUB
                    </Link>
                    </li>
                    <Divider />
                  </div>
                  <div className="group ">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] ">
                      WHATSAPP
                    </li>
                    <Divider />
                  </div>
                  <div className="group">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] select-text">
                      +20 010 636 814 59
                    </li>
                    <Divider />
                  </div>
                </div>
              </div>
              
                <div className="flex justify-center my-5">
                  <Link href={"#contactUs"}>
                  <button className="mt-20 group p-5 cursor-pointer relative  text-6xl font-normal border-0 flex items-center justify-centerbg-transparent text-black h-30 w-150  overflow-hidden  transition-all duration-400">
                    <span className="group-hover:w-full absolute  left-0  h-full   w-5  border-y border-l-2 border-black transition-all duration-500"></span>
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
