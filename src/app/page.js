import React from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { SideProjects } from "./SideProjects";
import { Talks } from "./Talks";
import { Contact } from "./Contact";

const Footer = () => {
  return (
    <div className="mt-5 text-sm text-gray-700 text-center pb-1">
      Built with ♥️ by Yeswanth Rajakumar @ {new Date().getFullYear()}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <SideProjects />
      <Talks />
      <Contact />
      <Footer />
    </>
  );
}
