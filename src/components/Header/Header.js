import React from 'react';
import { useLocation } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';

function Header() {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <header className='header'>
        <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo"/>
        <div className='header__content'>
          <span className='header__info'>
            Регистрация
          </span>
          <button className='header__button-lending'>Войти</button>
        </div>
      </header>
    );
  }

  if (location.pathname === '/movies') {
    return (
      <header className='header header_movies'>
        <div className='header__main'>
        <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo"/>
          <ul className='header__menu'>
            <li className='header__menu-text'>Фильмы</li>
            <li className='header__menu-text'>Сохраненные фильмы</li>
          </ul>
        </div>
        <div className='header__content'>
          <span className='header__info header__info_movies'>Аккаунт</span>
          <button className='header__button-movies' />
        </div>
      </header>
    );
  }
}

export default Header;