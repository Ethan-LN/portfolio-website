import React from "react";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import Image from "next/image";
import Intro from "./Intro";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div>
      <div className="h-[800px] relative flex justify-center items-center space-y-8">
        <div className="absolute h-[760px] w-[760px] rounded-full border-2 border-r-transparent border-fuchsia-300 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] z-8" />
        <div className="absolute h-[620px] w-[620px] rounded-full border-2 border-r-transparent border-sky-300 align-[-0.125em] text-primary animate-[spin_20s_linear_infinite] z-8" />
        <div className="absolute h-[460px] w-[460px] rounded-full border-2 border-r-transparent border-gray-500 align-[-0.125em] text-primary animate-[spin_25s_linear_infinite] z-8" />
        <div className="absolute h-[280px] w-[280px] rounded-full border-2 border-r-transparent border-fuchsia-200 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] z-8" />
        <Intro />
      </div>
    </div>
  );
}
