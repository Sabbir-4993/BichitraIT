import React from "react";

import image from "../../assets/img/screen/widget-12.png"
import {Link} from "react-router-dom";

class FeatureImage extends React.Component{
    render() {
        return(
            <section className="image-feature pt-60 pb-120">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-5 col-12 order-lg-1">
                            <div className="feature-img-content">
                                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                                    <i className="fal fa-fingerprint fa-2x text-white"></i>
                                </div>
                                <h2>Match Everything to Brand and Style</h2>
                                <p>Intrinsicly pontificate reliable metrics with enabled. Holisticly maintain
                                    clicks-and-mortar manufactured products empower viral customer service through
                                    resource deliverables.</p>
                                <p>Customer service through resource pontificate reliable metrics with enabled expedite
                                    resource maximizing information maintain manufactured products.</p>

                                <Link to="/" className="read-more-link text-decoration-none d-block mt-4">Know
                                    More About Us <i className="far fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-lg-0">
                            <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                                <img src={image} className="img-fluid" alt="feature" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureImage;