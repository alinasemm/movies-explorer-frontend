import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';
// import { useWindowSize } from './useWindowSize';

function Movies({
  isShortMoviesEnabled,
  setIsShortMoviesEnabled,
  movies,
  errorMessage,
  handleMoviesSearch,
  isLoading,
  movieName,
  setMovieName
}) {

  // const width = useWindowSize();
  // console.log({width});

  // const [visibleMoviesCount, setVisibleMoviesCount] = useState(0);
  // console.log({visibleMoviesCount});

  // useEffect(() => {
  //   if (width) {
  //     setVisibleMoviesCount();
  //   }
  // }, [width])

  // const [cardsLength, setCardsLength] = useState(16)

  // const updateCardsLength = () => {
  //   if (document.documentElement.clientWidth < 550) {
  //     setCardsLength(5);
  //   } else if (document.documentElement.clientWidth < 1018) {
  //     setCardsLength(8);
  //   } else {
  //     setCardsLength(16);
  //   }
  // }

  // useEffect(() => {
  //   updateCardsLength();
  //   window.addEventListener('resize', updateCardsLength);
  //   return () => {
  //     window.removeEventListener('resize', updateCardsLength);
  //   }
  // }, []);

  return (
    <div className="movies">
      <SearchForm
        movieName={movieName}
        setMovieName={setMovieName}
        onSubmit={handleMoviesSearch}
      />
      <FilterCheckbox 
        isShortMoviesEnabled={isShortMoviesEnabled}
        setIsShortMoviesEnabled={setIsShortMoviesEnabled}
      />
      {isLoading && <Preloader />}
      {!isLoading && errorMessage && <ErrorMessage message={errorMessage} errorMessageClassName={'error-message_movies'}/>}
      {!isLoading && !errorMessage && <MoviesCardList movies={movies} />}
    </div>
  );
}

export default Movies;