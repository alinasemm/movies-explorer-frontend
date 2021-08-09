import { useEffect } from 'react'

import { filterMovies } from './filterMovies';
import { useLocalStorageState } from './useLocalStorageState';
import { useInitialRender } from './useInitialRender';

export function useMoviesFilter ({
  movies,
  movieName,
  isShortMoviesEnabled,
  setErrorMessage,
  onSearch = () => null,
  key = 'filteredMovies',
  isMovieNameRequired = true,
}) {
  const [filteredMovies, setFilteredMovies] = useLocalStorageState([], key);

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

    if (!movieName && isMovieNameRequired) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    if (movies.length === 0) {
      onSearch();
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