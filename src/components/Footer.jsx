import React from "react";
import "../style/footer/footer.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerMain">
        <div className="footerTop">
          <div className="footerTop-Left">
            <h1>John Karl Limjoco</h1>
            <p>
              As a web developer, I offer expertise in creating impactful
              digital solutions. Let's elevate your projects together.
            </p>
          </div>
          <div className="footerTop-Right">
            <h1>SOCIAL</h1>
            <ul>
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
          </div>
        </div>
        <div className="footerBottom">
          <p>
            © Copyright 2023. Made by <a href="/">John Karl Limjoco</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
