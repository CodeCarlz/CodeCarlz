import "./style/header/header.css";
import "./style/style.css";
import "../src/style/home/home.css";
import "../src/style/about/aboutMe.css";
import "../src/style/projects/projects.css";
import "../src/style/contact/contact.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProjectDiv from "./components/ProjectDiv.jsx";

import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<ProjectDiv />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
