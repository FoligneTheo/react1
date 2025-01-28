import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logementsreact.json';
import './LogementDetails.scss';

function LogementDetails() {
    const { id } = useParams(); // Récupère l'id depuis l'URL
    const logement = logements.find((item) => item.id === id); // Trouve le logement correspondant

    if (!logement) {
        return <h2>Logement non trouvé</h2>;
    }

    return (
        <div className="logement-details">
            <h1 className="logement-details__title">{logement.title}</h1>
            <div className="logement-details__carousel">
                {logement.pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`${logement.title} - ${index + 1}`}
                        className="logement-details__image"
                    />
                ))}
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
            <div className="logement-details__description">
                <h3>Description</h3>
                <p>{logement.description}</p>
            </div>
            <div className="logement-details__equipments">
                <h3>Équipements</h3>
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LogementDetails;
