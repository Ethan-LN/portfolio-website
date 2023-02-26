import React from "react";
import Intro from "./Intro";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div>
      <div className="relative flex justify-center items-center space-y-8 overflow-hidden pt-16">
        <div className="absolute h-[660px] w-[660px] rounded-full md:border-2 border-r-transparent border-fuchsia-300 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] z-8" />
        <div className="absolute h-[520px] w-[520px] rounded-full sm:border-2 border-r-transparent border-sky-300 align-[-0.125em] text-primary animate-[spin_20s_linear_infinite] z-8" />
        <div className="absolute h-[360px] w-[360px] rounded-full border-2 border-r-transparent border-gray-500 align-[-0.125em] text-primary animate-[spin_25s_linear_infinite] z-8" />
        <div className="absolute h-[180px] w-[180px] rounded-full border-2 border-r-transparent border-fuchsia-200 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] z-8" />
        <Intro />
      </div>
    </div>
  );
}
