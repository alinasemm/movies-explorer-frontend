import React from 'react';
import aboutMeImage from '../../images/about-me-image.jpeg';

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='major-tittle'>Студент</h2>
      <div className='about-me__elements'>
        <div className='about-me__text-elements'>
          <h2 className='tittle tittle_position'>Алина</h2>
          <h3 className='tittle__about-me'>Фронтенд-разработчик, 27 лет</h3>
          <p className='text text_size'>
          Я родилась и живу в Липецке. До 2018 года была руководителем отдела интернет-маркетинга, затем решила внести в жизнь перемены и ушла на фриланс.) 
          Занималась smm и копирайтингом. На карантине решила освоить профессию веб-разработчика. 
          Из хобби – путешествия, изучение английского, чтение книг.
          </p>
          <div className='about-me__links'>
            <span className='about-me__link'>Facebook</span>
            <span className='about-me__link'>Github</span>
          </div>
        </div>
        <img className='about-me__image' alt='фото' src={aboutMeImage} />
      </div>
    </div>
  );
}

export default AboutMe;