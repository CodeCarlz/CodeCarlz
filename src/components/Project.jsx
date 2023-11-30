import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div id="projectsDiv">
      <div className="projectsMain">
        <div className="projectsHeader headerPosition">
          <h1 className="titleDivider">PROJECTS</h1>
          <p>
            This application provides users with a digital platform to create,
            manage, and organize their virtual sticky notes.
          </p>
        </div>
        <ul className="projectsList">
          <li>
            <img src="/image/NoteApp.png" alt="" />
            <div className="projectsContent">
              <h1>Notes</h1>
              <p>
                This application provides users with a digital platform to
                create, manage, and organize their virtual sticky notes.
              </p>
              <p>This project is built using Html, Css , React.js</p>
              <p>
                Developer: <strong>John Karl Limjoco</strong>
              </p>
              <Link to="/notes" className="liveLink liveLink-Anchor">
                Case Study
              </Link>
            </div>
          </li>

          <li>
            <img src="/image/Youtube.png" alt="" />
            <div className="projectsContent">
              <h1>Youtube Clone</h1>
              <p>
                I undertook the exciting challenge of creating a YouTube clone.
                Leveraging my skills in web development
              </p>
              <p>
                This project is built using HTML, CSS, and Javascript, with data
                managed through (Youtube API)
              </p>
              <p>
                Developer: <strong>John Karl Limjoco</strong>
              </p>
              <Link to="/youtube" className="liveLink liveLink-Anchor">
                Case Study
              </Link>
            </div>
          </li>

          <li>
            <img src="/image/Calculator.png" alt="" />
            <div className="projectsContent">
              <h1>Calculator</h1>
              <p>
                this calculator is your digital companion for all numerical
                computations including addition, subtraction, multiplication and
                division.
              </p>
              <p>This project is built using Html, Css, Javascript</p>
              <p>
                Front-End Developer: <strong>John Karl Limjoco</strong>
              </p>
              <Link to="/calculator" className="liveLink liveLink-Anchor">
                Case Study
              </Link>
            </div>
          </li>

          <li>
            <img src="/image/QouteGenerator.png" alt="" />
            <div className="projectsContent">
              <h1>Qoute's Generator</h1>
              <p>
                Tailored for those seeking daily motivation or a spark of
                creativity, our Quote Generator promises a delightful journey
                through the power of words.
              </p>
              <p>
                This project is built using Html, Css, Javascript with data
                managed through (Qoute's API)
              </p>
              <p>
                Developer: <strong>John Karl Limjoco</strong>
              </p>
              <Link to="/qoutes" className="liveLink liveLink-Anchor">
                Case Study
              </Link>
            </div>
          </li>

          <li>
            <img src="/image/Chatty.png" alt="" />
            <div className="projectsContent">
              <h1>Chatty</h1>
              <p>
                As we fine-tune the user experience and add exciting features,
                users can already enjoy a glimpse into the future of digital
                conversations. this application are still in development. Here's
                a sneak peek into what makes our messaging app special.
              </p>
              <p>
                This project is built using the MERN stack – a powerhouse
                combination of MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p>
                Front-End Developer: <strong>John Karl Limjoco</strong>
              </p>
              <p>
                Back-End Developer: <strong>Rahul Rajput</strong>
              </p>
              <Link to="/chatty" className="liveLink liveLink-Anchor">
                Case Study
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
