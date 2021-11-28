import React from "react";
import Preloader_image from "../assets/img/favicon.png";

class Preloader extends React.Component {
    render() {
        return(
            <div id="preloader">
                <div className="preloader-wrap">
                    <img src={Preloader_image} alt="logo" className="img-fluid preloader-icon"/>
                    <div className="loading-bar"></div>
                </div>
            </div>
        );
    }
}

export default Preloader;
