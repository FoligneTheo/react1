import React from 'react';
import './Footer.scss';
import footerImage from '../img/FooterPNG.png';
function Footer() {
    return (
        <footer className="footer">
            <img src={footerImage} alt="Kasa Footer" className="footer__image" />
        </footer>
    );
}

export default Footer;
