import React from 'react';

function Button({ text, buttonClassName = '' }) {
  return (
    <button className={`button ${buttonClassName}`}>
      {text}
    </button>
  );
}

export default Button;