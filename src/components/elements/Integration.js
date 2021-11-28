import React from "react";

import integations_1 from "../../assets/img/integations/1.png";
import integations_2 from "../../assets/img/integations/2.png";
import integations_3 from "../../assets/img/integations/3.png";
import integations_4 from "../../assets/img/integations/4.png";
import integations_5 from "../../assets/img/integations/5.png";
import integations_6 from "../../assets/img/integations/6.png";
import integations_7 from "../../assets/img/integations/7.png";
import integations_8 from "../../assets/img/integations/8.png";
import integations_9 from "../../assets/img/integations/9.png";
import integations_10 from "../../assets/img/integations/10.png";
import integations_11 from "../../assets/img/integations/11.png";
import integations_12 from "../../assets/img/integations/12.png";
import {Link} from "react-router-dom";

class Integration extends React.Component{
    render() {
        return(
            <section className="integration-section ptb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3">
                            <div className="integration-list-wrap">
                                <Link to="/" className="integration-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_1} alt="integration" className="img-fluid rounded-circle" />
                                </Link>
                                <Link to="/" className="integration-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_2} alt="integration" className="img-fluid rounded-circle" />
                                </Link>
                                <Link to="/" className="integration-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_3} alt="integration" className="img-fluid rounded-circle" />
                                </Link>

                                <Link to="/" className="integration-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_4} alt="integration" className="img-fluid rounded-circle" />
                                </Link>
                                <Link to="/" className="integration-5" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_5} alt="integration" className="img-fluid rounded-circle" />
                                </Link>
                                <Link to="/" className="integration-6" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                    <img src={integations_6} alt="integration" className="img-fluid rounded-circle" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
                                <h4 className="text-primary h5">Integration</h4>
                                <h2>We Collaborate with Top Software Company</h2>
                                <Link to="/" className="mt-4 btn btn-primary">View all Integration</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="col-lg-4">
                                <div className="integration-list-wrap">
                                    <Link to="/" className="integration-7" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_7} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>
                                    <Link to="/" className="integration-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_8} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>
                                    <Link to="/" className="integration-9" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_9} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>

                                    <Link to="/" className="integration-10" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_10} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>
                                    <Link to="/" className="integration-11" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_11} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>
                                    <Link to="/" className="integration-12" data-bs-toggle="tooltip" data-bs-placement="top" title="Your Brand Name">
                                        <img src={integations_12} alt="integration" className="img-fluid rounded-circle" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-100">
                        <div className="col-lg-5 col-md-12">
                            <Link to="/" className="mb-4 mb-lg-0 mb-xl-0 position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5">
                                <div className="position-relative connected-app-content">
                                    <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                                        <img src={integations_4} width="40" alt="integration" className="img-fluid" />
                                    </div>
                                    <h5>Google Drive</h5>
                                    <p className="mb-0 text-body">Competently generate unique e-services and client-based models. Globally engage tactical niche</p>
                                </div>
                                <span className="position-absolute integration-badge badge px-3 py-2 bg-primary-soft text-primary">Connect</span>
                            </Link>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <Link to="/" className="position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5">
                                <div className="position-relative connected-app-content">
                                    <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                                        <img src={integations_9} width="40" alt="integration" className="img-fluid" />
                                    </div>
                                    <h5>Google Drive</h5>
                                    <p className="mb-0 text-body">Globally engage tactical niche markets rather than client-based competently generate services</p>
                                </div>
                                <span className="position-absolute integration-badge badge px-3 py-2 bg-danger-soft text-danger">Connected</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Integration;