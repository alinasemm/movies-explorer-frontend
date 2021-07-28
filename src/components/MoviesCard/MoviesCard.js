import React from 'react';
import CrossIcon from '../CrossIcon/CrossIcon';

function MoviesCard({ thumbnail, name, duration, withDeleteButton }) {
  const button = withDeleteButton
    ? <CrossIcon />
    : <button className='movies__card-button' />;

  return (
    <div className="movies__card">
      <img src={thumbnail} alt='превью фильма' className="movies__card-photo" />
      <div className='movies__content'>
        <div className='movies__card-text'>
          <h3 className='movies__card-title'>{name}</h3>
          <span className='movies__card-time'>{duration}</span>
        </div>
        {button}
      </div>
    </div>
  );
}

export default MoviesCard;