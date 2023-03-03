"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="relative h-screen flex gap-10 flex-col md:flex-row md:flex-left text-center justify-center pt-20">
      <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex items-center flex-col min-w-fit md:ml-20 md:mt-20">
        <div className="flex flex-col">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Fbumblebee.png?alt=media&token=163fd0e3-ddfd-493f-b2ab-6fe63c7da56c"
            alt="my gihub photo"
            className=" w-60 h-60 bg-pink-200 rounded-full object-contain md:mt-40 md:rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center flex-col md:mt-[170px] max-w-[700px]">
        <p className="text-gray-500 dark:text-neutral-400 p-10 ">
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
