import React from 'react';

function Title ({ children, className = '' }) {
  return (
    <h2 className={`title ${className}`}>
      {children}
    </h2>
  );
}

export default Title;
