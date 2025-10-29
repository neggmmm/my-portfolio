import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function Projects() {
  return (
    <div className="mt-20 ">
      <ScrollStack useWindowScroll>
        <ScrollStackItem>
          <h2>E-Commerce</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
