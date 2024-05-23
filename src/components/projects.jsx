import Link from "next/link";
import React from "react";
import Borderspan from "./ui/borderspan";
import { Button } from "./ui/button";
import Projectitem from "./projectItem";
import { projectListItem } from "@/utils/projectList";

console.log(projectListItem);

const Projects = () => {
  return (
    <div
      className="h-full w-full flex justify-center items-center "
      id="projects"
    >
      <div className="bg- h-full w-[90vw] flex flex-col gap-28 py-10 pt-20 ">
        <div className="flex flex-col gap-2 items-center justify-center ">
          <h1 className="text-2xl font-semibold">PROJECTS</h1>
          <Borderspan />
          <p className="max-w-[60ch] text-center">
            This application provides users with a digital platform to create,
            manage, and organize their virtual sticky notes.
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
