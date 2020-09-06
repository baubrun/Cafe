import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import About from "./components/About";
import Promotion from "./components/Promotion";

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

const App = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const toggleNav = () => {
    setIsNavShow(!isNavShow);
  };

  return (
    <>
      <NavBar isNavShow={isNavShow} />

      <Loader />
      <Header toggleNav={toggleNav} />
      <About />
      <Promotion />
    </>
  );
};

export default App;
