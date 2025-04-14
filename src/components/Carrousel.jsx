import React, { useState } from 'react';
import './Carrousel.scss';

function Carousel({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? pictures.length - 1 : prev - 1
        );
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img
                    src={pictures[currentImage]}
                    alt={`Photo ${currentImage + 1}`}
                    className="carousel-image"
                />
                <button className="carousel__button prev" onClick={handlePrevImage}>‹</button>
                <button className="carousel__button next" onClick={handleNextImage}>›</button>
                <p>{currentImage + 1}/{pictures.length}</p>
            </div>
        </div>
    );
}

export default Carousel;
