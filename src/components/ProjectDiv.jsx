import React from "react";
import Header from "./Header";
import "../style/projects/projectDiv.css";

const ProjectDiv = () => {
  return (
    <>
      <div className="projectTitle">
        <div className="projectTitleContent">
          <h1>Notes Application</h1>
          <p>
            This page contains the case study of Notes Application Website which
            includes the Project Overview, Tools Used and Live Links to the
            official product.
          </p>
          <a href="" className="liveLink">
            github
          </a>
        </div>
      </div>
      <div className="projectContent">
        <img src="/image/NoteApp.png" alt="" />
        <div className="projectContentBottom">
          <div className="porjectBottomMain">
            <div className="bottomTitle">
              <h1>Notes Application</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, aut.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, aut.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, aut.
              </p>
            </div>
            <div className="bottomTool">
              <div className="aboutMeBottom-right">
                <h1>Tools Used</h1>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>VB.net</li>
                  <li>Cypress</li>
                  <li>Playwright</li>
                  <li>SQL</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
            <div className="bottomLive">
              <h1>SEE LIVE</h1>
              <button className="liveLink">button</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDiv;
