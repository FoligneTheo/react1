import React from "react";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active" : ""}
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
