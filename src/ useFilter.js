import { useState, useEffect } from 'react';

const shortMovieDuration = 40;

export default function useFilter({ movies, isShortMoviesEnabled, key, setErrorMessage }) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(
    () => {
      const nextFilteredMovies = movies.filter((movie) => {
        const hasMatchInNameRU = movie.nameRU?.includes(key);
        const hasMatchInNameEN = movie.nameEN?.includes(key);
        const hasMatch = hasMatchInNameRU || hasMatchInNameEN;

        const isShortMovie = movie.duration <= shortMovieDuration;

        if (isShortMovie) {
          return isShortMoviesEnabled && hasMatch;
        }

        return hasMatch;
      });

      setFilteredMovies(nextFilteredMovies);
    }, 
    [movies, isShortMoviesEnabled, key]
  );

  return filteredMovies;
}