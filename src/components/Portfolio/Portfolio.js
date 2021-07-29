import React from 'react';
import portfolioLinkIcon from '../../images/portfolio-link-icon.svg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__links'>
        <a 
          href ='https://github.com/alinasemm/russian-travel' 
          className='portfolio__link' 
          target='_blank'
          rel='noreferrer'
        >
          <span className='portfolio__link-name'>Статичный сайт</span>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </a>
        <a 
          href='https://github.com/alinasemm/mesto' 
          className='portfolio__link' 
          target='_blank'
          rel='noreferrer'
        >
          <span className='portfolio__link-name'>Адаптивный сайт</span>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </a>
        <a
          href='https://github.com/alinasemm' 
          className='portfolio__link' 
          target='_blank'
          rel='noreferrer'
        >
          <span className='portfolio__link-name'>Одностраничное приложение</span>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;