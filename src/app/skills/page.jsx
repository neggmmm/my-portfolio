import React from "react";
import ScrollReveal from "../Components/ScrollReveal";

export default function Skills() {
  return (
    <div id="skills" className="relative -mt-30 overflow-hidden lg:h-[120vh] select-none z-21 mx-20 goldman-regular">

      {/* Scroll sections */}
      <div className="text-9xl">
        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"React | NextJs | Angular | Tailwind | React Hooks | Redux | React Query | Lazy Loading | Component Architecture "}
        >
          Frontend
        </ScrollReveal>
        <p className="block lg:hidden text-lg text-[#aaa5a5]">React | NextJs | Angular | Tailwind | React Hooks | Redux | React Query | Lazy Loading </p>
        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"NodeJs | Express | NestJs | RESTful APIs | API validation | Backend Architecture | GraphQL | JWT Authentication | Webhooks"}
        >
          Backend
        </ScrollReveal>
        <p className="block lg:hidden text-lg text-[#aaa5a5]">NodeJs | Express | NestJs | RESTful APIs | API validation | Backend Architecture | GraphQL | JWT Authentication | Webhooks</p>
        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"PostgreSQL | MongoDB | MySQL | Sequelize | Redis | Mongoose | Database Design | Data Modeling | Query Optimization"}
        >
          Database
        </ScrollReveal>
        <p className="block lg:hidden text-lg text-[#aaa5a5]">PostgreSQL | MongoDB | MySQL | Sequelize | Redis | Mongoose | Database Design | Data Modeling | Query Optimization</p>
        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"GSAP | Framer Motion | Lottie | CSS animations | scroll-triggered animations"}
        >
          Animations
        </ScrollReveal>
        <p className="block lg:hidden text-lg text-[#aaa5a5]">GSAP | Framer Motion | Lottie | CSS animations</p>
      </div>

      {/* Centralized overlay text */}
      <div className="fixed inset-0 hidden md:flex items-center justify-end pointer-events-none mr-20 ">
        <div className="w-1/3">
        <p
          id="customized-overlay"
          className="text-3xl font-bold opacity-0 transition-opacity duration-300 text-center"
        ></p>
        </div>
      </div>
    </div>
  );
}
