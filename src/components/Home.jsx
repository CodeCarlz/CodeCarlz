import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";
import HomeDiv from "./HomeDiv";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = ({ children }) => {
  return (
    <>
      <HomeDiv />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
