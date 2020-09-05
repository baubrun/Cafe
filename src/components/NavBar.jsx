import React from "react";
import { navData } from "../data";
import logo from "../images/navLogo.svg"
import "../css/navbar.css"


const NavBar = () => {
  return (
      <nav>
        <ul className="nav__links ">
            <li className="nav__link" id="nav__logo">
                <img src={logo} alt=""/>
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
