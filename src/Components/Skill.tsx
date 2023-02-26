import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Fpython-logo.png?alt=media&token=e4d05418-583f-49dd-af10-c09092426065"
        alt="python-logo"
        className="w-[60px] h-[60px] p-1 border border-gray-500 rounded-full object-cover xl:w-32 xl:h-32 "
      ></motion.img>
    </div>
  );
}

export default Skill;
