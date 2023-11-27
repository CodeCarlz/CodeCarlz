import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Header from "./Header";
import HomeDiv from "./HomeDiv";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeDiv />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
