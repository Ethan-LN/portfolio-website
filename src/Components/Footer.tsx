import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <a href="#hero">
      <div className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full bg-gray-500  filter  hover:bg-fuchsia-400 cursor-pointer"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-f533e.appspot.com/o/profileImgae%2Fen-logo-no-bg-white.png?alt=media&token=c136b9a9-80ba-457b-8b40-ada14766b316"
            alt="Hero"
          />
        </div>
      </div>
    </a>
  );
}

export default Footer;
