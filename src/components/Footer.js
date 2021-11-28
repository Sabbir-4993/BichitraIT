import React from "react";

import logo_white from "../assets/img/logo-white.png";
import logo_color from "../assets/img/logo-color.png";
import {Link} from "react-router-dom";
import {ExternalLink} from "react-external-link";



class Footer extends React.Component{
    render() {
        return(
            <footer className="footer-section">
                <div className="footer-top  bg-gradient text-white ptb-120">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                                <div className="footer-single-col">
                                    <div className="footer-single-col mb-4">
                                        <img src={logo_white} alt="logo" className="img-fluid logo-white" />
                                        <img src={logo_color} alt="logo" className="img-fluid logo-color" />
                                    </div>
                                    <p>Our latest news, articles, and resources, we will sent to your inbox weekly.</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                        <div className="footer-single-col">
                                            <h3>OverView</h3>
                                            <ul className="list-unstyled footer-nav-list mb-lg-0">
                                                <li><Link to="/" className="text-decoration-none">Services</Link></li>
                                                <li><Link to="/" className="text-decoration-none">About  Us</Link></li>
                                                <li><Link to="/" className="text-decoration-none">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                        <div className="footer-single-col">
                                            <h3>Contact</h3>
                                            <ul className="list-unstyled footer-nav-list mb-lg-0">
                                                <li><Link to="mailto:info@bichitrait.com" className="text-decoration-none">E: info@bichitrait.com</Link></li>
                                                <li><Link to="tel:+8801815-664068" className="text-decoration-none">T: +8801815-664068</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                        <div className="footer-single-col">
                                            <h3>Address</h3>
                                            <ul className="list-unstyled footer-nav-list mb-lg-0">
                                                <li><ExternalLink href="https://goo.gl/maps/HS3ABkzs6cFwYCNi9" target={"_blank"} className="text-decoration-none">6, Kalabagan Bus Stand (1st Floor), Mirpur Road, Dhaka-1205</ExternalLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom  bg-gradient text-white py-4">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-7 col-lg-7">
                                <div className="copyright-text">
                                    <p className="mb-lg-0 mb-md-0">&copy; 2021 Quiety Rights Reserved. Designed By
                                        <ExternalLink href="https://mrsabbir.website/" target="_blank" className="text-decoration-none"> <u>Dev</u></ExternalLink>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="footer-single-col text-start text-lg-end text-md-end">
                                    <ul className="list-unstyled list-inline footer-social-list mb-0">
                                        <li className="list-inline-item"><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li className="list-inline-item"><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                        <li className="list-inline-item"><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;