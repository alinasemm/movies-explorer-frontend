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
