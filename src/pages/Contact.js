import React from "react";
import Background from "../assets/img/page-header-bg.svg";
import ContactBG from "../assets/img/shape/contact-us-bg.svg";
import contact from "../assets/img/contact-us-img-2.svg";

class Contact extends React.Component{
    render() {
        return(
            <div>
                <section className="page-header position-relative overflow-hidden ptb-120 bg-dark" style= {{ backgroundImage: `url(${Background})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="display-5 fw-bold">Contact Us</h1>
                                <p className="lead">Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.</p>
                            </div>
                        </div>
                        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                    </div>
                </section>

                <section className="contact-promo ptb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                                    <span className="fad fa-comment-alt-lines fa-3x text-primary"></span>
                                    <div className="contact-promo-info mb-4">
                                        <h5>Chat with us</h5>
                                        <p>We've got live Social Experts waiting to help you <strong>saturday to thursday</strong> from
                                            <strong>9am to 8pm.</strong>
                                        </p>
                                    </div>
                                    <a href="mailto:info@bichitrait.com" className="btn btn-link mt-auto">Chat with us</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                                    <span className="fad fa-envelope fa-3x text-primary"></span>
                                    <div className="contact-promo-info mb-4">
                                        <h5>Email Us</h5>
                                        <p>Simple drop us an email at <strong> info@bichitrait.com </strong>and you'll receive a reply within 24 hours</p>
                                    </div>
                                    <a href="mailto:info@bichitrait.com" className="btn btn-primary mt-auto">Email Us</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                                    <span className="fad fa-phone fa-3x text-primary"></span>
                                    <div className="contact-promo-info mb-4">
                                        <h5>Give us a call</h5>
                                        <p>We've got live Social Experts waiting to help you <strong>saturday to thursday</strong> from
                                            <strong>9am to 8pm.</strong>
                                        </p>
                                    </div>
                                    <a href="tel:+8801815664068" className="btn btn-link mt-auto">+8801815-664068</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-us-form pt-60 pb-120" style= {{ backgroundImage: `url(${ContactBG})`}} >
                    <div className="container">
                        <div className="row justify-content-lg-between align-items-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="section-heading">
                                    <h2>Talk to Our Sales & Marketing Department Team</h2>
                                    <p>Collaboratively promote client-focused convergence vis-a-vis customer directed
                                        alignments via
                                        standardized infrastructures.</p>
                                </div>
                                <form action="#" className="register-form">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" className="mb-1">First name <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" id="firstName" required placeholder="First name" aria-label="First name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 ">
                                            <label htmlFor="lastName" className="mb-1">Last name</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" id="lastName" placeholder="Last name" aria-label="Last name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="phone" className="mb-1">Phone <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" id="phone" required placeholder="Phone" aria-label="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="email" className="mb-1">Email<span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" id="email" required placeholder="Email" aria-label="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="yourMessage" className="mb-1">Message <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <textarea className="form-control" id="yourMessage" required placeholder="How can we help you?" style={{height: '120px'}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-4">Get in Touch</button>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-10">
                                <div className="contact-us-img">
                                    <img src={contact} alt="contact us" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;