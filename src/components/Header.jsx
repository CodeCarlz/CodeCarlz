import React from "react";

const Header = () => {
  return (
    <header>
      <div id="profileDiv">
        <img src="src/image/profile.jpg" alt="Profile Picture" />
        <p>John Karl</p>
      </div>
      <div className="navigationDiv">
        <ul>
          <li>
            <a href="#homeDiv">HOME</a>
          </li>
          <li>
            <a href="#aboutMe">ABOUT</a>
          </li>
          <li>
            <a href="#projectsDiv">PROJECTS</a>
          </li>
          <li>
            <a href="#contactDiv">CONTACTS</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
