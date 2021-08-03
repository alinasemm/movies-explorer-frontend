const shortMovieDuration = 40;

export default function filterMovies (movies, key, isShortMoviesEnabled) {
  const lowerKey = key.toLowerCase();

  return movies.filter((movie) => {
    const hasMatchInNameRU = movie.nameRU?.toLowerCase().includes(lowerKey);
    const hasMatchInNameEN = movie.nameEN?.toLowerCase().includes(lowerKey);
    const hasMatch = hasMatchInNameRU || hasMatchInNameEN;

    const isShortMovie = movie.duration <= shortMovieDuration;

    if (isShortMovie) {
      return isShortMoviesEnabled && hasMatch;
    }

    return hasMatch;
  });
}