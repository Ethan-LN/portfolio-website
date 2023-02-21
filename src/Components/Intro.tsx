import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import BackgroundCircles from "./BackgroundCircles";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import Image from "next/image";

type Props = {};

export default function Intro({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
    </div>
  );
}
