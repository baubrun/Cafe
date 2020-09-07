import React from "react";
import "../css/imgModal.css";

const ImgModal = (props) => {


  const bkImg = {backgroundImage: `url("../images/work-${props.imgId}.jpeg")`}



  return (
    <div className={`service-modal${props.showImgModal ? "-show" : ""}`}>
      <div className="service-modal__item"
        style={bkImg}
      >
        {props.showImgModal && (
          <div onClick={() => props.toggleModal()} className="service-modal__close">
            <i className="fas fa-window-close"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImgModal;
