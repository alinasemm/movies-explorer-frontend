import React from 'react';

function FilterCheckbox({ isShortMoviesEnabled, setIsShortMoviesEnabled }) {
  
  let backgroundClassName = 'filter-checkbox__background';
  let circleClassName = 'filter-checkbox__circle';
  if (!isShortMoviesEnabled) {
    backgroundClassName = `${backgroundClassName} filter-checkbox__background_inactive`
    circleClassName = `${circleClassName} filter-checkbox__circle_inactive`
  }

  function handleClick() {
    setIsShortMoviesEnabled(!isShortMoviesEnabled);
  }

  return (
    <div className="filter-checkbox" onClick={handleClick}>
        <span className={backgroundClassName}>
          <span className={circleClassName} />
        </span>
        <h2 className='filter-checkbox__title'>Короткометражки</h2>
    </div>
  );
}

export default FilterCheckbox;