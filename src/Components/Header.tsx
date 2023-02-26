"use client";
import React from "react";
import logoWhite from "../Resouce/en-logo-no-bg-white.png";
import Image from "next/image";
import { LightMode } from "@mui/icons-material";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function header({}: Props) {
  const changeMode = () => {
    
  }
  return (
    // header div
    <header className="sticky top-0 z-30">
      <div className="container flex justify-between w-[100%] mx-auto px-1">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex"
        >
          {/* left header div */}
          <Image src={logoWhite} alt="my logo" className="w-[90px]" />
          <div>
            <SocialIcon
              url="https://github.com/Ethan-LN"
              bgColor="transparent"
              fgColor="gray"
              className="mt-5 ease-in-out duration-300 hover:mt-0"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/ethan-lang-nicholas/"
              bgColor="transparent"
              fgColor="gray"
              className="mt-5 ease-in-out duration-300 hover:mt-0"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="pt-7"
        >
          {/* right header div  */}
          <LightMode
            sx={{ color: "#B1B1B1", fontSize: 30 }}
            className="text-md flex flex-end hover:text-neutral-100 hover:cursor-pointer"
            onClick={changeMode}
          />
        </motion.div>
      </div>
    </header>
  );
}
