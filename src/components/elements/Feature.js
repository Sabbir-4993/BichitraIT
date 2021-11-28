import React from "react";

import Cta_img_1 from "../../assets/img/cta-img-1.png";
import Cta_img_2 from "../../assets/img/cta-img-2.png";
import {Link} from "react-router-dom";


class Feature extends React.Component{
    render(){
        return(
            <section className="feature-promo ptb-120 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-10">
                            <div className="section-heading text-center">
                                <h2>PRODUCTS & SOLUTIONS</h2>
                                <p>Our products are developed to meet the demands of today’s customer, serving both their immediate and long term interests. We constantly strive to develop and provide products that adhere to industry standards for networking, databases, computing, storage and inter-business system communications – always keeping in the forefront Open Architecture, low total cost of ownership, seamless integration, interoperability with other information systems, and ease of use, operation and installation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-promo p-lg-5 p-4 text-center mt-3">
                                <div className="feature-icon icon-center pb-5 rounded-custom bg-primary">
                                    <i className="fal fa-layer-group fa-2x text-white"></i>
                                </div>
                                <div className="feature-info-wrap">
                                    <h3 className="h5">Good Performance</h3>
                                    <p>Appropriately grow competitive leadership rather than strategic technically sound processes without state. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-promo p-lg-5 p-4 text-center mt-3">
                                <div className="feature-icon icon-center pb-5 rounded-custom bg-danger">
                                    <i className="fal fa-shield-check fa-2x text-white"></i>
                                </div>
                                <div className="feature-info-wrap">
                                    <h3 className="h5">Highly Secure</h3>
                                    <p>Appropriately grow competitive leadership rather than strategic technically sound processes without state. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature-promo p-lg-5 p-4 text-center mt-3">
                                <div className="feature-icon icon-center pb-5 rounded-custom bg-dark">
                                    <i className="fal fa-code fa-2x text-white"></i>
                                </div>
                                <div className="feature-info-wrap">
                                    <h3 className="h5">Fast Development</h3>
                                    <p>Appropriately grow competitive leadership rather than strategic technically sound processes without state. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-lg-5 pt-3">
                        <div className="col-lg-6 mt-4">
                            <div
                                className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                                <div className="cta-left-info mb-2">
                                    <h5>Utilize your software data</h5>
                                    <p>Progressively reinvent models and niche revolutionary benefits for integrated niches. </p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/" className="btn btn-outline-primary btn-sm">Start For Free</Link>
                                </div>
                                <div className="cta-img position-absolute right-0 bottom-0">
                                    <img src={Cta_img_1} alt="cta img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                                <div className="cta-left-info mb-2">
                                    <h5>Get real time updated anytime</h5>
                                    <p>Progressively reinvent models and niche revolutionary benefits for integrated niches. </p>
                                </div>
                                <div className="mt-auto">
                                    <Link to="/" className="btn btn-outline-primary btn-sm">Start For Free</Link>
                                </div>
                                <div className="cta-img position-absolute right-0 bottom-0">
                                    <img src={Cta_img_2} alt="cta img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;