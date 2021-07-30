import React from 'react';

function SearchForm() {
  return (
    <div className="search-form">
      <button className='search-form__write-movie-name' />
      <input className='search-form__title' placeholder='Фильм' required/>
      <button className='search-form__find-movie' />
    </div>
  );
}

export default SearchForm;