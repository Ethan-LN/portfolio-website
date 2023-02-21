import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import imageCartoonised from "../Resouce/personal-catoonized-no-bg.png";
import imageEcom from "../Resouce/E-commerce.png";
import imageInsta from "../Resouce/instagram-clone.png";
import imageTodo from "../Resouce/to-do-list.png";
import Image from "next/image";
import Header from "@/Components/Header";
import Intro from "@/Components/Intro";
import BackgroundCircles from "@/Components/BackgroundCircles";

export default function Home() {
  return (
    <main>
      <section className="snap-center">
        <Header />
        <BackgroundCircles />
      </section>
      <section className="snap-center">
      {/* <div className="relative flex items-center justify-center">
          <h1 className="absolute flex flex-1 text-center text-white text-lg bg-slate-900 border-rounded-md z-10">           Hi, my name is Ethan           </h1>
          <h1 className="absolute text-center text-gray-500 text-8xl font-bodoni uppercase z-0">E L N</h1>
        </div> */}
        <div className="flex gap-10 flex-col md:flex-row justify-center">
          <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
            <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
              Ethan Lang Nicholas
            </h1>
            <div className="flex flex-col gap-10">
              <Image
                src={imageCartoonised}
                alt="my photo"
                className=" w-60 h-60 bg-pink-200 rounded-full object-contain "
                // md:rounded-3xl md:w-[300px] md:h-[400px] md:bg-transparent
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
            <h2 className="text-xl font-bold text-neutral-100">About Me</h2>
            <p className="text-neutral-100 p-10 ">
              I&apos;m a junior web/software developer who&apos;s passionate
              about building engaging and user-friendly web apps and softwares.
              I&apos;ve recently completed my Computational Science Degree and
              bootcamp program in web development and I&apos;m excited to start
              my career in this field. I have experience in React,
              tailwind css, node.js, python etc. and I&apos;m eager to learn
              more and expand my skillset. I&apos;m familiar with web
              development best practices. I&apos;m always looking for
              opportunities to learn and grow.
            </p>
            <div className="border border-fuchsia-300 w-[80%]"/>
          </div>
        </div>
      </section>
      <section className="snap-center">
      {/* Instagram */}
      <div className="flex gap-10 flex-col md:flex-row justify-center">
        <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
            Instagram Clone and Firebase
          </h1>
          <div className="flex flex-col gap-10">
            <Image
              src={imageInsta}
              alt="instagram-clone"
              className=" relative w-100 rounded-md object-contain max-w-md"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
          <h2 className="text-xl font-bold text-neutral-100">Highlight</h2>
          <p className="text-gray-400 p-10 ">
            This is a instagrame clone with firebase auth and storage.
          </p>
          <div className="border border-fuchsia-300 w-[80%]"/>
        </div>
      </div>
      </section>
      <section className="snap-center">
      {/*E-commerce  */}
      <div className="flex gap-10 flex-col md:flex-row justify-center">
        <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
            E-commerce website front-end
          </h1>
          <div className="flex flex-col gap-10">
            <Image
              src={imageEcom}
              alt="instagram-clone"
              className=" relative w-100 rounded-md object-contain max-w-md"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
          <h2 className="text-xl font-bold text-neutral-100">Highlight</h2>
          <p className="text-gray-400 p-10 ">
            This is a front-end design for e-commerce website.
          </p>
          <div className="border border-fuchsia-300 w-[80%]"/>
        </div>
      </div>
      </section>
      {/* Todo list */}
      <section className="snap-center">
      <div className="flex gap-10 flex-col md:flex-row justify-center">
        <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
            To-Do List
          </h1>
          <div className="flex flex-col gap-10">
            <Image
              src={imageTodo}
              alt="instagram-clone"
              className=" relative w-100 rounded-md object-contain max-w-md"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
          <h2 className="text-xl font-bold text-neutral-100">Hilight</h2>
          <p className="text-gray-400 p-10 ">
            This is to do list with dynamic validation and fetch image with
            relevent word.
          </p>
          <div className="border border-fuchsia-300 w-[80%]"/>
        </div>
      </div>
      </section>
    </main>
  );
}
