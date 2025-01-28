import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logementsreact.json';
import './LogementDetails.scss';

function LogementDetails() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    // State pour le carrousel et les sections
    const [currentImage, setCurrentImage] = useState(0);
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

    if (!logement) {
        return <h2>Logement non trouvé</h2>;
    }

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % logement.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? logement.pictures.length - 1 : prev - 1
        );
    };

    return (
        <div className="logement-details">
            {/* Carrousel */}
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
                    <img
                        src={logement.host.picture}
                        alt={logement.host.name}
                        className="host__picture"
                    />
                    <p className="host__name">{logement.host.name}</p>
                    <p className="host__rating">Note : {logement.rating} ★</p>
                </div>
            </div>

            {/* Boutons Description et Équipements */}
            <div className="logement-details__buttons">
                <button
                    className="toggle-button"
                    onClick={() => setDescriptionOpen((prev) => !prev)}
                >
                    Description
                </button>
                <button
                    className="toggle-button"
                    onClick={() => setEquipmentsOpen((prev) => !prev)}
                >
                    Équipements
                </button>
            </div>

            {/* Sections Description et Équipements */}
            {isDescriptionOpen && (
                <div className="logement-details__description">
                    <p>{logement.description}</p>
                </div>
            )}
            {isEquipmentsOpen && (
                <ul className="logement-details__equipments">
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LogementDetails;
