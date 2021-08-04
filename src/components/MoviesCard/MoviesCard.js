import React, { useState } from 'react';
import CrossIcon from '../CrossIcon/CrossIcon';

function MoviesCard({ thumbnail, name, duration, withDeleteButton, trailerLink }) {

    const [isSelected, setSelectedState] = useState(false);
    const toggleSelected = (event) => {
      event.stopPropagation();
      event.preventDefault();
      setSelectedState(!isSelected);
    }

    const button = withDeleteButton
    ? <CrossIcon />
    : <button 
        className={`movies__card-button ${isSelected ? 'movies__card-button_active' : ''}`} 
        onClick={toggleSelected}
      />;

  return (
    <a href={trailerLink} className="movies__card" target="__black" rel='noreferrer'>
      <img src={thumbnail} alt='превью фильма' className="movies__card-photo" />
      <div className='movies__content'>
        <div className='movies__card-text'>
          <h3 className='movies__card-title' title={name}>{name}</h3>
          <span className='movies__card-time'>{duration}</span>
        </div>
        {button}
      </div>
    </a>
  );
}

export default MoviesCard;