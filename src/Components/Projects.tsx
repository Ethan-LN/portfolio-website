import React from "react";
import imageEcom from "../Resource/E-commerce.png";
import imageInsta from "../Resource/instagram-clone.png";
import imageTodo from "../Resource/to-do-list.png";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="relative w-full mb-32">
      <h3 className="container absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        projects
      </h3>
      <section className="snap-start">
        <h1 className="text-white">test-42</h1>
        {/* Instagram */}
        <div className="flex gap-10 flex-col md:flex-row justify-center mt-[100px]">
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
            <h2 className="text-xl font-bold text-gray-500 mt-20 ">
              Highlight
            </h2>
            <p className="text-gray-400 p-10 ">
              This is an Instagram clone that utilizes Firebase authentication
              and storage, enabling users to register, log in, create posts, and
              leave comments on posts.
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
            <h2 className="text-xl font-bold text-gray-500 mt-20 ">
              Highlight
            </h2>
            <p className="text-gray-400 p-10 ">
              I created this front-end of an e-commerce website using Tailwind
              CSS and Material UI icons, and made multiple pages with React Hook
              and React Router.
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
              This web app is a to-do app equipped with dynamic form validation.
              Additionally, it is using an API that fetches relevant
              images based on word tag, which are then used as the hero image
              for the corresponding task card.
            </p>
            <div className="border border-fuchsia-300 w-[80%]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
