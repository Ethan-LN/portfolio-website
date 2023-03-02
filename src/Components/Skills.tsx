"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { ApiSkillSets } from "@/pages/api/ApiSkillSets";

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
        <div className="grid grid-cols-4 gap-5 text-white items-center mt-[200px] mobile:mx-0">
          {ApiSkillSets.map((logo,index) => {
            return <Skill key={index} alt={logo.title} src={logo.src} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
