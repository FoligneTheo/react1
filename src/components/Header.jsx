import React from "react";
import logo from '../img/LOGOkasa.png';
import Menu from './Menu';
import './Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__container">
                <img src={logo} alt="LOGOkasa" className="logo" />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
