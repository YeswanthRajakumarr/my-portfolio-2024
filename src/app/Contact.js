import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="mt-10 ">
      <h1 className="w-[410 px] text-black text-[35px] not-italic font-bold leading-[37px] tracking-[-1.2px]">
        Get in Touch with me
      </h1>
      <div className="bg-gradient-animation  rounded-lg  p-8 flex justify-center gap-3 mt-3 contact-form">
        <div>
          <a href="https://github.com/YeswanthRajakumar" target="_blank">
            <button className="bg-white p-1 border border-black border-solid rounded-md ">
              <FaGithub className=" w-[24px] h-6 rounded-lg  p-1" />
            </button>
          </a>
        </div>

        <div>
          <a target="_blank" href="mailto:yeswanthjayanthi@gmail.com">
            <button className=" bg-white p-1 border border-black border-solid rounded-md ">
              <SiGmail className=" w-[24px] h-6 rounded-lg  p-1" />
            </button>
          </a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yeswanthrajakumar/"
          >
            <button className="bg-white p-1 border border-black border-solid rounded-md ">
              <FaLinkedin className=" w-[24px] h-6 rounded-lg  p-1" />
            </button>
          </a>
        </div>

        <div>
          <a href="https://twitter.com/YeswanthRajaku3" target="_blank">
            <button className="bg-white p-1 border border-black border-solid rounded-md ">
              <FaTwitter className=" w-[24px] h-6 rounded-lg  p-1" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
