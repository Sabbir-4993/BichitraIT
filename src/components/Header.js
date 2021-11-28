import React from "react";

import white_logo from "../assets/img/logo-white.png"
import logo_color from "../assets/img/logo-color.png"
import {Link} from "react-router-dom";



class Header extends React.Component {

    render() {

        return(
            <header className="main-header w-100">
                <nav className="navbar navbar-expand-xl navbar-light sticky-header">
                    <div className="container d-flex align-items-center justify-content-lg-between position-relative">
                        <Link to="/" className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                            <img src={white_logo} alt="logo" className="img-fluid logo-white"/>
                            <img src={logo_color} alt="logo" className="img-fluid logo-color"/>
                        </Link>

                        <a className="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop" role="button">
                            <span className="far fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"></span>
                        </a>

                        <div className="clearfix"></div>
                        <div className="collapse navbar-collapse justify-content-center">
                            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                                <li><Link to="/" className="nav-link">Home</Link></li>
                                <li><Link to="/service" className="nav-link">Services</Link></li>
                                <li><Link to="/about" className="nav-link">About Us</Link></li>
                                <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                            <Link to="/login" className="btn btn-link text-decoration-none me-2">Sign In</Link>
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                        </div>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasWithBackdrop">
                            <div className="offcanvas-header d-flex align-items-center mt-4">
                                <Link to="/" className="d-flex align-items-center mb-md-0 text-decoration-none">
                                    <img src={logo_color} alt="logo" className="img-fluid ps-2"/>
                                </Link>
                                <button type="button" className="close-btn text-danger" data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                    <i className="far fa-close"></i>
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                                    <li><Link to="/" className="nav-link">Home</Link></li>
                                    <li><Link to="/service" className="nav-link">Services</Link></li>
                                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                                    <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                                    <li><Link to="/login" className="nav-link">Login</Link></li>
                                </ul>
                                <div className="action-btns mt-4 ps-3">
                                    <Link to="/login" className="btn btn-outline-primary me-2">Sign In</Link>
                                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        );
    }
}

export default Header;
