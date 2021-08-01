import React from 'react';

function Button({ onClick, text, buttonClassName = 'button_large' }) {
  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;