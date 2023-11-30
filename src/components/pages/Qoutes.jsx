import React from 'react'

const Qoutes = () => {
  return (
    <>
      <div className="projectTitle">
        <div className="projectTitleContent">
          <h1>Qoute's Generator Application</h1>
          <p>
            This page contains the case study of Qoute's Generator Website
            Application which includes the Project Overview, Tools Used and Live
            Links to the official product.
          </p>
          <a
            href="https://github.com/CodeCarlz/randomQoute"
            className="liveLink liveLink-Anchor"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="projectContent">
        <img src="/image/QouteGenerator.png" alt="" />
        <div className="projectContentBottom">
          <div className="porjectBottomMain">
            <div className="bottomTitle">
              <h1>Qoute's Generator Application</h1>
              <p>
                As part of my commitment to continuous learning and creative
                exploration in the field of web development, I've undertaken the
                development of a Quote Generator application.
              </p>
              <p>
                I aim to hone my skills in frontend development while
                contributing a valuable resource to those seeking inspiration in
                their daily lives.
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
                  <li>Qoute's (API)</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div className="bottomLive">
              <h1>SEE LIVE</h1>
              <div className="buttonDiv">
                <a
                  href="https://github.com/CodeCarlz/randomQoute"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://random-qoute-codecarlz.vercel.app/"
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
}

export default Qoutes
