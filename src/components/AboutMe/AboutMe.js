import React from 'react';
import MajorTitle from '../MajorTitle/MajorTitle'
import Title from '../Title/Title';
import Text from '../Text/Text';
import Subtitle from '../Subtitle/Subtitle';

import aboutMeImage from '../../images/about-me-image.jpeg';

function AboutMe() {
  return (
    <div className='about-me'>
      <MajorTitle>Студент</MajorTitle>
      <div className='about-me__elements'>
        <div className='about-me__text-elements'>
          <Title className='title_position title_size'>Алина</Title>
          <Subtitle>Фронтенд-разработчик, 27 лет</Subtitle>
          <Text className='text_size'>
            Я родилась и живу в Липецке. До 2018 года была руководителем отдела интернет-маркетинга, 
            затем ушла на фриланс и занималась smm. Во время локдауна решила освоить профессию веб-разработчика. 
            Из хобби – путешествия, изучение английского, чтение книг.
          </Text>
          <div className='about-me__links'>
            <a
              href='https://www.facebook.com/alina.semikolenova/'
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
            <a
              href='https://github.com/alinasemm'
              className='about-me__link'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </div>
        <img className='about-me__image' alt='фото' src={aboutMeImage} />
      </div>
    </div>
  );
}

export default AboutMe;