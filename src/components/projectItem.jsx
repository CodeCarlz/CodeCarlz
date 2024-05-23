import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Projectitem = ({ project }) => {

  return (
    <div className="flex gap-5 md:gap-20 flex-col items-center  md:flex-row">
      <div className="max-h-[600px] max-w-[600px]">
        <img src={project.image} alt="" className="h-full w-full" />
      </div>
      <div className="flex flex-col max-w-[90%] justify-center gap-2 pr-10">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="max-w-[60ch] max-h-[20ch] text-ellipsis line-clamp-3">
          {project.description.half}
        </p>
        <p>{project.tools.toolDescription}</p>
        <p>
          FrontEnd Dev: <strong>{project.developer?.frontend}</strong>
        </p>
        {project.developer.backend ? (
          <p>
            Backend Dev: <strong>{project.developer?.backend}</strong>
          </p>
        ) : null}
        <Button variant="lightblue" className="w-fit mt-5">
          <Link
            href={project.url.projectUrl}
            className="liveLink liveLink-Anchor"
          >
            Case Study
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Projectitem;
