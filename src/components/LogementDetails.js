import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logementsreact.json';
import './LogementDetails.scss';
import StarRating from './StarRating';
import NotFound from '../pages/NotFound';
import Volet from './Volet';

function LogementDetails() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    const [currentImage, setCurrentImage] = useState(0);

    if (!logement) return <NotFound />;

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % logement.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? logement.pictures.length - 1 : prev - 1
        );
    };

    const volets = [
        { title: "Description", content: logement.description },
        { title: "Équipements", content: logement.equipments }
    ];

    return (
        <div className="logement-details">
            {/* Carrousel */}
            <div className="logement-details__carousel-container">
                <div className="logement-details__carousel">
                    <img
                        src={logement.pictures[currentImage]}
                        alt={`Photo ${currentImage + 1}`}
                        className="logement-details__carousel-image"
                    />
                    <button className="carousel__button prev" onClick={handlePrevImage}>‹</button>
                    <button className="carousel__button next" onClick={handleNextImage}>›</button>
                    <p>{currentImage + 1}/{logement.pictures.length}</p>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="logement-details__content">
                {/* Section gauche */}
                <div className="logement-details__left">
                    <h1 className="logement-details__title">{logement.title}</h1>
                    <p className="logement-details__location">{logement.location}</p>
                    <div className="logement-details__tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Section droite */}
                <div className="logement-details__right">
                    <div className="host">
                        <div className="host__info">
                            {logement.host.name.split(' ').map((part, index) => (
                                <p key={index} className="host__name">{part}</p>
                            ))}
                        </div>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="host__picture"
                        />
                    </div>
                    <StarRating rating={parseInt(logement.rating)} />
                </div>
            </div>

            {/* Volets Description et Équipements */}
            <Volet items={volets} />
        </div>
    );
}

export default LogementDetails;
