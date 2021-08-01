import React from 'react';

function Subtitle ({ children, className = '' }) {
  return (
    <h3 className={`subtitle ${className}`}>
      {children}
    </h3>
  );
}

export default Subtitle;
