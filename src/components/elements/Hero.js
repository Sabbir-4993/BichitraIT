import React from "react";

import Background from '../../assets/img/hero-dot-bg.png';
import Client_1 from '../../assets/img/clients/client-1.svg';
import Client_2 from '../../assets/img/clients/client-2.svg';
import Client_3 from '../../assets/img/clients/client-3.svg';

import Shape from '../../assets/img/shape/circle-1.svg';
import Hero_bg from '../../assets/img/hero-1.png';
import {Link} from "react-router-dom";


class   Hero extends React.Component{
    render() {
        return(
            <section className="hero-section ptb-120 text-white bg-gradient" style= {{ backgroundImage: `url(${Background})`}} >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                                <h1 className="fw-bold display-5">Get Fully Control and Visibility your Company</h1>
                                <p className="lead">Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.</p>
                                <div
                                    className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                    <Link to="/contact" className="btn btn-primary me-3">Contact Us</Link>
                                    <Link to="http://www.youtube.com/watch?v=hAP2QF--2Dg" className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0">
                                        <i className="fas fa-play"></i> Watch Demo </Link>
                                </div>
                                <div className="row justify-content-lg-start mt-60">
                                    <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
                                    <div className="col-4 col-sm-3 my-2 ps-lg-0">
                                        <img src={Client_1} alt="client" className="img-fluid" />
                                    </div>
                                    <div className="col-4 col-sm-3 my-2">
                                        <img src={Client_2} alt="client" className="img-fluid" />
                                    </div>
                                    <div className="col-4 col-sm-3 my-2">
                                        <img src={Client_3} alt="client" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 mt-5">
                            <div className="hero-img position-relative circle-shape-images">
                                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                                    <li className="layer" data-depth="0.03">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-0 hero-1" />
                                    </li>
                                    <li className="layer" data-depth="0.02">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-1 hero-1" />
                                    </li>
                                    <li className="layer" data-depth="0.04">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-2 hero-1" />
                                    </li>
                                    <li className="layer" data-depth="0.04">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-3 hero-1" />
                                    </li>
                                    <li className="layer" data-depth="0.03">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-4 hero-1" />
                                    </li>
                                    <li className="layer" data-depth="0.03">
                                        <img src={Shape} alt="shape" className="circle-shape-item type-5 hero-1" />
                                    </li>
                                </ul>
                                <img src={Hero_bg} alt="hero img" className="img-fluid position-relative z-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;