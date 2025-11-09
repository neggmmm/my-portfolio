import React from "react";
import ScrollReveal from "../Components/ScrollReveal";

export default function Skills() {
  return <div id="skills" className="mx-20 overflow-hidden select-none z-21 text-9xl goldman-regular">
   
  <ScrollReveal
  baseOpacity={20}
  baseRotation={5}
  skills={"redux | Hooks | class/ funciton components"}
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
  skills={"PostgreSQL | MongoDB | MySQL | Squelize | Mongoose"}
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
}
