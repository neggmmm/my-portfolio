import { useGSAP } from "@gsap/react";
import Link from "next/link";
import CircularText from "../Components/CricularText";
import gsap from "gsap";


export default function Hero() {
  useGSAP(()=>{
    gsap.to("name",{
      y:200,
      duration:1
    })
  },[])
  return (

    <div id="hero" className="h-screen overflow-hidden select-none">

      <div className="grid grid-cols-3 my-30 h-[70%]">
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex flex-col justify-center mx-20 w-full h-full goldman-regular">
            <div id="name" className="orbitron-reg text-8xl">
              Abdalkareem <span id="navbar-negm" className="orbitron-600"></span>
              </div>
            <div className="text-3xl flex content-between justify-between flex-col">
              <div className="">
                <span>Software Engineer </span>|<span> Web Developer</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 mt-5">
                <Link href="https://www.github.com/neggmmm/" target="_blank" className="flex justify-center items-center gap-2 text-black border border-[#aaa] py-2 px-4  bg-transparent hover:bg-black hover:scale-110 hover:border-black hover:text-[#FCFCFCFC] transition-all duration-200" >
                  Github
                </Link>
                <Link href="https://www.linkedin.com/in/neggmmm/" target="_blank" className="flex justify-center items-center gap-2 text-[#FCFCFC] py-2 px-4 border border-black bg-black hover:scale-110 transition-all duration-200" >
                  LinkedIn
                </Link>
              </div>
          </div>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contactUs")?.scrollIntoView();
            }}
          >
            <div className="absolute bottom-20 right-40">
              <CircularText
                text="OPEN TO WORK | FULLSTACK | "
                onHover="pause"
                spinDuration={20}
                className="custom-class "
              />
            </div>
          </Link>
        </div>
      </div>

    </div>

  );
}
