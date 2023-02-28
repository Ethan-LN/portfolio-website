import React from "react";
import Image from "next/image";
import { ApiProjects } from "@/pages/api/ApiProjects";
import { idText } from "typescript";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="relative w-full mb-32">
      <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        projects
      </h3>
      {/* <h1 className="text-white">test-86</h1> */}
      {ApiProjects.map((project, index) => {
        return (
          <div key={index} className="snap-start">
            <div className="flex gap-10 flex-col md:flex-row justify-center">
              <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 mt-28">
                <h1 className="text-xl font-bold text-gray-500 mt-20 text-center">
                  {project.title}
                </h1>
                <div className="flex flex-col gap-10">
                  <img
                    src={project.src}
                    alt={project.alt}
                    id={index.toString()}
                    className=" relative w-[100%] rounded-md object-contain max-w-md "
                  />
                </div>
              </div>
              <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
                <h2 className="text-xl font-bold text-gray-500 mt-20 ">
                  Highlight
                </h2>
                <p className="text-gray-400 p-10 ">{project.desc}</p>
                <div className="border border-fuchsia-300 w-[80%]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
