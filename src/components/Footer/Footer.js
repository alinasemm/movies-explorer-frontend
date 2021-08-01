import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__content'>
        <span className='footer__date'> &copy; 2021 </span>
        <div className='footer__links'>
          
          <a
          href ='https://praktikum.yandex.ru/' 
            className='footer__link' 
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>

          <a
          href ='https://www.facebook.com/alina.semikolenova/' 
            className='footer__link' 
            target='_blank'
            rel='noreferrer'
          >
            Facebook
          </a>

          <a
          href ='https://github.com/alinasemm/' 
            className='footer__link' 
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;