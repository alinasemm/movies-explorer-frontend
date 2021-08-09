import { useEffect } from 'react'

import { filterMovies } from './filterMovies';
import { useLocalStorageState } from './useLocalStorageState';
import { useInitialRender } from './useInitialRender';

export function useMoviesFilter ({
  movies,
  movieName,
  isShortMoviesEnabled,
  setErrorMessage,
  onSearch,
  key = 'filteredMovies',
  isMovieNameRequired = true,
}) {
  const [filteredMovies, setFilteredMovies] = useLocalStorageState([], key);

  const applyFilter = () => {
    const nextFilteredMovies = filterMovies(movies, movieName, isShortMoviesEnabled);

    if (nextFilteredMovies.length === 0) {
      setErrorMessage('Ничего не найдено');
    }

    setFilteredMovies(nextFilteredMovies);
  }

  const handleMoviesSearch = () => {
    setErrorMessage('');

    if (!movieName && isMovieNameRequired) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }

    const shouldSearch = movies.length === 0 && onSearch;
    if (shouldSearch) {
      onSearch();
      return;
    }

    applyFilter();
  }

  const isInitialRender = useInitialRender();
  useEffect(() => {
    if (!isInitialRender && (movieName || !isMovieNameRequired)) {
      setErrorMessage('');
      applyFilter();
    }
  }, [movies, isShortMoviesEnabled]);

  return [filteredMovies, handleMoviesSearch];
}