export const moviesUrl = 'https://api.nomoreparties.co';

export function getMovies() {
  return fetch(`${moviesUrl}/beatfilm-movies`)
    .then((response) => {
      return response.json();
    });
}
