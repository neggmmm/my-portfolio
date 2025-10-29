import React from "react";
import TextPressure from "../Components/TextPressure";

export default function Hero() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 m-10 h-[70%]">
        <div className="col-span-2 flex flex-col justify-between">
          <div className="flex flex-col justify-center">
            <TextPressure
              text="Abdalkareem Negm"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="black"
              strokeColor="#ff0000"
              minFontSize={36}
            />
            <div className="text-3xl">
              <span>Software Engineer </span>|<span> Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
