import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import CrossIcon from '../CrossIcon/CrossIcon';

function Menu() {
  const links = [
    { title: 'Главная' },
    { title: 'Фильмы' },
    { title: 'Сохраненные фильмы' },
  ]
  return (
    <div className='menu'>
      <CrossIcon />
      <Navigation className='navigation_vertical' links={links} />
      <UserInfo
        contClassName='user-info_movies'
        textClassName='user-info__text_movies'
        buttonClassName='user-info__button_movies'
        text='Аккаунт'
      />
    </div>
  );
}

export default Menu;