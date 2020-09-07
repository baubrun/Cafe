import React from "react";
import { navData } from "../data";
import "../css/navbar.css"


const NavBar = (props) => {

  return (
      <nav className={`nav ${props.isNavShow? "nav-show" : "nav-hide" }`}>
        <ul className="nav__links ">
            <li className="nav__link" id="nav__logo">
                <img
                src={require("../images/navLogo.svg")}
                alt=""/>
            </li>
          {navData.map((i, idx) => {
            return (
              <li key={idx}>
                <a className="nav__link" href={i.href}>
                  {i.name}
                </a>
              </li>
            );
          })}
        </ul>

      </nav>
  );
};

export default NavBar;
