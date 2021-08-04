import React from 'react';

function Button({ onClick, text, buttonClassName = 'button_large', isDisabled }) {
  return (
    <button
      className={`button ${buttonClassName} ${isDisabled ? 'button_disabled' : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;