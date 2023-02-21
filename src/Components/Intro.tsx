"use client";
import React from "react";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import Image from "next/image";
import { Cursor } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "✨ Hi, My Name Is Ethan Lang Nicholas 💻",
      "✨ GuyWhoLoveRunningAndHiking.jsx ",
      "✨ But_Loves_To_Codes_More.py",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <Image
        src={imageCartoonised}
        alt="my photo"
        className="w-40 h-40 bg-pink-100 rounded-full object-cover items-center mt-[150px]"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-[30px]">
          Software.Developer
        </h2>
        <div className="relative mt-[80px]">
          <div className="relative flex items-center justify-center">
            <h1 className="absolute flex flex-1 text-center text-sky-100 text-xl font-roboto bg-slate-900 border-rounded-md z-10">
              <span>{text}</span>
              <Cursor cursorColor="#f0abfc" />
            </h1>
            <h1 className="absolute text-center text-gray-500 text-8xl font-bodoni uppercase z-9">
              E L N
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-[100px] gap-5">
        <button className="categoryButton z-0">About</button>
        <button className="categoryButton z-0">Experience</button>
        <button className="categoryButton z-0">Skills</button>
        <button className="categoryButton z-0">Project</button>
      </div>
    </div>
  );
}
