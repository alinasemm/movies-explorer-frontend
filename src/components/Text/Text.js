import React from 'react';

function Text ({ children, className = '' }) {
  return (
    <p className={`text ${className}`}>
      {children}
    </p>
  );
}

export default Text;
