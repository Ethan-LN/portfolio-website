"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Header({}: Props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const LogoTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDarkMode = currentTheme === "dark";

    return (
      <img
        className="w-[90px]"
        src={
          isDarkMode
            ? "https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Fen-logo-no-bg-white.png?alt=media&token=c136b9a9-80ba-457b-8b40-ada14766b316"
            : "https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Flight-dark-mode%2Fen-logo-no-bg-black.png?alt=media&token=ff5a0e68-d4dc-4413-9fa6-72ffe5757739"
        }
        width={90}
        alt="my logo"
      />
    );
  };

  const changeMode = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="text-md w-9 h-9 flex flex-end mr-7 text-gray-500 hover:text-neutral-100 hover:cursor-pointer"
          role="button"
          onClick={() => {
            setTheme("light");
          }}
        />
      );
    } else {
      return (
        <MoonIcon
          className="text-md w-7 h-7 flex flex-end mr-7 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          role="button"
          onClick={() => {
            setTheme("dark");
          }}
        />
      );
    }
  };

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
          {LogoTheme()}
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
          {changeMode()}
        </motion.div>
      </div>
    </header>
  );
}
