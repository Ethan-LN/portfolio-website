import React from "react";
import imageEcom from "../Resouce/E-commerce.png";
import imageInsta from "../Resouce/instagram-clone.png";
import imageTodo from "../Resouce/to-do-list.png";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="relative w-full">
      <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        projects
      </h3>
      <section className="snap-start">
        <h1 className="text-white">test-13</h1>
        {/* Instagram */}
        <div className="flex gap-10 flex-col md:flex-row justify-center">
          <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
            <h1 className="text-xl font-bold text-gray-500 mt-20 text-center">
              Instagram Clone and Firebase
            </h1>
            <div className="flex flex-col gap-10">
              <Image
                src={imageInsta}
                alt="instagram-clone"
                className=" relative w-100 rounded-md object-contain max-w-md"
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
            <h2 className="text-xl font-bold text-gray-500 mt-20 ">Highlight</h2>
            <p className="text-gray-400 p-10 ">
              This is a instagrame clone with firebase auth and storage.
            </p>
            <div className="border border-fuchsia-300 w-[80%]" />
          </div>
        </div>
      </section>
      <section className="snap-center">
        {/*E-commerce  */}
        <div className="flex gap-10 flex-col md:flex-row justify-center">
          <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-xl font-bold text-gray-500 mt-20 text-center">
              E-commerce website front-end
            </h1>
            <div className="flex flex-col gap-10">
              <Image
                src={imageEcom}
                alt="instagram-clone"
                className=" relative w-100 rounded-md object-contain max-w-md"
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
            <h2 className="text-xl font-bold text-gray-500 mt-20 ">Highlight</h2>
            <p className="text-gray-400 p-10 ">
              This is a front-end design for e-commerce website.
            </p>
            <div className="border border-fuchsia-300 w-[80%]" />
          </div>
        </div>
      </section>
      {/* Todo list */}
      <section className="snap-center">
        <div className="flex gap-10 flex-col md:flex-row justify-center">
          <div className="flex items-center flex-col gap-10 min-w-fit md:ml-20 md:mt-20">
          <h1 className="text-xl font-bold text-gray-500 mt-20 text-center">
              To-Do List
            </h1>
            <div className="flex flex-col gap-10">
              <Image
                src={imageTodo}
                alt="instagram-clone"
                className=" relative w-100 rounded-md object-contain max-w-md"
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:mt-40 max-w-[700px]">
            <h2 className="text-xl font-bold text-gray-500 mt-20 ">Hilight</h2>
            <p className="text-gray-400 p-10 ">
              This is a to do list app with dynamic validation on its form and it can fetch relevent image with
              word tag.
            </p>
            <div className="border border-fuchsia-300 w-[80%]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
