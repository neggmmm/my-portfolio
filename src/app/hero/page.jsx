'use client'
import React from "react";
import TextPressure from "../Components/TextPressure";
import Magnet from "../Components/Magnet";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";
import CircularText from "../Components/CricularText";

export default function Hero() {
  const { darkMode } = useDarkMode();
  return (

    <div id="hero" className="h-screen overflow-hidden">

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
          </div>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault(); // stop URL change
              document.querySelector("#contactUs")?.scrollIntoView({ behavior: "smooth" });
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
