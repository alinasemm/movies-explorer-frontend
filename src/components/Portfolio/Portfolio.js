import React from 'react';
import portfolioLinkIcon from '../../images/portfolio-link-icon.svg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__links'>
        <div className='portfolio__link'>
          <a href='#' className='portfolio__link-name'>Статичный сайт</a>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </div>
        <div className='portfolio__link'>
          <a href='#' className='portfolio__link-name'>Адаптивный сайт</a>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </div>
        <div className='portfolio__link'>
          <a href='#' className='portfolio__link-name'>Одностраничное приложение</a>
          <img className='portfolio__link-icon' alt='стрелка' src={portfolioLinkIcon} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;