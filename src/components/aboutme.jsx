import React from "react";
import Borderspan from "./ui/borderspan";
import { Button } from "./ui/button";
import { skillList } from "@/utils/skillList";

const Aboutme = () => {
  return (
    <div
      className="h-full md:h-screen py-10 px-2 md:py-0 md:px-0 w-full flex  justify-center items-center bg-[#efefef]"
      id="about"
    >
      <div className=" h-4/6 w-5/6 flex flex-col gap-28">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-wide">ABOUT ME</h1>
          <Borderspan />
          <p className="max-w-[60ch] text-center ">
            I thrive in fast-paced environments and enjoy tackling complex
            challenges
          </p>
        </div>
        <div className="flex justify-around flex-col md:flex-row gap-20">
          <div className="max-w-xl text-gray-500 flex flex-col gap-5">
            <h1 className="text-2xl font-semibold text-black">
              Get to know me!
            </h1>
            <p>
              Hey! It&apos;s <span className="text-black">John Karl</span> and
              I&apos;m a<span className="text-black"> Web Developer </span>
              located in the
              <span className="text-black"> Philippines.</span>
            </p>
            <p>
              I am actively seeking a
              <span className="text-black"> developer </span> role to enhance my
              skills and gain real-world experience. I am a
              <span className="text-black"> quick learner</span>, able to
              <span className="text-black"> work under pressure</span>, and
              eager to adopt new technologies to contribute
              <span className="text-black"> effectively</span>.
            </p>

            {/* <p>
              Hey! It's <span className="text-black">John Karl</span> and I'm a
              <span className="text-black"> Web Developer </span>located in
              <span className="text-black"> Philippines. </span>
            </p>
            <p>
              I am actively seeking a
              <span className="text-black"> developer </span> role to enhance my
              skills and gain real-world experience. I am a
              <span className="text-black"> quick learner</span>, able to
              <span className="text-black"> work under pressure</span>, and
              eager to adopt new technologies to contribute
              <span className="text-black"> effectively</span>.
            </p> */}
            <Button variant="lightblue" className="w-fit mt-2 tracking-wider">
              <a href="#home">HOME</a>
            </Button>
          </div>
          <div className="aboutMeBottom-right text-center flex flex-col gap-5 min-w-[240px]">
            <h1 className="text-xl font-semibold">My Skills</h1>
            <ul className="flex flex-wrap max-w-lg gap-4">
              {skillList.map((skill, index) => (
                <li className="bg-gray-300 px-3 py-1 rounded-xl" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
