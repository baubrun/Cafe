import React from 'react'
import loader from "../images/preloader.gif"
import "../css/loader.css"





const Loader = () => {
    return (
        <div className="loader">
            <img className="loader__item" src={loader} alt="loading..."/>
        </div>
    )
}

export default Loader
