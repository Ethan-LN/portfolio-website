"use client";
import React from "react";
import logoWhite from "../Resouce/en-logo-no-bg-white.png";
import Image from "next/image";
import { LightMode } from "@mui/icons-material";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function header({}: Props) {
  return (
    // header div
    <div className="flex justify-between px-5">
      <div className="flex">
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
      </div>
      <div className="pt-7">
        {/* right header div  */}
        <LightMode
          sx={{ color: "#B1B1B1", fontSize: 30 }}
          className="text-md hover:text-neutral-100 hover:cursor-pointer"
        />
      </div>
    </div>
  );
}
