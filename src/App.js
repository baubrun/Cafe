import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none"
})



const App = () => {

  const [isNavShow, setIsNavShow] = useState(false)

  
  const toggleNav = () => {
    setIsNavShow(!isNavShow)
  }


  return (
    <>
      <Loader />
      <Header 
      toggleNav={toggleNav} 
      />
      <NavBar isNavShow={isNavShow}/>
    </>
  );
};

export default App;
