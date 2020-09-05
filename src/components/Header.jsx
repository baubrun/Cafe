import React from "react";
import { socialData } from "./data";
import "../css/header.css"


const Header = () => {
  return (
    <header className="header" id="header">
      <div className="banner">
        <h1 className="banner__title bell-fonts">Cafe</h1>
        <div className="banner__icons">
          {socialData.map((icon, idx) => {
            return (
              <a key={idx} href="#" className="banner__social-icon">
                <i className={`fab fa-${icon} fa-fw`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
