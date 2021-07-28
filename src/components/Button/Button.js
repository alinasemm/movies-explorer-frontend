import React from 'react';

function Button({ text, buttonClassName = 'button_large' }) {
  return (
    <button className={`button ${buttonClassName}`}>
      {text}
    </button>
  );
}

export default Button;