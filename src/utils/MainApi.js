export function createUser({ name, email, password }) {
  return fetch('http://localhost:3001/signup', {
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
  return fetch('http://localhost:3001/signin', {
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
  return fetch('http://localhost:3001/users/me', {
    method: 'GET', 
      headers: {
        authorization: `Bearer ${token}`
      }
  })
  .then((response) => {
    return response.json();
  });
}

export function saveMovie(movie, token) {
  return fetch('http://localhost:3001/movies', {
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
  return fetch(`http://localhost:3001/movies/${id}`, {
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
  return fetch('http://localhost:3001/movies', {
    method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
  })
  .then((response) => {
    return response.json();
  });
}