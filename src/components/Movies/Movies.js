import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, setMovies }) {
   const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="movies">
      <SearchForm setErrorMessage={setErrorMessage} setMovies={setMovies}/>
      <FilterCheckbox />
      {errorMessage
        ? errorMessage
        : (
          <>
            <MoviesCardList movies={movies} />
          </>
        )}
    </div>
  );
}

export default Movies;