import React from "react";

const About = () => {
  return (
    <div id="aboutMe">
      <div className="aboutMeMain">
        <div className="aboutMeTop headerPosition">
          <h1 className="titleDivider">ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            exercitationem officiis reiciendis culpa, necessitatibus animi
          </p>
        </div>
        <div className="aboutMeBottom">
          <div className="aboutMeBottom-left">
            <h1>Get to know me!</h1>
            <p>
              Hey! It's <span>John Karl</span> and I'm a
              <span> Web Developer </span>located in
              <span> Philippines. </span>
            </p>
            <p>
              I am actively seeking a <span> developer </span> role to enhance
              my skills and gain real-world experience. I am a
              <span>quick learner</span>, able to
              <span>work under pressure</span>, and eager to adopt new
              technologies to contribute <span>effectively</span>.
            </p>
            <a href="#contactDiv">CONTACT</a>
          </div>
          <div className="aboutMeBottom-right">
            <h1>My Skills</h1>
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
      </div>
    </div>
  );
};

export default About;
