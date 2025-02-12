import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logementsreact.json';
import './LogementDetails.scss';

function LogementDetails() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    // State pour le carrousel
    const [currentImage, setCurrentImage] = useState(0);

    // State pour les volets Description et Équipements
    const [openValue, setOpenValue] = useState(null);

    const toggleValue = (index) => {
        setOpenValue(openValue === index ? null : index);
    };

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
                    <img
                        src={logement.host.picture}
                        alt={logement.host.name}
                        className="host__picture"
                    />
                    <p className="host__name">{logement.host.name}</p>
                    <p className="host__rating">Note : {logement.rating} ★</p>
                </div>
            </div>

            {/* Volets Description et Équipements */}
            <div className="accordion">
                {/* Volet Description */}
                <div
                    className={`accordion__item ${
                        openValue === 0 ? "accordion__item--active" : ""
                    }`}
                >
                    <div
                        className="accordion__header"
                        onClick={() => toggleValue(0)}
                    >
                        <span className="accordion__title">Description</span>
                        <span className="accordion__icon">
                            {openValue === 0 ? "▲" : "▼"}
                        </span>
                    </div>
                    {openValue === 0 && (
                        <div className="accordion__content">{logement.description}</div>
                    )}
                </div>

                {/* Volet Équipements */}
                <div
                    className={`accordion__item ${
                        openValue === 1 ? "accordion__item--active" : ""
                    }`}
                >
                    <div
                        className="accordion__header"
                        onClick={() => toggleValue(1)}
                    >
                        <span className="accordion__title">Équipements</span>
                        <span className="accordion__icon">
                            {openValue === 1 ? "▲" : "▼"}
                        </span>
                    </div>
                    {openValue === 1 && (
                        <div className="accordion__content">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LogementDetails;
