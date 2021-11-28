import React from "react";

class ProjectComplete extends React.Component{
    render() {
        return(
            <>
                <section className="promo-section ptb-120 bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6">
                                <div className="section-heading text-center">
                                    <h2>Everything We Do it With Love</h2>
                                    <p>Progressively deploy market positioning catalysts for change and technically sound authoritatively e-enable resource-leveling infrastructures. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div
                                    className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                                    <div className="promo-card-info">
                                        <h3 className="display-5 fw-medium mb-4">300+</h3>
                                        <h2 className="h5">Completed Projects</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div
                                    className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                                    <div className="promo-card-info">
                                        <h3 className="display-5 fw-medium mb-4">200+</h3>
                                        <h2 className="h5">Happy Client</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div
                                    className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
                                    <div className="promo-card-info">
                                        <h3 className="display-5 fw-medium mb-4">250</h3>
                                        <h2 className="h5">Timely Delivery</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div
                                    className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
                                    <div className="promo-card-info">
                                        <h3 className="display-5 fw-medium mb-4">95%</h3>
                                        <h2 className="h5">24/7 Support</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ProjectComplete;