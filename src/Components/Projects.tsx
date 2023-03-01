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
      <h1 className="text-white">test-02</h1>
      {ApiProjects.map((project, index) => {
        return (
          <div key={index} className="snap-center">
            <div className="flex gap-10 flex-col md:flex-row justify-center">
              <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 mt-28">
                <h1 className="text-xl font-bold text-gray-500 mt-20 text-center">
                  {project.title}
                </h1>
                <div className="flex flex-col gap-3">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className=" relative w-[100%] rounded-md object-contain max-w-md "
                  />
                  <div className="flex justify-around mx-70%">
                    <a href={project.link.github}>
                      <img
                        alt="github link"
                        src={project.linkImg.github}
                        className="w-28 h-8 rounded-md object-contain p-1 bg-gray-700  hover: hover:bg-slate-500 cursor-pointer"
                      />
                    </a>
                    <a href={project.link.website}>
                      <img
                        alt="website link"
                        src={project.linkImg.website}
                        className="w-28 h-8 rounded-md p-1 object-contain bg-gray-700  hover:bg-slate-500 cursor-pointer "
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col md:mt-[192px] max-w-[700px]">
                <h2 className="text-xl font-bold text-gray-500 ">Highlight</h2>
                <p className="text-gray-400 p-10 ">{project.desc}</p>
                <div className="border border-fuchsia-300 w-[80%]" />
                <div className="flex flex-start gap-5 mt-10">
                  {project.stack.map((tool, index) => {
                    return (
                      <img
                        key={index}
                        src={tool.url}
                        className="w-12 h-auto rounded-full p-1"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
