import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-20 h-[70px] w-full flex justify-center md:justify-between items-center px-10 bg-white">
      <Link href={"/"}>
        <div id="profileDiv" className="hidden md:flex items-center gap-2">
          <div className="h-[60px] w-[60px] flex items-center justify-center rounded-full overflow-hidden border-2 border-black ">
            <img
              src="/image/profile.jpg"
              alt="Profile Picture"
              className="h-full w-full "
            />
          </div>
          <p className="text-lg font-medium">John Karl</p>
        </div>
      </Link>
      <div className="navigationDiv">
        <ul className="flex gap-5">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          {/* <li>
            <a href="#contact">CONTACTS</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
