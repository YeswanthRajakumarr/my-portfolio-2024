import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export const ProjectCard = ({ icon, title, description, url }) => {
  return (
    <div className="min-[375px]:mt-1  md:mt-2 shrink-0 ">
      <li className="transition duration-500 rounded-lg hover:bg-cus-tansperant p-2">
        <div className="flex min-[375px]:flex-wrap  justify-between  gap-1">
          <div className="card flex items-center flex-row gap-2 ">
            <div>
              <Image
                className=" border rounded-lg  bg-white p-1"
                src={icon}
                width={40}
                height={40}
                alt="project icon"
              />
            </div>

            <div className="mt-2 md:mt-0   min-[375px]:ml-3">
              <h1 className="text-base font-medium leading-4 md:text-lg">
                {title}
              </h1>
              <p className="text-[#444] text-sm md:text-base not-italic font-light leading-6 md:leading-7">
                {description}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center mt-2 md:mt-0 max-[505px]:hidden">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <MdArrowOutward className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};
