import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import BurgerButton from '../BurgerButton/BurgerButton'
import Button from '../Button/Button'
import headerLogo from '../../images/header-logo.svg';

const defaultLinks = [
  { 
    title: 'Фильмы', 
    className: 'navigation__link_first',
    pathname: '/movies' 
  },
  { 
    title: 'Сохраненные фильмы',
    pathname: '/saved-movies' 
  },
];

function Header({ openMenu, closeMenu, headerClassName = '' }) {
  const location = useLocation();
  const history = useHistory();
  const [links, setLinks] = useState(defaultLinks);

  useEffect(() => {
    const nextLinks = defaultLinks.map(link => {
      if (location?.pathname === link.pathname) {
        return {
          ...link,
          className: `navigation__link_bold ${link.className || ''}`
        }
      }

      return link
    });

    setLinks(nextLinks);
  }, [location])

  const handleLogoClick = () => history.push('/');

  switch (location.pathname) {
    case '/':
      return (
        <header className='header'>
          <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo' onClick={handleLogoClick}/>
          <div className='header__button-group'>
            <Button buttonClassName='button_medium button_transparent' text='Регистрация' onClick={() => history.push('/signup')} />
            <Button buttonClassName='button_small' text='Войти' onClick={() => history.push('/signin')}/>
          </div>
        </header>
      );

    case '/signup':
    case '/signin':
      return (
        <header className='header header_sign'>
          <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo' onClick={handleLogoClick}/>
        </header>
      );

    case '/movies':
    case '/saved-movies':
    case '/profile':
      return (
        <header className='header header_movies'>
          <div className='header__main'>
            <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo" onClick={handleLogoClick}/>
            <Navigation links={links} className='navigation_horizontal' />
          </div>
          <BurgerButton onClick={openMenu} />
          <UserInfo contClassName='user-info_movies' onClick={closeMenu} />
        </header>
      );

      default:
        // do nothing
  }
}

export default Header;