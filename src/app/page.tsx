import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import imageHDR from "../Resouce/personal-B&W-HDR-no-bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-10 flex-col md:flex-row">
      <div className="flex items-center flex-col gap-10">
        <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
          Ethan Lang Nicholas
        </h1>
        <div className="flex flex-col gap-10">
          <Image
            src={imageCartoonised}
            alt="my photo"
            className=" relative w-60 h-60 bg-neutral-100 rounded-full object-contain"
          />
        </div>
      </div>
      <div className="flex items-center flex-col">
        <h2 className="text-xl font-bold text-neutral-100">About Me</h2>
        <p className="text-gray-100 p-10">
          I'm a Junior web and software developer recently graduate from
          University of Melbourne with one year of experience building engaging
          and responsive websites. I'm passionate about designing and developing
          custom solutions that meet the unique needs of my clients. I
          specialize in React, Javascirpt, tailwind, node.js python etc. and
          have a deep understanding of web development best practices. From
          building simple, static websites to complex, dynamic web applications,
          I've worked on a wide variety of projects that have helped me refine
          my skills and broaden my expertise. 
        </p>
      </div>
      <div></div>
    </main>
  );
}
