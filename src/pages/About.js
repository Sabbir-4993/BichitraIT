import React from "react";
import OurStory from "../components/elements/OurStory.js";
import AboutHeader from "../components/elements/AboutHeader.js";
import OurTeam from "../components/elements/OurTeam";


class About extends React.Component{
    render() {
        return(
            <div>
                <AboutHeader />
                <OurStory />
                <OurTeam />
            </div>
        );
    }
}

export default About;