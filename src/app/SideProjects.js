import React from "react";
import { ProjectCard } from "./ProjectCard";
import { IoIosArrowRoundForward } from "react-icons/io";

export const sideProjectsdata = [
  {
    icon: "/images/cache.png",
    title: "FS cache",
    description:
      "File-based key-value data store inspired by redis",
    url: "https://github.com/YeswanthRajakumar/FileSytem-Based-DataStore",
  },
  {
    icon: "/images/netflix.png",
    title: "Netflix clone",
    description: "Done this as a part of reat js learning exercise with IMDB api",
    url: "https://netflixclone-400e4.web.app/",
  },
  {
    icon: "/images/coronavirus.png",
    title: "Covid Visulaizer",
    description:
      "Visualize the rate of affection of covid-19 from disease.sh data",
    url: "https://react-covid-tracker-fd3b3.web.app/",
  },
];

export const SideProjects = () => {
  return (
    <div className="mt-10">
      <h1 className="w-[410 px] text-black text-[35px] not-italic font-bold leading-[37px] tracking-[-1.2px]">
        Side Projects
      </h1>
      <div className="lg:mt-4  max-[505px]:mt-2 ">
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
        <a href="https://github.com/YeswanthRajakumar" target="_blank">
          <button className="inline-flex items-center p-1 mt-4 all-project-btn">
            <p className="p-1 text-base  ">see more projects</p>
            <IoIosArrowRoundForward className="justify-center align-middle w-[24px] h-6 rounded-lg  p-1" />
          </button>
        </a>
      </div>
    </div>
  );
};
