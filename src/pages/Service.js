import React from "react";
import Background from "../assets/img/page-header-bg.svg";
import ServiceList from "../components/elements/ServiceList";
import WorkProcess from "../components/elements/WorkProcess";
import ProjectComplete from "../components/elements/ProjectComplete";
import Trial from "../components/elements/Trial";


class Service extends React.Component{
    render() {
        return(
            <div>
                <section className="page-header position-relative overflow-hidden ptb-120 bg-dark" style= {{ backgroundImage: `url(${Background})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="display-5 fw-bold">We are Development Experts</h1>
                                <p className="lead">Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.</p>
                            </div>
                        </div>
                        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                    </div>
                </section>

                <ServiceList />
                <WorkProcess />
                <ProjectComplete />
                <Trial />
            </div>
        );
    }
}

export default Service;