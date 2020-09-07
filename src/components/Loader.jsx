import React from 'react'
import "../css/loader.css"





const Loader = () => {
    return (
        <div className="loader">
            <img className="loader__item" 
                src={require("../images/preloader.gif")}
                alt="loading..."/>
        </div>
    )
}

export default Loader
