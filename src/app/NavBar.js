import React from "react";
import { FaStar } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-base">
      <div>
        <ul className="flex justify-around font-normal leading-6 gap-7">
          <li className="font-semibold">Home</li>
          <li>Work</li>
          <li>Blogs</li>
          <li>Guestbook</li>
        </ul>
      </div>
      <button className="inline-flex items-center p-1 border border-black border-solid rounded-lg bg-cus-tansperant ">
        <FaStar
          className="justify-center align-middle w-[24px] h-6 shrink-0  rounded-lg  p-1"
          href="https://github.com/YeswanthRajakumar"
        />
        <p className="p-1 text-sm  max-[470px]:hidden"> me on Github</p>
      </button>
    </nav>
  );
};
