const baseUrl = 'http://api.alina-movies-explorer.nomoredomains.icu';

export function createUser({ name, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST', 
    body: JSON.stringify({
      name,
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function login({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST', 
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function getUser(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET', 
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function updateUser({ name, email }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify({
      name,
      email
    }),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function saveMovie(movie, token) {
  return fetch(`${baseUrl}/movies`, {
    method: 'POST', 
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function deleteMovie(id, token) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    return response.json();
  });
}

export function getSavedMovies(token) {
  return fetch(`${baseUrl}/movies`, {
    method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
  })
  .then((response) => {
    return response.json();
  });
}
