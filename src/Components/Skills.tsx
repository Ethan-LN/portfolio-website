"use client";
import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="w-full h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative flex flex-col justify-center text-center pt-20  max-w-[2000px] xl:px-10 mx-auto items-center"
      >
        <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          skills
        </h3>
        <div className="grid grid-cols-4 gap-5 text-white items-center mt-[300px] md:mt-[100px]">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
