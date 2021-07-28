import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__content'>
        <span className='footer__date'> &copy; 2020 </span>
        <div className='footer__links'>
          <span className='footer__link'>Яндекс.Практикум</span>
          <span className='footer__link'>Facebook</span>
          <span className='footer__link'>Github</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;