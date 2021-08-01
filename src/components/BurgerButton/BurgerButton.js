import React from 'react';

function BurgerButton ({ children, className = '', onClick }) {
  return (
    <button className={`burger-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default BurgerButton;

