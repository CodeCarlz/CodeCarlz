import React from "react";

const Header = () => {
  return (
    <header>
      <div id="profileDiv">
        <a href="/">
          <img src="/image/profile.jpg" alt="Profile Picture" />
        </a>
        <p>John Karl</p>
      </div>
      <div className="navigationDiv">
        <ul>
          <li>
            <a href="/">HOME</a>
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
