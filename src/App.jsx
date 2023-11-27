import "./style/header/header.css";
import "./style/style.css";
import "../src/style/home/home.css";
import "../src/style/about/aboutMe.css";
import "../src/style/projects/projects.css";
import "../src/style/contact/contact.css";
import Home from "./components/Home.jsx";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
