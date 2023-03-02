import React from "react";
import { ApiProjects } from "@/pages/api/ApiProjects";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="relative w-full text-center">
      {/* <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center mx-auto"> */}
      <h3 className="container absolute left-1/2 transform -translate-x-1/2 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      {/* <h1 className="text-white top-24">test-49</h1> */}
      {ApiProjects.map((project, index) => {
        return (
          <div key={index} className="snap-center">
            <div className="flex gap-10 flex-col xl:flex-row xl:w-[80%] xl:mx-auto 2xl:w-[70%] 2xl:mx-auto">
              <div className="flex flex-col gap-10 mt-28 xl:w-[50%]">
                <h1 className="text-xl font-bold text-gray-500 mt-20">
                  {project.title}
                </h1>
                <div className="flex flex-col">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-[90%] mx-auto rounded-t-md max-w-md"
                  />
                  <div className="w-[90%] mx-auto text-center max-w-md  rounded-b-md h-[56px] bg-gray-700">
                    <div className="flex justify-around mt-3">
                      <a href={project.link.github}>
                        <img
                          alt="github link"
                          src={project.linkImg.github}
                          className="w-28 h-8 rounded-md p-1 bg-gray-700 hover:bg-slate-500 cursor-pointer object-contain"
                        />
                      </a>
                      <a href={project.link.website}>
                        <img
                          alt="website link"
                          src={project.linkImg.website}
                          className="w-28 h-8 rounded-md p-1 bg-gray-700 hover:bg-slate-500 cursor-pointer object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col xl:mt-[192px] xl:w-[50%] max-w-[600px] text-center mx-auto">
                <h2 className="text-xl font-bold text-gray-500 ">Highlight</h2>
                <p className="text-gray-400 p-10 ">{project.desc}</p>
                <div className="border border-fuchsia-300 w-[80%]" />
                <div className="grid grid-cols-5  gap-5 mt-10">
                  {project.stack.map((tool, index) => {
                    return (
                      <img
                        key={index}
                        alt={index.toString()}
                        src={tool.url}
                        className="w-12 h-12 p-1 border border-gray-500 rounded-full object-contain"
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
