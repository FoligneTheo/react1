import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.scss';

function CardList() {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data/logementsreact.json`)
            .then((res) => {
                if (!res.ok) throw new Error('Erreur de chargement');
                return res.json();
            })
            .then((data) => {
                console.log('Données chargées :', data);
                setLogements(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur lors du fetch :', error);
                setLoading(false);
            });
    }, []);
    

    if (loading) return <p>Chargement...</p>;

    return (
        <div className="card-list">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    cover={logement.cover}
                    title={logement.title}
                />
            ))}
        </div>
    );
}

export default CardList;
