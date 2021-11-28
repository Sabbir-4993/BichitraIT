import React from "react";
import {Link} from "react-router-dom";

class Trial extends React.Component{
    render() {
        return(
            <section className="cta-subscribe pt-60 pb-120 ">
                <div className="container">
                    <div className="bg-gradient ptb-120 position-relative overflow-hidden rounded-custom">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="subscribe-info-wrap text-center position-relative z-2">
                                    <div className="section-heading">
                                        <h4 className="h5 text-warning">Let's Try! Get Free Support</h4>
                                        <h2><a href="tel:+8801815-664068">+8801815-664068</a></h2>
                                        <p>We can help you to create your dream website for better business revenue.</p>
                                    </div>
                                    <div className="form-block-banner mw-60 m-auto mt-5">
                                        <Link to="/contact" className="btn btn-primary">Contact with Us</Link>
                                    </div>
                                    <ul className="nav justify-content-center subscribe-feature-list mt-4">
                                        <li className="nav-item">
                                            <span><i className="far fa-check-circle text-primary me-2"></i>Free Support</span>
                                        </li>
                                        <li className="nav-item">
                                            <span><i className="far fa-check-circle text-primary me-2"></i>Support 24/7</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
                        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trial;