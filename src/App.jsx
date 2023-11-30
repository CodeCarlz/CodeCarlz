import "./style/header/header.css";
import "./style/style.css";
import "../src/style/home/home.css";
import "../src/style/about/aboutMe.css";
import "../src/style/projects/projects.css";
import "../src/style/contact/contact.css";
import "./style/responsive.css/responsiveness.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Notes from "./components/pages/Notes.jsx";
import Youtube from "./components/pages/Youtube.jsx";
import Calculator from "./components/pages/Calculator.jsx";
import Qoutes from "./components/pages/Qoutes.jsx"
import Chatty from "./components/pages/Chatty.jsx";

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
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/qoutes" element={<Qoutes />} />
        <Route path="/chatty" element={<Chatty />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
