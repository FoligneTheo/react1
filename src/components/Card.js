import React from 'react';
import './Card.scss';

function Card({ cover, title }) {
    return (
        <div className="card">
            <img className="card__image" src={cover} alt={title} />
            <div className="card__title">{title}</div>
        </div>
    );
}

export default Card;
