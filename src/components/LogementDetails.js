import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './LogementDetails.scss';
import StarRating from './StarRating';
import NotFound from '../pages/NotFound';
import Volet from './Volet';
import Carrousel from '../components/Carrousel';

function LogementDetails() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/logementsreact.json`)
            .then((res) => {
                if (!res.ok) throw new Error('Erreur de chargement');
                return res.json();
            })
            .then((data) => {
                const found = data.find((item) => item.id === id);
                if (!found) {
                    setError(true);
                } else {
                    setLogement(found);
                }
            })
            .catch((err) => {
                console.error(err);
                setError(true);
            });
    }, [id]);

    if (error) return <NotFound />;
    if (!logement) return <p>Chargement...</p>;

    const volets = [
        { title: "Description", content: logement.description },
        { title: "Équipements", content: logement.equipments }
    ];

    return (
        <div className="logement-details">
            <Carrousel pictures={logement.pictures} />

            <div className="logement-details__content">
                <div className="logement-details__left">
                    <h1 className="logement-details__title">{logement.title}</h1>
                    <p className="logement-details__location">{logement.location}</p>
                    <div className="logement-details__tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="logement-details__right">
                    <StarRating rating={parseInt(logement.rating)} />
                    <div className="host">
                        <div className="host__info">
                            <p className="host__name">{logement.host.name}</p>
                        </div>
                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="host__picture"
                        />
                    </div>
                </div>
            </div>

            <Volet items={volets} />
        </div>
    );
}

export default LogementDetails;
