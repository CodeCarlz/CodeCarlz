import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Homepage = () => {
  return (
    <div id="homeDiv" className="pt-[70px] relative">
      <video
        className="object-cover h-screen w-full "
        src="/Video/keyboard.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 text-blue-500 flex justify-center items-center h-[100vh] w-full">
        <ul className="homeHeroSocial flex flex-col gap-2 items-center justify-center absolute top-72 left-0 border-2 p-1 text-white">
          <li className="border-2 p-1 hover:text-blue-300">
            <a
              href="https://www.linkedin.com/in/john-karl-limjoco-31b861250/"
              target="_blank"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li className="border-2 p-1 hover:text-blue-700">
            <a href="https://web.facebook.com/Loadingx/" target="_blank">
              <Facebook size={18} />
            </a>
          </li>
          <li className="border-2 p-1 hover:text-black">
            <a href="https://github.com/CodeCarlz" target="_blank">
              <Github size={18} />
            </a>
          </li>
        </ul>
        <div className="homeHeroContent text-center flex flex-col gap-2 justify-center items-center text-white">
          <h1 className="text-lg md:text-2xl font-semibold">
            HEY, MY NAME IS JOHN KARL
          </h1>
          <p className="max-w-[30ch] md:max-w-[50ch] text-sm md:text-lg">
            As a web developer, I offer expertise in creating impactful digital
            solutions. Let's elevate your projects together.
          </p>
          <Button className="mt-5 w-fit" variant="secondary">
            <a href="#projectsDiv">PROJECTS</a>
          </Button>

          {/* <Link to="/about" id="projectBtn">
              PROJECTS
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
