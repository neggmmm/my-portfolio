import React from "react";
import ScrollReveal from "../Components/ScrollReveal";

export default function Skills() {
  return (
    <div id="skills" className="relative overflow-hidden select-none z-21 mx-20 goldman-regular">

      {/* Scroll sections */}
      <div className="text-9xl">
        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"redux | Hooks | class/function components"}
        >
          React
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"express | nest | layered architecture | RESTful APIs | GraphQL | JWT"}
        >
          NodeJS
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"PostgreSQL | MongoDB | MySQL | Sequelize | Mongoose"}
        >
          DATABASE
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={20}
          baseRotation={5}
          skills={"GSAP | Framer Motion | Lottie | CSS animations | scroll-triggered animations"}
        >
          Animations
        </ScrollReveal>
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
