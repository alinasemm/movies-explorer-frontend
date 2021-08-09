import React, { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  savedMovies,
  saveMovie,
  deleteMovie,

  movieName,
  setMovieName,
  
  isShortMoviesEnabled,
  setIsShortMoviesEnabled,

  handleMoviesSearch,

  errorMessage,
  isLoading,
}) {
  useEffect(() => {
    handleMoviesSearch();
  }, []);

  useEffect(() => {
    if (!movieName) {
      handleMoviesSearch();
    }
  }, [movieName]);

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
      {isLoading && <Preloader />}
      {!isLoading && errorMessage && <ErrorMessage message={errorMessage} errorMessageClassName={'error-message_movies'}/>}
      {!isLoading && !errorMessage && <MoviesCardList
        movies={savedMovies}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}
        withDeleteButton
      />}
    </div>
  );
}

export default SavedMovies;