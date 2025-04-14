import React from "react";
import '../pages/NotFound.scss'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    );
};

export default NotFound;
