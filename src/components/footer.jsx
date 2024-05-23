import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[300px] md:h-[180px] bg-black flex flex-col p-5  md:px-32 text-white">
      <div className="h-full w-full  flex flex-col md:flex-row justify-around lg:justify-items-center items-center border-b-2 border-gray-400">
        <div className="max-w-[50ch] flex flex-col justify-center text-center md:text-start">
          <h1 className="text-2xl font-semibold">John Karl Limjoco</h1>
          <p className="md:max-w-[30ch] lg:max-w-[50ch] text-ellipsis line-clamp-3">
            As a web developer, I offer expertise in creating impactful digital
            solutions. Let&apos;s elevate your projects together.
          </p>
        </div>
        <div className="max-w-[50ch] min-w-[30ch] flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-semibold">Socials</h1>
          <ul className=" flex  gap-2 items-center justify-center  text-white">
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
        </div>
      </div>
      <div className=" h-2/5 flex items-center justify-center">
        <p>
          © Copyright 2023. Made by <a href="/">John Karl Limjoco</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
