import React from "react";
import "../css/toggler.css";

const Toggler = () => {
  return (
    <div className="video__switch-container">
      <div className="video__switch">
        <span>on </span>
        <span> off</span>
        <div className="video__switch-btn"></div>
      </div>
    </div>
  );
};

export default Toggler;
