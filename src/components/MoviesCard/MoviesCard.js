import React from 'react';

function MoviesCard({ thumbnail, name, duration }) {
  return (
  <div className="movies__card">
    <img src={thumbnail} alt='превью фильма' className="movies__card-photo" />
    <div className='movies__content'>
    <div className='movies__card-text'>
      <h3 className='movies__card-tittle'>{name}</h3>
      <span className='movies__card-time'>{duration}</span>
    </div>
    <button className='movies__card-button' />
    </div>
  </div>
  );
}

export default MoviesCard;