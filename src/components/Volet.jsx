import React, { useState } from 'react';
import './Volet.scss';

const Volet = ({ items }) => {
  const [openStates, setOpenStates] = useState(Array(items.length).fill(false));

  const toggle = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${openStates[index] ? 'accordion__item--active' : ''}`}
        >
          <div className="accordion__header" onClick={() => toggle(index)}>
            <span className="accordion__title">{item.title}</span>
            <button
  className={`carousel__button accordion__icon ${openStates[index] ? 'rotate' : ''}`}
  onClick={(e) => {
    e.stopPropagation();
    toggle(index);
  }}
>
  ›
</button>


          </div>

          <div
            className="accordion__content-wrapper"
            style={{
              maxHeight: openStates[index] ? '500px' : '0',
              transition: 'max-height 0.4s ease',
            }}
          >
            <div className="accordion__content">
              {Array.isArray(item.content) ? (
                <ul>
                  {item.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volet;
