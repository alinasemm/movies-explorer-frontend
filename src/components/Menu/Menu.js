import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import CrossIcon from '../CrossIcon/CrossIcon';

function Menu({ closeMenu }) {
  const links = [
    { title: 'Главная' },
    { title: 'Фильмы', className: 'navigation__link_underline' },
    { title: 'Сохраненные фильмы' },
  ];

  return (
    <div className='menu'>
      <CrossIcon 
        iconClassName='cross-icon_menu'
        onClick={closeMenu}
      />
      <Navigation 
        className='navigation_vertical' 
        links={links}
        linksClassName='navigation__link_menu'
      />
      <UserInfo
        contClassName='user-info_menu'
        textClassName='user-info__text_menu'
        buttonClassName='user-info__button_menu'
        text='Аккаунт'
      />
    </div>
  );
}

export default Menu;