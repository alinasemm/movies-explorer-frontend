import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

function Movies({
  movies,
  likes,
  saveMovie,
  deleteMovie,

  movieName,
  setMovieName,

  isShortMoviesEnabled,
  setIsShortMoviesEnabled,

  handleMoviesSearch,
  
  errorMessage,
  isLoading
}) {
  useEffect(() => {
    handleMoviesSearch();
  }, []);

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
      {!isLoading && !errorMessage && (
        <MoviesCardList
          movies={movies}
          likes={likes}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
        />
      )}
    </div>
  );
}

export default Movies;