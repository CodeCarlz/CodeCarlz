import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeDiv = () => {
  return (
    <div id="homeDiv">
      <video
        className="background"
        src="src/Video/keyboard.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="homeHero">
        <ul className="homeHeroSocial">
          <li>
            <a
              href="https://www.linkedin.com/in/john-karl-limjoco-31b861250/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/Loadingx/" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/CodeCarlz" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
        <div className="homeHeroContent">
          <h1>HEY, MY NAME IS JOHN KARL</h1>
          <p>
            As a web developer, I offer expertise in creating impactful digital
            solutions. Let's elevate your projects together.
          </p>
          <a href="#projectsDiv">PROJECTS</a>
          {/* <Link to="/about" id="projectBtn">
              PROJECTS
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
