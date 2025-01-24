import React from "react";
import logo from '../img/LOGOkasa.png';
import Menu from './Menu';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="LOGOkasa" />
            <Menu />
        </div>
    );
};

export default Header;


