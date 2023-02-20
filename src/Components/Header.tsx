"use client";
import React from "react";
import logoWhite from "../Resouce/en-logo-no-bg-white.png";
import Image from "next/image";
import { LightMode } from "@mui/icons-material";

type Props = {};

export default function header({}: Props) {
  return (
    <div className="flex justify-between p-5">
      <Image src={logoWhite} alt="my logo" className="w-[100px]" />
      <div className="pt-5">
        <LightMode sx={{ color: "#fafafa" }} fontSize="large"/>
      </div>
    </div>
  );
}
