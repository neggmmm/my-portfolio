"use client";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-black mb-20 pb-20">
      <div className="flex justify-between sticky top-20  h-[100vh] bg-white rounded-4xl">
        <div className=" bg-white flex flex-col justify-between items-center w-[40%]">
          <p className=" ml-50  w-full h-10 font-bold flex justify-center items-center">
            - E-Commerce -
          </p>
          <h2 className="text-6xl">Electronics E-Commerce</h2>
          <p className="text-3xl text-black mb-20 hover:underline my-20">
            Try it out
          </p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1000}
            src="/project-1.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      <div className="flex justify-between top-30 text-white h-[100vh] bg-black sticky ">
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <p className=" ml-50  w-full h-10 font-bold flex justify-center items-center">
            - E-Commerce -
          </p>
          <h2 className="text-6xl">Electronics E-Commerce</h2>
          <p className="text-3xl hover:underline my-20">Try it out</p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-2.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      <div className="flex justify-between text-black h-[100vh] bg-white sticky top-40">
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <p className=" ml-50  w-full h-10 font-bold flex justify-center items-center">
            - E-Commerce -
          </p>
          <h2 className="text-6xl">Fashion Market</h2>
          <p className="text-3xl text-black my-20">
            Angular - Node - Express - MongoDB - TailwindCSS
          </p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-3.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      <div className="flex justify-between  text-white h-[100vh] bg-black sticky top-50 ">
        <div className=" flex flex-col justify-between items-center w-[40%]">
          <p className="bg-black ml-50 text-white w-full h-10 font-bold flex justify-center items-center">
            - E-Commerce -
          </p>
          <h2 className="text-6xl">Electronics E-Commerce</h2>
          <p className="text-3xl hover:underline my-20">Try it out</p>
        </div>
        <div className="h-full flex items-center hover:opacity-50 transition-all duration-500">
          <Image
            width={1000}
            height={1200}
            src="/project-2.png"
            alt="e-commerce"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
    </div>
  );
}
