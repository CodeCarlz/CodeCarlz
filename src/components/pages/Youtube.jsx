import React from "react";

const Youtube = () => {
  return (
    <>
      <div className="projectTitle">
        <div className="projectTitleContent">
          <h1>Youtube Application</h1>
          <p>
            This page contains the case study of Youtube Application Website
            which includes the Project Overview, Tools Used and Live Links to
            the official product.
          </p>
          <a
            href="https://github.com/CodeCarlz/youtube"
            className="liveLink liveLink-Anchor"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="projectContent">
        <img src="/image/Youtube.png" alt="" />
        <div className="projectContentBottom">
          <div className="porjectBottomMain">
            <div className="bottomTitle">
              <h1>Youtube Application</h1>
              <p>
                I have decided to undertake the development of a YouTube Clone
                application to challenge myself, particularly in terms of
                designing layouts and ensuring responsiveness for frontend
                development. My inspiration for this project stems from my
                interest in watching anime series, and I have always aspired to
                create my own anime streaming site.
              </p>
              <p>
                With a keen focus on user experience and modern web design
                principles, I aim to create a platform that not only emulates
                the functionality of YouTube but also incorporates a unique
                touch inspired by anime aesthetics. Through this project, I am
                honing my skills in frontend development and pushing the
                boundaries of what I can achieve in delivering a seamless and
                visually appealing streaming experience.
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
                  <li>Youtube (API)</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div className="bottomLive">
              <h1>SEE LIVE</h1>
              <div className="buttonDiv">
                <a
                  href="https://github.com/CodeCarlz/youtube"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://youtube-codecarlz.vercel.app/"
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

export default Youtube;
