import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreCards from '../MoreCards/MoreCards';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <MoreCards />
    </div>
  );
}

export default Movies;