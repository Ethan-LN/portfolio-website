import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center overflow-hidden ">
      <BackgroundCircle />
      {/* <Image
              src={imageCartoonised}
              alt="my photo"
              className="relative w-40 h-40 bg-pink-200 rounded-full object-cover items-center"
            /> */}
    </div>
  );
}
