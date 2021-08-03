import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, setMovies, errorMessage, setErrorMessage, movieName, setMovieName }) {

  return (
    <div className="movies">
      <SearchForm 
        setErrorMessage={setErrorMessage} 
        setMovies={setMovies}
        movieName={movieName}
        setMovieName={setMovieName}
      />
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