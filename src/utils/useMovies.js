import { useEffect } from 'react'

import * as api from './moviesApi'

import { filterMovies } from './filterMovies';
import { useLocalStorageState } from './useLocalStorageState';
import { useInitialRender } from './useInitialRender';

export function useMovies ({ setIsLoading, setErrorMessage, movieName, isShortMoviesEnabled }) {
  const [movies, setMovies] = useLocalStorageState([], 'movies');
  const [filteredMovies, setFilteredMovies] = useLocalStorageState([], 'filteredMovies');

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

  const applyFilter = () => {
    const nextFilteredMovies = filterMovies(movies, movieName, isShortMoviesEnabled);
    if (nextFilteredMovies.length === 0) {
      setErrorMessage('Ничего не найдено');
    } else {
      setFilteredMovies(nextFilteredMovies);
    }
  }

  const handleMoviesSearch = () => {
    setErrorMessage('');

    if (!movieName) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    if (movies.length === 0) {
      getMovies();
      return;
    }

    applyFilter();
  }

  const isInitialRender = useInitialRender();
  useEffect(() => {
    if (!isInitialRender && movies.length > 0) {
      applyFilter();
    }
  }, [movies, isShortMoviesEnabled]);

  return [filteredMovies, handleMoviesSearch];
}