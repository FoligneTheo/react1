import React from 'react';
import Card from './Card';
import logements from '../data/logementsreact.json';
import './CardList.scss';

function CardList() {
    return (
        <div className="card-list">
            {logements.slice(0, 6).map((logement) => (
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
