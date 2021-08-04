import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreCards from '../MoreCards/MoreCards';
import { moviesUrl } from '../../utils/moviesApi';
import { formatDuration } from '../../utils/formatDuration';

function MoviesCardList({ withDeleteButton, movies }) {
  const [cardsLength, setCardsLength] = useState(16);
  const [cardsStep, setCardsStep] = useState(4);

  const updateCardsSettings = () => {
    if (document.documentElement.clientWidth < 767) {
      setCardsLength(5);
      setCardsStep(2)
    } else if (document.documentElement.clientWidth < 1018) {
      setCardsLength(8);
      setCardsStep(2);
    } else if (document.documentElement.clientWidth < 1279) {
      setCardsLength(12);
      setCardsStep(3);
    } else {
      setCardsLength(16);
      setCardsStep(4);
    }
  }

  const handleMoreCardsClick = () => {
    setCardsLength(cardsLength + cardsStep);
  }

  useEffect(() => {
    updateCardsSettings();
    window.addEventListener('resize', updateCardsSettings);
    return () => {
      window.removeEventListener('resize', updateCardsSettings);
    }
  }, []);

  console.log({ cardsStep, cardsLength, moviesLength: movies.length })

  if(movies.length === 0) {
    return null;
  }

  return (
    <>
      <div className="movies__card-list">
        {movies.slice(0, cardsLength).map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              thumbnail={`${moviesUrl}${movie.image.url}`}
              duration={formatDuration(movie.duration)}
              withDeleteButton={withDeleteButton}
              trailerLink={movie.trailerLink}
            />
          )
        })}
      </div>
      {movies.length > cardsLength && <MoreCards onClick={handleMoreCardsClick}/>}
    </>
  );
}

export default MoviesCardList;