import React from "react";
import image from '../img/BannerAbout.png';
import Banner from '../components/Banner';
import Volet from "../components/Volet";
import '../pages/About.scss';

const About = () => {
    const items = [
        { title: "Fiabilité", content: "Contenu sur la fiabilité..." },
        { title: "Respect", content: "Contenu sur le respect..." },
        { title: "Service", content: "Contenu sur le service..." },
        { title: "Sécurité", content: "Contenu sur la sécurité..." }
    ];

    return (
        <div className="about-container">
            <Banner image={image} />
            <Volet items={items} />
        </div>
    );
};

export default About;
