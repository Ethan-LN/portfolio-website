import React from "react";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import Image from "next/image";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div>
      <div className="h-[800px] relative flex justify-center items-center">
        <div className="absolute h-[760px] w-[760px] rounded-full border-4 border-r-transparent border-fuchsia-300 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite]" />
        <div className="absolute h-[620px] w-[620px] rounded-full border-4 border-r-transparent border-sky-300 align-[-0.125em] text-primary animate-[spin_20s_linear_infinite]" />
        <div className="absolute h-[460px] w-[460px] rounded-full border-4 border-r-transparent border-gray-500 align-[-0.125em] text-primary animate-[spin_25s_linear_infinite]" />
        <div className="absolute h-[280px] w-[280px] rounded-full border-4 border-r-transparent border-fuchsia-200 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite]" />
        <Image
        src={imageCartoonised}
        alt="my photo"
        className="w-40 h-40 bg-pink-200 rounded-full object-cover items-center"
      />
      </div>

    </div>
  );
}
