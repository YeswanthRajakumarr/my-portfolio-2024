import React from "react";
import { FaStar } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="text-base flex justify-between">
      <div>
        <ul className="flex justify-around gap-7 font-normal leading-6">
          <li className="font-semibold">Home</li>
          <li>Projects</li>
          <li>Snippets</li>
          <li>Blogs</li>
        </ul>
      </div>
      <button className="border bg-cus-tansperant rounded-lg border-solid border-black inline-flex items-center p-1">
        <FaStar
          className="justify-center align-middle w-[24px] h-6 shrink-0  rounded-lg  p-1"
          href="https://github.com/YeswanthRajakumar"
        />
        <p className="text-sm p-1"> me on Github</p>
      </button>
    </nav>
  );
};
