import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ id, cover, title }) {
    return (
        <Link to={`/logements/${id}`} className="card">
            <img className="card__image" src={cover} alt={title} />
            <div className="card__overlay">
                <div className="card__title">{title}</div>
            </div>
        </Link>
    );
}

export default Card;
