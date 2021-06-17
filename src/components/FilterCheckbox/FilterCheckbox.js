import React from 'react';
import filterCheckboxOn from '../../images/smalltumb-on.svg';
import filterCheckboxOff from '../../images/smalltumb-off.svg';

function FilterCheckbox() {
  return (
  <div className="filter-checkbox">
    <button className='filter-checkbox__on' img={filterCheckboxOn} alt='изображение переключателя короткометражек в активном режиме' />
    <button className='filter-checkbox__off' img={filterCheckboxOff} alt='изображение переключателя короткометражек в отключенном режиме'></button>
    <h2 className='filter-checkbox__tittle'>Короткометражки</h2>
  </div>
  );
}

export default FilterCheckbox;