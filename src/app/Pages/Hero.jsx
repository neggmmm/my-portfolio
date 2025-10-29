import React from "react";
import TextPressure from "../Components/TextPressure";
import CurvedLoop from "../Components/CurvedLoop";
import Magnet from "../Components/Magnet";

export default function Hero() {
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
              <div className="h-[50%] ">
                <button className="ml-5 mt-20 px-5 py-2 bg-black text-white rounded-full block hover:text-[#EDE8D0] transition-colors duration-300">
                  Contact Me
                </button>
                <Magnet padding={20} disabled={false} magnetStrength={1.7}>
                  <h1
                    className={` text-3xl ml-5 mt-5 px-5 py-2 font-bold text-black hover:text-[#3e280f] rounded-3xl border border-[#EDE8D0] hover:bg-[#EDE8D0]  transition-all duration-500`}
                  >
                    Projects
                  </h1>
                </Magnet>
              </div>
            </div>
          </div>
          <div className="w-screen ">
            <CurvedLoop
              marqueeText="React Developer ✦ Software Engineer ✦"
              speed={1.5}
              curveAmount={180}
              direction="right"
              interactive={true}
              className="custom-text-style"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
