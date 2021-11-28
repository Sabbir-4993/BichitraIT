import React from "react";
import Hero from "../components/elements/Hero";
import Feature from "../components/elements/Feature";
import WhyChoose from "../components/elements/WhyChoose";
import FeatureImage from "../components/elements/FeatureImage";
import Testimonial from "../components/elements/Testimonial";
import WorkProcess from "../components/elements/WorkProcess";
import Price from "../components/elements/Price";
import Faq from "../components/elements/Faq";
import Integration from "../components/elements/Integration";
import Trial from "../components/elements/Trial";


class Home extends React.Component{
    render(){
        return(
            <div>
                <Hero />
                <Feature />
                <WhyChoose />
                <FeatureImage />
                <Testimonial />
                <WorkProcess />
                <Price />
                <Faq />
                <Integration />
                <Trial />
            </div>
        )
    }
}

export default Home;