import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import imageHDR from "../Resouce/personal-B&W-HDR-no-bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-10 flex-col md:flex-row justify-center">
      <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
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
      <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
        <h2 className="text-xl font-bold text-neutral-100">About Me</h2>
        <p className="text-gray-100 p-10 ">
          I'm a junior web/software developer who's passionate about building engaging
          and user-friendly websites. I've recently completed my Computational Science Degree or
          and bootcamp program in web development and I'm excited to start my
          career in this exciting field. I have experience in React, tailwind css, node.js, python etc. and I'm eager to learn more and expand my skillset.
          I'm familiar with web development best practices. I'm always looking for
          opportunities to learn and grow, and I'm eager to work with more
          experienced developers who can help me improve my skills.
        </p>
        <p className="text-gray-100">---------------------------------</p>
      </div>
      <div></div>
    </main>
  );
}
