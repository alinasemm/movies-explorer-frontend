import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img alt='' src={headerLogo} className="header__logo"/>
      <div className='header__content'>
        
        <button classname='header__button'>
      </div>
    </header>
  );
}

export default Header;