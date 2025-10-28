"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="bg-yellow-300">
      <nav className="flex justify-around ">
        <h1 className="text-3xl my-7 font-bold hover:text-white hover:bg-black p-5 rounded-full transition-all duration-500">
          NEGM
        </h1>
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
          <div className="flex flex-col justify-around">
            <li className="hover:underline m-2 hover:translate-x-5 transition-all duration-500 w-[30%]">
              Home
            </li>
            <li className="hover:underline m-2 hover:translate-x-5 transition-all duration-500 w-[30%]">
              About
            </li>
            <li className="hover:underline m-2 hover:translate-x-5 transition-all duration-500 w-[30%]">
              Contact
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
