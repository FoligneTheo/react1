import React from "react";
import image from '../img/BannerAbout.png';
import Banner from '../components/BannerAbout';
import VoletAbout from "../components/VoletAbout";


const About = () => {
    return (
        <div>
            <Banner image={image} />
            <VoletAbout />
            
        </div>
    );
};

export default About;
