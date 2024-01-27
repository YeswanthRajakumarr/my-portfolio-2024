import React from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { SideProjects } from "./SideProjects";
import { Talks } from "./Talks";
import { Contact } from "./Contact";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <SideProjects />
      <Talks />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
