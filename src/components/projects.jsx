import Link from "next/link";
import React from "react";
import Borderspan from "./ui/borderspan";
import { Button } from "./ui/button";
import Projectitem from "./projectItem";
import { projectListItem } from "@/utils/projectList";

const Projects = () => {
  return (
    <div
      className="h-full w-full flex justify-center items-center "
      id="projects"
    >
      <div className="bg- h-full w-[90vw] flex flex-col gap-28 py-10 pt-20 ">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <h1 className="text-2xl font-semibold tracking-wider">PROJECTS</h1>
          <Borderspan />
          <p className="max-w-[60ch] text-center text-sm md:text-lg">
            This page showcases all of my coding challenges and projects.
            Explore a variety of applications and solutions I&apos;ve developed,
            demonstrating my skills and creativity in web development.
          </p>
        </div>
        {projectListItem.map((project, index) => (
          <Projectitem project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
