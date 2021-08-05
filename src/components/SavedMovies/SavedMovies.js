import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies({
  savedMovies,
  saveMovie,
  deleteMovie,

  movieName,
  setMovieName,
  
  isShortMoviesEnabled,
  setIsShortMoviesEnabled,

  handleMoviesSearch
}) {
  return (
    <div className="saved-movies">
      <SearchForm
        movieName={movieName}
        setMovieName={setMovieName}
        onSubmit={handleMoviesSearch}
      />
      <FilterCheckbox 
        isShortMoviesEnabled={isShortMoviesEnabled}
        setIsShortMoviesEnabled={setIsShortMoviesEnabled}
      />
      <MoviesCardList
        movies={savedMovies}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        withDeleteButton
      />
    </div>
  );
}

export default SavedMovies;