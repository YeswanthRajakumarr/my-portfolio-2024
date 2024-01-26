import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export const ProjectCard = ({ icon, title, description, url }) => {
  return (
    <div>
      <li className="mt-4 hover:bg-cus-tansperant transition duration-500 rounded-lg">
        <div className="md:w-[594px] md:h-[65px] w-full h-auto md:flex md:flex-row md:justify-between px-3">
          <div className="flex flex-col md:flex-row md:gap-2 items-center">
            <div className="md:w-[40px] md:h-10 w-16 h-16">
              <Image
                className="w-full h-full border rounded-lg bg-white p-1"
                src={icon}
                width={40}
                height={40}
                alt="project icon"
              />
            </div>

            <div className="mt-2 md:mt-0">
              <h1 className="font-medium text-base md:text-lg leading-4 md:leading-5">
                {title}
              </h1>
              <p className="text-[#444] text-sm md:text-base not-italic font-light leading-6 md:leading-7">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-2 md:mt-0 inline-flex items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <MdArrowOutward className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};
