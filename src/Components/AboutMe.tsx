import React from "react";
import imageGitHub from "../Resouce/bumblebee.png";
import Image from "next/image";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="h-screen flex gap-10 flex-col md:flex-row justify-center">
      <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
        <h1 className="text-3xl font-bold text-neutral-100 mt-20 text-center">
          Ethan Lang Nicholas
        </h1>
        <div className="flex flex-col gap-10">
          <Image
            src={imageGitHub}
            alt="my gihub photo"
            className=" w-60 h-60 bg-pink-200 rounded-full object-contain "
          />
        </div>
      </div>
      <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
        <h2 className="text-xl font-bold text-neutral-100">About Me</h2>
        <p className="text-neutral-100 p-10 ">
          I&apos;m a junior web/software developer who&apos;s passionate about
          building engaging and user-friendly web apps and softwares. I&apos;ve
          recently completed my Computational Science Degree and bootcamp
          program of web app development and I&apos;m excited to start my career
          in this field. I have experience in React, tailwind css, node.js,
          python etc. and I&apos;m eager to learn more and expand my skillset.
          I&apos;m familiar with web development best practices. I&apos;m always
          looking for opportunities to learn and grow.
        </p>
        <div className="border border-fuchsia-300 w-[80%]" />
      </div>
    </div>
  );
}

export default AboutMe;
