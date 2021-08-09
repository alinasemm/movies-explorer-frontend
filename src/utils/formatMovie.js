export function formatMovie (movie, moviesUrl) {
  const url = `${moviesUrl}${movie.image?.url}`;

  return {
    country: movie.country || 'unknown',
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: url,
    trailer: movie.trailerLink,
    thumbnail: url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }
}