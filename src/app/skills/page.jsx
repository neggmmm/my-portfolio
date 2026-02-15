import React from "react";
import ScrollReveal from "../Components/ScrollReveal";

export default function Skills() {
  const skills = [
  {skill:"Frontend", details:"React | NextJs | Angular | Tailwind | React Hooks | Redux | React Query | Lazy Loading | Component Architecture "},
  {skill:"Backend", details:"NodeJs | Express | NestJs | RESTful APIs | API validation | Backend Architecture | GraphQL | JWT Authentication | Webhooks"},
  {skill:"Database", details:"PostgreSQL | MongoDB | MySQL | Sequelize | Redis | Mongoose | Database Design | Data Modeling | Query Optimization"},
  {skill:"Animations", details:"GSAP | Framer Motion | Lottie | CSS animations | scroll-triggered animations"}]
  return (
    <div
      id="skills"
      className="relative -mt-30 overflow-hidden lg:h-[120vh] select-none z-21 mx-20 goldman-regular"
    >
      {/* Scroll sections */}
      <div className="text-9xl">
        {skills.map((item, index) => (
          <React.Fragment key={index}>
          <ScrollReveal
            baseOpacity={20}
            baseRotation={5}
            skills={item.details}
          >
            {item.skill}
          </ScrollReveal>
          <p className="block lg:hidden text-lg text-[#aaa5a5]">{item.details}</p>
          </React.Fragment>
        ))}
      </div>

      {/* Centralized overlay text */}
      <div className="fixed inset-0 hidden lg:flex items-center justify-end pointer-events-none mr-20 ">
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
