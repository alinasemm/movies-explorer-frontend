import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import CrossIcon from '../CrossIcon/CrossIcon';

const defaultLinks = [
  {
    title: 'Главная',
    pathname: '/'
  },
  {
    title: 'Фильмы',
    pathname: '/movies'
  },
  {
    title: 'Сохраненные фильмы',
    pathname: '/saved-movies'
  },
];

function Menu({ closeMenu }) {
  const location = useLocation();
  const [links, setLinks] = useState(defaultLinks);

  useEffect(() => {
    const nextLinks = defaultLinks.map(link => {
      if (location?.pathname === link.pathname) {
        return {
          ...link,
          className: 'navigation__link_underline'
        }
      }

      return link
    });

    setLinks(nextLinks);
  }, [location])

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
        onClick={closeMenu}
      />
      <UserInfo contClassName='user-info_menu' onClick={closeMenu} />
    </div>
  );
}

export default Menu;