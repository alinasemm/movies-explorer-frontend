import { useState } from 'react'

import * as api from './moviesApi'

import { useLocalStorageState } from './useLocalStorageState';
import { useMoviesFilter } from './useMoviesFilter';

export function useMovies ({ setIsLoading, movieName, isShortMoviesEnabled }) {
  const [movies, setMovies] = useLocalStorageState([], 'movies');
  const [errorMessage, setErrorMessage] = useState('');

  const getMovies = () => {
    setIsLoading(true);

    return api.getMovies()
      .then(setMovies)
      .catch((error) => {
        console.log(error);
        setErrorMessage([
          'Во время запроса произошла ошибка.',
          'Возможно, проблема с соединением или сервер недоступен.',
          'Подождите немного и попробуйте ещё раз'
        ].join(' '));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const [filteredMovies, handleMoviesSearch] = useMoviesFilter({
    movies,
    movieName,
    isShortMoviesEnabled,
    setErrorMessage,
    onSearch: getMovies
  });

  return {
    moviesErrorMessage: errorMessage,
    filteredMovies,
    handleMoviesSearch,
  };
}