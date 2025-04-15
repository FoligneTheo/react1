import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleDropdown}>
        <h2 className="dropdown__title">{title}</h2>
        <span className={`dropdown__arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Dropdown;
