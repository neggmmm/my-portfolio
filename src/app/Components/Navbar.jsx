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
    <div className="fixed top-0 w-full  ">
      <div className={`${darkMode?"bg-white":""} hover:bg-[#EDE8D0] transition-all duration-500 `} >
        <nav className="flex justify-between mx-20">
          <Link href={"#hero"}>
            <h1
            
              className={` text-3xl my-7 font-bold hover:text-white  rounded-full transition-all duration-500`}
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
            className={`transition-all duration-500   ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
          
            {/* <div className={`${darkMode?"bg-white":"bg-black"} translate-y-9 h-[2px] w-7 bg-black`} ></div>
            <div className={`${darkMode?"bg-white":"bg-black"} translate-y-11 h-[2px] w-7 bg-black`} ></div> */}
            <div className={` translate-y-9 h-[2px] w-7 bg-black`} ></div>
            <div className={` translate-y-11 h-[2px] w-7 bg-black`} ></div>
          </div>
          <ul
            className={` fixed right-0 top-0 w-[35%] h-full duration-500 bg-white ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute text-3xl my-7 right-20"
            >
              X
            </div>
            <div className=" flex flex-col h-full justify-between">
              <div>
                <div className="mt-20">
                  <p className="text-4xl mb-4 mx-15">Navigation</p>
                  <div className="group transition-all duration-500">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      Home
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      Projects
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      Skills
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 p-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      Contact-us
                    </li>
                    <Divider />
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-4xl mb-4 mx-15">Socials</p>
                  <div className="group transition-all duration-500">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      LINKEDIN
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      GITHUB
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      WHATSAPP
                    </li>
                    <Divider />
                  </div>
                  <div className="group transition-all duration-500">
                    <li className="px-15 py-2 font-semibold group-hover:bg-black group-hover:text-[#EDE8D0] transition-all duration-500">
                      +20 010 636 814 59
                    </li>
                    <Divider />
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div className="flex justify-center">
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
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
