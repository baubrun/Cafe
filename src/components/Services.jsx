import React from "react";
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
  return (
    <section className="services section-padding" id="services">
      <div className="section-title section-title-left">
        <h1 className="section-title__name belle-font">Services</h1>
        <div className="section-title__underline"></div>
      </div>

      <div className="services-container">
        {/* service item */}
        {serviceItems().map((item, idx) => {
          return (
            <article key={idx} className={`service-item item-${idx + 1}`}>
              <img
                className="service-item__img"
                src={require(`../images/${item}`)}
                alt={`service-item-${idx + 1}`}
              />
              <a href="" className="service-item__icon" data-id={idx + 1}>
                <i className="fas fa-search"></i>
              </a>
            </article>
          );
        })}
        {/* end of service item */}
      </div>

      <ImgModal />
    </section>
  );
};

export default Services;
