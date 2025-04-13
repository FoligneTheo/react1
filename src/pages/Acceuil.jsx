import React from 'react';
import Banner from '../components/Banner';
import image from '../img/BannerIMG.png';
import CardList from '../components/CardList';
import './Acceuil.scss';

function Acceuil() {
    return (
        <div className="home-container">
            <Banner image={image} text="Chez vous, partout et ailleurs" />
            <div className="card-list-wrapper">
                <CardList />
            </div>
        </div>
    );
}

export default Acceuil;
