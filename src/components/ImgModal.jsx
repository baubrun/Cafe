import React, { useState } from "react";
import "../css/imgModal.css";

const ImgModal = (props) => {
  const [showImgModal, setShowImgModal] = useState(false);

  const toggleModal = () => {
    setShowImgModal(true);
  };

  return (
    <div className={`service-modal${showImgModal ? "-show" : ""}`}>
      <div className="service-modal__item">
        <div onClick={() => toggleModal()} className="service-modal__close">
          <i className="fas fa-window-close"></i>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
