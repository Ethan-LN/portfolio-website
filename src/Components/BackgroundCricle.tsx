import React from "react";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute h-[760px] w-[760px] rounded-full border-4 border-r-transparent border-fuchsia-300 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] mt-[760px]" />
      <div className="absolute h-[620px] w-[620px] rounded-full border-4 border-r-transparent border-sky-300 align-[-0.125em] text-primary animate-[spin_20s_linear_infinite] mt-[760px]"/>
      <div className="absolute h-[460px] w-[460px] rounded-full border-4 border-r-transparent border-gray-500 align-[-0.125em] text-primary animate-[spin_25s_linear_infinite] mt-[760px]" />
      <div className="absolute h-[280px] w-[280px] rounded-full border-4 border-r-transparent border-fuchsia-200 align-[-0.125em] text-primary animate-[spin_30s_linear_infinite] mt-[760px]"/>
    </div>
  );
}
