import React from 'react';
import CrossIcon from '../CrossIcon/CrossIcon';
import { formatDuration } from '../../utils/formatDuration';

function MoviesCard({ id, movie, saveMovie, deleteMovie, withDeleteButton }) {
  const toggleSelected = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (id) {
      deleteMovie(id);
    } else {
      saveMovie(movie);
    }
  }

  const button = withDeleteButton
  ? <CrossIcon onClick={() => deleteMovie(id)} />
  : <button 
      className={`movies__card-button ${id ? 'movies__card-button_active' : ''}`} 
      onClick={toggleSelected}
    />;

  return (
    <a href={movie.trailer} className="movies__card" target="__black" rel='noreferrer'>
      <img src={movie.thumbnail} alt='превью фильма' className="movies__card-photo" />
      <div className='movies__content'>
        <div className='movies__card-text'>
          <h3 className='movies__card-title' title={movie.nameRU}>{movie.nameRU}</h3>
          <span className='movies__card-time'>{formatDuration(movie.duration)}</span>
        </div>
        {button}
      </div>
    </a>
  );
}

export default MoviesCard;