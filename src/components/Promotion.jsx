import React from 'react'
import "../css/promotion.css"


const Promotion = () => {
    return (
        <section className="promotion section-padding" id="promotion">
            <div className="grid-container">
                <form className="promotion-form">

                    <h3 className="promotion-form__title belle-font">to get a free drink</h3>
                    
                    <div className="promotion-form__input">
                        <input className="input-firstName" placeholder="First Name"  type="text" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input className="input-lastName" placeholder="Last Name" type="text" name="" id=""/>
                    </div>
                    <div className="promotion-form__input">
                        <input className="input-email" placeholder="Email" type="email" name="" id=""/>
                    </div>
                    <input className="input-submit" type="submit" value="Register"/>

                </form>


            </div>
        </section>
    )
}

export default Promotion
