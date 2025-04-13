import React from "react";
import image from '../img/BannerAbout.png';
import Banner from '../components/Banner';
import VoletAbout from "../components/VoletAbout";
import StyleAbout from '../pages/About.scss';

const About = () => {
    return (
        <div className="about-container">
            <Banner image={image} />
            <VoletAbout />
        </div>
    );
};

export default About;
