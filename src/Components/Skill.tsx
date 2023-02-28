import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  alt: string;
  src: string;
};

function Skill({ directionLeft, alt, src}: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          x: directionLeft ? -90 : 90,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={src}
        alt={alt}
        className="w-[60px] h-[60px] p-1 xl:p-2 border border-gray-500 rounded-full object-contain xl:w-24 xl:h-24 "
      ></motion.img>
    </div>
  );
}

export default Skill;
