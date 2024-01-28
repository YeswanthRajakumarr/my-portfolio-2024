import React from "react";

import { Hero } from "./Hero";
import { SideProjects } from "./SideProjects";
import { Talks } from "./Talks";
import { Contact } from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SideProjects />
      <Talks />
      <Contact />
    </>
  );
}
