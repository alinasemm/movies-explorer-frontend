import React from 'react';
import previewCard from '../../images/preview-1.png';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const movies = Array.from({ length: 16 }).map((_, i) => ({
    thumbnail: previewCard,
    name: '33 слова о дизайне',
    id: i,
    duration: '1ч42м',
  }))

  return (
    <div className="movies__card-list">
        {movies.map((movie) => {
          return (
            <MoviesCard
            key={movie.id}
            name={movie.name}
            thumbnail={movie.thumbnail}
            duration={movie.duration}
            />
          )
        })}
      </div>
  );
}

export default MoviesCardList;