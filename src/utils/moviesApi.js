import { formatMovie } from "./formatMovie";

const moviesUrl = 'https://api.nomoreparties.co';

export function getMovies() {
  return fetch(`${moviesUrl}/beatfilm-movies`)
    .then((response) => response.json())
    .then((movies) => movies.map((movie) => formatMovie(movie, moviesUrl)));
}
