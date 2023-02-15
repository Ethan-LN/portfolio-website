import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import imageHDR from "../Resouce/personal-B&W-HDR-no-bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10">
      <h1 className="text-3xl font-bold text-neutral-100 "> Ethan Lang Nicholas</h1>
      <div className="flex gap-10">
        <Image
          src={imageCartoonised}
          alt="my photo"
          className=" relative w-60 h-60 bg-neutral-100 rounded-full object-contain"
        />
        <Image
          src={imageHDR}
          alt="my photo HDR"
          className=" relative w-60 h-60 bg-gray-200 rounded-full object-contain"
        />
      </div>
    </main>
  );
}
