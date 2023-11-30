import React from "react";

const Chatty = () => {
  return (
    <>
      <div className="projectTitle">
        <div className="projectTitleContent">
          <h1>Chatty Application</h1>
          <p>
            This page contains the case study of Chatty Website Application
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
        <img src="/image/Chatty.png" alt="" />
        <div className="projectContentBottom">
          <div className="porjectBottomMain">
            <div className="bottomTitle">
              <h1>Chatty Application</h1>
              <p>
                My friend and I have embarked on a collaborative journey,
                pooling our skills and passion for web development to create a
                project that seamlessly integrates into our daily lives. The
                inception of 'Chatty' was inspired by our frequent discussions
                about web development, and we saw an opportunity to build a
                practical and user-friendly application.
              </p>
              <p>
                Rooted in the realm of digital conversations, Chatty represents
                our dedication to creating a reliable and enjoyable platform for
                everyday communication. This collaborative effort not only
                enhances our skills but also brings a user-centric solution to
                the web development landscape.
              </p>
              <p>
                this application are still in development. Here's a sneak peek
                into what makes our messaging app special.
              </p>
            </div>
            <div className="bottomTool">
              <div className="aboutMeBottom-right">
                <h1>Tools Used</h1>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>React js</li>
                  <li>Node js</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div className="bottomLive">
              <h1>SEE LIVE</h1>
              <div className="buttonDiv">
                <a
                  href="https://github.com/Code-X-Rahul/chatapp"
                  className="liveLink liveLink-Anchor"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="/"
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

export default Chatty;
