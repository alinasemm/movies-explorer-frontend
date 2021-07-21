import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import UserInfo from '../UserInfo/UserInfo';
import headerLogo from '../../images/header-logo.svg';

function Header({headerLogoClassName = ''}) {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <header className='header'>
        <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo'/>
        <UserInfo
          buttonClassName='user-info__button_lending'
          text='Регистрация'
          buttonText='Войти'
        />
      </header>
    );
  }

  if (location.pathname === '/signup' || '/signin') {
    return (
      <header className='header'>
        <img alt='логотип страницы о Проекте' src={headerLogo} className='header__logo'/>
      </header>
    );
  }

  if (location.pathname === '/movies' || '/saved-movies') {
    const links = [
      { title: 'Фильмы' },
      { title: 'Сохраненные фильмы' },
    ]
    return (
      <header className='header header_movies'>
        <div className='header__main'>
          <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo"/>
          <Navigation links={links} className='navigation_horizontal' />
        </div>
        <UserInfo
          contClassName='user-info_movies'
          textClassName='user-info__text_movies'
          buttonClassName='user-info__button_movies'
          text='Аккаунт'
        />
      </header>
    );
  }
}

export default Header;