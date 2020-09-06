import React from "react";
import { socialData } from "../data";
import "../css/header.css"
import mp4 from "../video/coffee.mp4"
import ogv from "../video/coffee.ogv"
import webm from "../video/coffee.webm"
import Toggler from './Toggler'




const Header = (props) => {


  return (
    <header id="header">
      <div className="banner">
        <h1 className="banner__title bell-fonts">Café Café</h1>
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
      <article className="video__container">
          <video className="video__item" autoPlay muted loop>
              <source src={mp4} type="video/mp4"/>
              <source src={ogv} type="video/mp4"/>
              <source src={webm} type="video/mp4"/>
              Your browser does not support video.
          </video>

      </article>
      <div onClick={() => props.toggleNav()} className="menuBtn">
          <i className="fas fa-bars"></i>
      </div>
      <Toggler />

    </header>
  );
};

export default Header;
