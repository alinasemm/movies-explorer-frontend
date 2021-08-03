import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Movies({ movies, errorMessage, handleMoviesSearch }) {
  return (
    <div className="movies">
      <SearchForm onSubmit={handleMoviesSearch} />
      <FilterCheckbox />
      {errorMessage
        ? <ErrorMessage message={errorMessage} />
        : <MoviesCardList movies={movies} />}
    </div>
  );
}

export default Movies;