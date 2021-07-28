import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import BurgerButton from '../BurgerButton/BurgerButton'
import headerLogo from '../../images/header-logo.svg';

function Header({ headerClassName = '', openMenu }) {
  const location = useLocation();
  const history = useHistory();

  switch (location.pathname) {
    case '/':
      return (
        <header className='header'>
          <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo' onClick={() => history.push('/')}/>
          <UserInfo
            buttonClassName='user-info__button_lending'
            text='Регистрация'
            buttonText='Войти'
          />
        </header>
      );

    case '/signup':
    case '/signin':
      return (
        <header className='header header_sign'>
          <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo' onClick={() => history.push('/')}/>
        </header>
      );

    case '/movies':
    case '/saved-movies':
    case '/profile':
      const links = [
        { title: 'Фильмы', className: 'navigation__link_first' },
        { title: 'Сохраненные фильмы' },
      ]
      return (
        <header className='header header_movies'>
          <div className='header__main'>
            <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo" onClick={() => history.push('/')}/>
            <Navigation links={links} className='navigation_horizontal' />
          </div>
          <BurgerButton onClick={openMenu} />
          <UserInfo
            contClassName='user-info_movies'
            textClassName='user-info__text_movies'
            buttonClassName='user-info__button_menu user-info__button_movies'
            text='Аккаунт'
          />
        </header>
      );

      default:
        // do nothing
  }
}

export default Header;