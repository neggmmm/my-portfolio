"use client";
import React, { useState } from "react";
import Magnet from "./Magnet";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full">
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
            onClick={() => setMenuOpen(!menuOpen)}
            className=" transition-all duration-500 hover:text-white"
          >
            <div>_____</div>
            <div className="mt-3 rounded-xl hover:bg-black px-5 ">OPEN</div>
            <div>_____</div>
          </div>
          <ul
            className={`fixed right-0 top-0 w-[20%] h-full bg-black text-white duration-500 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-[50%]  justify-around">
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
