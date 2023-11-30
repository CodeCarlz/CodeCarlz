import React from "react";

const Calculator = () => {
  return (
    <>
      <div className="projectTitle">
        <div className="projectTitleContent">
          <h1>Calculator Application</h1>
          <p>
            This page contains the case study of Calculator Website Application
            which includes the Project Overview, Tools Used and Live Links to
            the official product.
          </p>
          <a
            href="https://github.com/CodeCarlz/Calculator"
            className="liveLink liveLink-Anchor"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="projectContent">
        <img src="/image/Calculator.png" alt="" />
        <div className="projectContentBottom">
          <div className="porjectBottomMain">
            <div className="bottomTitle">
              <h1>Calculator Application</h1>
              <p>
                In my pursuit of enhancing my logical reasoning and
                problem-solving abilities, I've embarked on the journey of
                creating a web-based Calculator application. This project serves
                as a practical arena to sharpen my skills in frontend
                development while providing users with a reliable and efficient
                tool for numerical computations.
              </p>
              <p>
                Inspired by the quest for continuous improvement, the Calculator
                application aims to offer a seamless and intuitive experience,
                contributing to both my personal growth and the broader realm of
                web development.
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
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div className="bottomLive">
              <h1>SEE LIVE</h1>
              <div className="buttonDiv">
                <a
                  href="https://github.com/CodeCarlz/Calculator"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://calculator-codecarlz.vercel.app/"
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

export default Calculator;
