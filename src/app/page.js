import React from "react";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { SideProjects } from "./SideProjects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <SideProjects />
    </>
  );
}
