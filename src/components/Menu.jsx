import React from "react";
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
