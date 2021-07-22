import React from 'react';

function Link({ onClick, text, linkText }) { 
  return (
    <span className="link-text">
      {text}
      <span className='link-button' onClick={onClick}>{linkText}</span>
    </span>
  );
}

export default Link;