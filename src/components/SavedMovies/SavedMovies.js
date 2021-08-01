import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList withDeleteButton />
    </div>
  );
}

export default SavedMovies;