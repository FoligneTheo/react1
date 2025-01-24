import React from 'react';
import Banner from '../components/Banner';
import image from '../img/BannerIMG.png';
import CardList from '../components/CardList';

function Acceuil() {
    return (
        <div>
            <Banner image={image} text="Chez vous, partout et ailleurs" />
            <CardList />
        </div>
    );
}

export default Acceuil;

