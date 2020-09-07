import React, {useState} from "react";
import "../css/services.css";
import ImgModal from "./ImgModal";

const serviceItems = () => {
  let l = [];
  for (let i = 1; i < 10; i++) {
    l.push(`work-${i}.jpeg`);
  }
  return l;
};

const Services = () => {
  const [imgId, setImgId] = useState(null)
  const [showImgModal, setShowImgModal] = useState(false);

  const getImgId = (id) => {
    setImgId(id)
  }

  const toggleModal = () => {
    setShowImgModal(!showImgModal);
  };

  return (
    <section className="services section-padding" id="services">
      <div className="section-title section-title-left">
        <h1 className="section-title__name belle-font">Services</h1>
        <div className="section-title__underline"></div>
      </div>

      <div className="services-container">
        {/* service item */}
        {serviceItems().map((item, idx) => {
          let id = idx + 1
          return (
            <article
             key={idx}
              className={`service-item item-${id}`}>
              <img 
                className="service-item__img"
                src={`../images/${item}`}
                alt={`service-item-${id}`}
              />
              <div
                onClick={() => {
                  getImgId(id);
                  toggleModal()
                }}

               className="service-item__icon" data-id={id}>
                <i className="fas fa-search"></i>
              </div>
            </article>
          );
        })}
        {/* end of service item */}
      </div>

      <ImgModal 
      showImgModal={showImgModal}
      toggleModal={toggleModal}
      imgId={imgId}/>
    </section>
  );
};

export default Services;
