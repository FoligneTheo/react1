import React from 'react';
import './Banner.scss';

function Banner({ image, text }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner__overlay">
                <h1 className="banner__text">{text}</h1>
            </div>
        </div>
    );
}

export default Banner;
