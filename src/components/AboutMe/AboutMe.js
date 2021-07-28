import React from 'react';
import aboutMeImage from '../../images/about-me-image.jpeg';

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='major-tittle'>Студент</h2>
      <div className='about-me__elements'>
        <div className='about-me__text-elements'>
          <h2 className='tittle tittle_position tittle_size'>Алина</h2>
          <h3 className='tittle__about-me'>Фронтенд-разработчик, 27 лет</h3>
          <p className='text text_size'>
            Я родилась и живу в Липецке. До 2018 года была руководителем отдела интернет-маркетинга, 
            затем ушла на фриланс и занималась smm. Во время локдауна решила освоить профессию веб-разработчика. 
            Из хобби – путешествия, изучение английского, чтение книг.
          </p>
          <div className='about-me__links'>
            <a href='https://www.facebook.com/alina.semikolenova/' className='about-me__link' target='_blank'>Facebook</a>
            <a href='https://github.com/alinasemm' className='about-me__link' target='_blank'>Github</a>
          </div>
        </div>
        <img className='about-me__image' alt='фото' src={aboutMeImage} />
      </div>
    </div>
  );
}

export default AboutMe;