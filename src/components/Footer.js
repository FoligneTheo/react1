import React from "react";
import "./Footer.scss";
import logo from '../img/WhiteKasa.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <img src={logo} alt="Kasa Logo" className="footer__logo" />
                <p className="footer__text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
