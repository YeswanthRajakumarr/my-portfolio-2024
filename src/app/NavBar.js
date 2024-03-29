import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between text-base">
      <div>
        <ul className="flex justify-around font-normal leading-6 gap-7">
          <li className="font-semibold">Home</li>
          <li>
            <a href="https://medium.com/@yeswanthjayanthi">Blogs</a>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/certifications">Certifications</Link>
          </li>
        </ul>
      </div>
      <a
        className="bg-gradient-animation rounded-lg  "
        href="https://github.com/YeswanthRajakumar/my-portfolio-2024"
        target="_blank"
      >
        <button className="inline-flex items-center p-1  border-solid rounded-lg bg-cus-tansperant ">
          <FaStar className="justify-center align-middle w-[24px] h-6 shrink-0  rounded-lg  p-1" />
          <p className="p-1 text-sm  max-[470px]:hidden"> me on Github</p>
        </button>
      </a>
    </nav>
  );
};
