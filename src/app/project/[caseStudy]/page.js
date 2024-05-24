import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import React from "react";
import { skillList } from "@/utils/skillList";
import { projectListItem } from "@/utils/projectList";
import Link from "next/link";

const Page = ({ params }) => {
  const selectedProject = projectListItem.find((projectItem) =>
    projectItem.title.toLowerCase().includes(params.caseStudy)
  );

  return (
    <>
      <Header home="/" about="/#about" project="/#projects" />
      <div className="h-full  bg--500  flex flex-col items-center  text-black">
        <div
          className="h-[500px] w-full flex flex-col justify-center items-center gap-3 pt-20 "
          style={{
            backgroundImage: `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url("/image/common-bg.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-3xl font-semibold">{selectedProject.title}</h1>
          <p className="max-w-[60ch] px-10">
            This page contains the case study of {selectedProject.title}{" "}
            Application Website which includes the Project Overview, Tools Used
            and Live Links to the official product.
          </p>
          <Button variant="lightblue" className="w-fit tracking-wider ">
            <Link href={selectedProject.url.github} target="_blank">
              Github
            </Link>
          </Button>
        </div>
        <div className="h-full w-[80vw]  flex flex-col py-10 items-center gap-10">
          <div
            className="h-[50vh] w-full "
            style={{
              backgroundImage: `url(${selectedProject.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="">
            <div className="w-full lg:w-[60vw] flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">
                {selectedProject.title} Application
              </h1>
              <p>{selectedProject.description.full.first}</p>
              <p>{selectedProject.description.full.second}</p>
              <p>
                Feel free to check out the Project by visiting the Live Link.
              </p>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Tools Used</h1>
                <ul className="flex flex-wrap  gap-4">
                  {selectedProject.tools.toolUsed.map((skill, index) => (
                    <li
                      className="bg-gray-300 px-3 py-1 rounded-xl"
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">SEE LIVE</h1>
                <div className="flex gap-3">
                  <Button variant="lightblue" className="tracking-wider">
                    <Link href={selectedProject.url.github} target="_blank">
                      Github
                    </Link>
                  </Button>
                  <Button variant="lightblue" className="tracking-wider">
                    <Link href={selectedProject.url.vercel} target="_blank">
                      Vercel
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
