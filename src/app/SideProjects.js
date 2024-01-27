import React from "react";
import { ProjectCard } from "./ProjectCard";
import { IoIosArrowRoundForward } from "react-icons/io";

export const sideProjectsdata = [
  {
    icon: "/mac-os.png",
    title: "Apple",
    description: "lorem ipsomerum non proident du one mauris in hendrerit",
    url: "https://www.google.com/",
  },
  {
    icon: "/twitter.png",
    title: "Twitter",
    description: "lorem ipsomerum non proident du one mauris in hendrerit",
    url: "https://www.google.com/",
  },
  {
    icon: "/nike.png",
    title: "Just do it",
    description: "lorem ipsomerum non proident du one mauris in hendrerit",
    url: "https://www.google.com/",
  },
];

export const SideProjects = () => {
  return (
    <div className="mt-10">
      <h1 className="w-[410 px] text-black text-[35px] not-italic font-bold leading-[37px] tracking-[-1.2px]">
        Side Projects
      </h1>
      <div className="lg:mt-4  max-[505px]:mt-2">
        <ul>
          {sideProjectsdata.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </ul>
        <a

          href="https://github.com/YeswanthRajakumar"
          target="_blank"
        >
          <button className="inline-flex items-center p-1 mt-4 all-project-btn">
            <p className="p-1 text-base  ">see more projects</p>
            <IoIosArrowRoundForward className="justify-center align-middle w-[24px] h-6 rounded-lg  p-1" />
          </button>
        </a>
      </div>
    </div>
  );
};
