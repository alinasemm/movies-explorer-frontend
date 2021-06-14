import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img alt='логотип страницы о Проекте' src={headerLogo} className="header__logo"/>
        <span className='header__registration'>
          Регистрация
        </span>
        <button className='header__button'>
      </div>
    </header>
  );
}

export default Header;