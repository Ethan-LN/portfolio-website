import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import imageCartoonised from "../Resouce/personal-bg-cyan-square.jpeg";
import imageEcom from "../Resouce/E-commerce.png";
import imageInsta from "../Resouce/instagram-clone.png";
import imageTodo from "../Resouce/to-do-list.png";
import Image from "next/image";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex gap-10 flex-col md:flex-row justify-center">
        <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
            Ethan Lang Nicholas
          </h1>
          <div className="flex flex-col gap-10">
            <Image
              src={imageCartoonised}
              alt="my photo"
              className=" relative w-60 h-60 bg-neutral-100 rounded-full object-contain "
              // md:rounded-3xl md:w-[300px] md:h-[400px] md:bg-transparent
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
          <h2 className="text-xl font-bold text-neutral-100">About Me</h2>
          <p className="text-neutral-100 p-10 ">
            I&apos;m a junior web/software developer who&apos;s passionate about building
            engaging and user-friendly web and soft apps. I&apos;ve recently completed my
            Computational Science Degree and bootcamp program in web development
            and I&apos;m excited to start my career in this exciting field. I have
            experience in React, tailwind css, node.js, python etc. and I&apos;m
            eager to learn more and expand my skillset. I&apos;m familiar with web
            development best practices. I&apos;m always looking for opportunities to
            learn and grow, and I&apos;m eager to work with more experienced
            developers who can help me improve my skills.
          </p>
          <p className="text-gray-100">---------------------------------</p>
        </div>
      </div>
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
          <p className="text-gray-100">---------------------------------</p>
        </div>
      </div>
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
          <p className="text-gray-100">---------------------------------</p>
        </div>
      </div>
{/* Todo list */}
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
            This is to do list with dynamic validation and fetch image with relevent word.
          </p>
          <p className="text-gray-100">---------------------------------</p>
        </div>
      </div>
    </main>
  );
}
