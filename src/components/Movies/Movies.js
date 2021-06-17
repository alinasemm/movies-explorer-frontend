import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Movies() {
  return (
  <div className="movies">
    <SearchForm />
    <FilterCheckbox />
  </div>
  );
}

export default Movies;