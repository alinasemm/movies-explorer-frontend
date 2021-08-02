import React, { useState } from 'react';
import { getMovies } from '../../utils/moviesApi';

const errorMessage = 'Нужно ввести ключевое слово';

function SearchForm({ setErrorMessage, setMovies }) {
  const [movieName, setMovieName] = useState('');

  const handleInput = (event) => {
    setMovieName(event.target.value);
  }

  function handleSubmit(event) {  
    event.preventDefault();

    if (movieName) {
      setErrorMessage('');
      getMovies().then((result) => {
        setMovies(result);
      });
    } else {
      setErrorMessage(errorMessage);
    }
  } 

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <span className='search-form__write-movie-name' />
      <input
        className='search-form__title'
        value={movieName}
        onChange={handleInput}
        placeholder='Фильм'
      />
      <button className='search-form__find-movie' />
    </form>
  );
}

export default SearchForm;