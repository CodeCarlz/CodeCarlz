import React from "react";
import Header from "../Header";
import "../../style/projects/page.css";

const NotePage = () => {
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
                I decided to recreate the Frontend of Note Web Application as I
                got attracted to their beautiful UI and it was a great
                opportunity for me to showcase my frontend skills by rebuilding
                the UI and it ended up being a great experience for me.
              </p>
              <p>
                I used my frontend tools to build the User Interface which works
                on all types of devices along with the SPA library to make the
                frontend perform faster.
              </p>
              <p>
                Feel free to check out the Project by visiting the Live Link.
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
              <div className="buttonDiv">
                <a
                  href="https://github.com/CodeCarlz/sticky-note---React"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://sticky-notes-react-codecarlz.vercel.app/"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  Vercel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotePage;
