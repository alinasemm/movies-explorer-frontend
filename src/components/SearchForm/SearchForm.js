import React from 'react';

function SearchForm({ movieName, setMovieName, onSubmit }) {
  const handleInput = (event) => {
    setMovieName(event.target.value);
  }

  function handleSubmit(event) {  
    event.preventDefault();
    onSubmit(movieName);
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