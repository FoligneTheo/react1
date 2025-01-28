import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logementsreact.json';
import './LogementDetails.scss';

function LogementDetails() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    // Déclaration des hooks en dehors de tout bloc conditionnel
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
            <h1 className="logement-details__title">{logement.title}</h1>
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
            <div className="logement-details__info">
                <div className="logement-details__host">
                    <img src={logement.host.picture} alt={logement.host.name} />
                    <p>{logement.host.name}</p>
                </div>
                <p className="logement-details__location">{logement.location}</p>
                <p className="logement-details__rating">
                    Note : {logement.rating} ★
                </p>
                <div className="logement-details__tags">
                    {logement.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="logement-details__section">
                <button
                    className="toggle-button"
                    onClick={() => setDescriptionOpen((prev) => !prev)}
                >
                    Description
                </button>
                {isDescriptionOpen && <p className="logement-details__description">{logement.description}</p>}
            </div>
            <div className="logement-details__section">
                <button
                    className="toggle-button"
                    onClick={() => setEquipmentsOpen((prev) => !prev)}
                >
                    Équipements
                </button>
                {isEquipmentsOpen && (
                    <ul className="logement-details__equipments">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default LogementDetails;
