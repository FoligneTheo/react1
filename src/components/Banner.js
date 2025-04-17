import React from 'react';
import './Banner.scss';

function Banner({ image, text }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <div className="banner__overlay">
                <div className="banner__text">{text}</div>
            </div>
        </div>
    );
}

export default Banner;
