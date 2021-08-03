import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

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
      {!isLoading && errorMessage && <ErrorMessage message={errorMessage} />}
      {!isLoading && !errorMessage && <MoviesCardList movies={movies} />}
    </div>
  );
}

export default Movies;