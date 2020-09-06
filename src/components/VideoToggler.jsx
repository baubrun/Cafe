import React, {useRef}  from "react";
import "../css/videoToggler.css";

const Toggler = (props) => {

  return (
    <div
      onClick={() => {
        props.toggleVideoBtn();
        props.handlePlay();
      }}
      className="video__switch-container"
    >
      <div className="video__switch">
        <span>on </span>
        <span> off</span>
        <div
          className={`video__switch-btn ${
            props.isVideoPlaying ? "video-on" : "video-off"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggler;
