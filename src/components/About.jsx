import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="grid-container grid-container--md-2">
          <article className="about-container">
            <div className="section-title">
              <h1 className="section-title__name belle-font"> Our Story</h1>
              <div className="section-title__underline"></div>
              <p className="section-title__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                impedit recusandae laboriosam nemo minima, in quos obcaecati
                quidem sit numquam!
              </p>
            </div>

            <div className="about__img ">
              <img
                className="about__img-item"
                src={require("../images/aboutImg-1.jpeg")}
                alt="about"
              />
            </div>
          </article>

          <article className="about-container">
            <div className="section-title">
              <h1 className="section-title__name belle-font"> Our Service</h1>
              <div className="section-title__underline"></div>
              <p className="section-title__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                impedit recusandae laboriosam nemo minima, in quos obcaecati
                quidem sit numquam!
              </p>
            </div>

            <div className="about__img about__img-flip">
              <img
                className="about__img-item"
                src={require("../images/aboutImg-2.jpeg")}
                alt="about"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
