import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none"
})



const App = () => {

  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <>
      <Loader />
      <Header toggleNav={toggleNav}/>
      <NavBar showNav={showNav}/>
    </>
  );
};

export default App;
