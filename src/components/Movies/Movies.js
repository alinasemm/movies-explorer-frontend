import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreCards from '../MoreCards/MoreCards';
import Menu from '../Menu/Menu';

function Movies() {
  return (
    <div className="movies">
      <Menu />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <MoreCards />
    </div>
  );
}

export default Movies;