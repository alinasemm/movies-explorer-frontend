import { useState, useEffect } from 'react';
import * as mainApi from './mainApi';

import { useMoviesFilter } from './useMoviesFilter';

export function useSavedMovies ({
  token,
  setIsLoading,
  movieName,
  isShortMoviesEnabled
}) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [likes, setLikes] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const getSavedMovies = () => {
    mainApi.getSavedMovies(token)
      .then(setSavedMovies)
      .catch((error) => {
        console.log(error);
      });
  }

  const saveMovie = (movie) => {
    return mainApi.saveMovie(movie, token).then((data) => {
      getSavedMovies();
    })   
    .catch((error) => {
      console.log(error);
    });
  }

  const deleteMovie = (id) => {
    return mainApi.deleteMovie(id, token).then((data) => {
      getSavedMovies();
    })   
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (token) {
      getSavedMovies();
    }
  }, [token]);

  useEffect(() => {
    setLikes(savedMovies.reduce((ref, savedMovie) => ({
      ...ref,
      [savedMovie.movieId]: savedMovie._id
    }), {}))
  }, [savedMovies]);

  const [filteredSavedMovies, handleSavedMoviesSearch] = useMoviesFilter({
    movies: savedMovies,
    movieName,
    isShortMoviesEnabled,
    setErrorMessage,
    key: 'filteredSavedMovies',
    isMovieNameRequired: false,
  });

  return {
    savedMoviesErrorMessage: errorMessage,
    filteredSavedMovies,
    handleSavedMoviesSearch,
    likes,
    saveMovie,
    deleteMovie,
  }
}