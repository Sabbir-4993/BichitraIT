import React from "react";
import {Link} from "react-router-dom";

import Background from "../../assets/img/page-header-bg.svg";
import about_1 from "../../assets/img/about-img-1.jpg";
import about_2 from "../../assets/img/about-img-2.jpg";
import about_3 from "../../assets/img/about-img-3.jpg";

class AboutHeader extends React.Component{
    render() {
        return(
            <section className="about-header-section ptb-120 position-relative overflow-hidden bg-dark" style= {{ backgroundImage: `url(${Background})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
                                <div className="about-content-left">
                                    <div className="about-info mb-5">
                                        <h1 className="fw-bold display-5">Grow your Business & Customer Satisfaction
                                            with
                                            Quiety</h1>
                                        <p className="lead">Dynamically disintermediate technically sound technologies
                                            with
                                            compelling quality vectors error-free communities. </p>
                                        <Link to="/" className="btn btn-primary mt-4 me-3">Open Positions</Link>
                                        <Link to="/" className="btn btn-soft-primary mt-4">Meet Our Team</Link>
                                    </div>
                                    <img src={about_1} alt="about" className="img-fluid about-img-first mt-5 rounded-custom shadow" />
                                </div>
                                <div className="about-content-right">
                                    <img src={about_2} alt="about" className="img-fluid mb-5 rounded-custom shadow" />
                                        <img src={about_3} alt="about" className="rounded-custom about-img-last shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5">
                </div>
            </section>
        );
    }
}

export default AboutHeader;
