import React from 'react';
import Banner from '../components/Banner';
import image from '../img/BannerIMG.png';

function Acceuil() {
    return (
        <div>
            <Banner image={image} text="Chez vous, partout et ailleurs" />
        </div>
    );
}

export default Acceuil;

