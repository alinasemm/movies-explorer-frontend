import React, { useState, useEffect } from 'react';
import previewCard from '../../images/preview-1.png';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const [cardsLength, setCardsLength] = useState(16)

  const updateCardsLength = () => {
    if (document.documentElement.clientWidth < 550) {
      setCardsLength(5);
    } else if (document.documentElement.clientWidth < 1018) {
      setCardsLength(8);
    } else {
      setCardsLength(16);
    }
  }

  useEffect(() => {
    updateCardsLength();
    window.addEventListener('resize', updateCardsLength);
    return () => {
      window.removeEventListener('resize', updateCardsLength);
    }
  }, []);

  const movies = Array.from({ length: cardsLength }).map((_, i) => ({
    thumbnail: previewCard,
    name: '33 слова о дизайне',
    id: i,
    duration: '1ч42м',
  }));

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