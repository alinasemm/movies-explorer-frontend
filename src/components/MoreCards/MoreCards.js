import React from 'react';

function MoreCards({ onClick }) {
  return (
    <div className="more-cards">
      <button className='more-cards__button' onClick={onClick}>Ещё</button>
    </div>
  );
}

export default MoreCards;