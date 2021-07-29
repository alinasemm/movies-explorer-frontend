import React from 'react';

function MajorTitle ({ children, id }) {
  return (
    <h2 className='major-title' id={id}>
      {children}
    </h2>
  );
}

export default MajorTitle;
