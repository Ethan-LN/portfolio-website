"use client";
import React from "react";
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
    <div className="flex flex-col justify-center items-center text-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Fpersonal-bg-potrait.jpeg?alt=media&token=b6342d50-e7d2-42f9-8dee-7897228c9a57"
        alt="my photo"
        className="w-[120px] h-[120px] bg-pink-100 rounded-full object-cover items-center mt-[280px]"
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
      <div className="flex mt-[100px] gap-4">
        <a href="#about" className="relative">
          <button className="categoryButton z-20" >About</button>
        </a>
        <a href="#skills" className="relative">
          <button className="categoryButton z-20">Skills</button>
        </a>
        <a href="#projects" className="relative">
          <button className="categoryButton z-20">Projects</button>
        </a>
      </div>
    </div>
  );
}
