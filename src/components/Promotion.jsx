import React from 'react'
import "../css/promotion.css"
import person from "../images/person-4.jpeg"


const Promotion = () => {
    const winners = ["asdf"]
    return (
        <section className="promotion section-padding" id="promotion">
            <div className="grid-container">
                <form className="promotion-form">
                    <p className="promotion-form__feedback">some text</p>
                    <h3 className="promotion__title belle-font"></h3>
                    <div className="promotion-form__input">
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input  type="text" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input type="email" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input className="input-submit" type="submit" value="Sign Up"/>
                    </div>
                </form>

            <article className="promotion-card">
                <h3 className="promotion-card__title belle-font">
                    Winners
                </h3>
                <div className="promotion__list">
                    {winners.map((p, idx) => {
                        return ( <div className="person">
                        <img className="person__thumbnail" src={person} alt=""/>
                        <h4 className="person__firstName">{p.firstName}</h4>
                        <h4 className="person__lastName">{p.lastName}</h4>
                    </div>
)
                    })}
                </div>
            </article>

            </div>
        </section>
    )
}

export default Promotion
