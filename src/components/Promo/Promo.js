import React from 'react';
import promoImage from '../../images/promo-image.svg';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__content'>
        <h1 className='promo__header'>
          <span>Учебный проект студента факультета </span>
          <span>Веб-разработки.</span>
        </h1>
        <h2 className='promo__text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
        <a className='promo__button' href='#about-project'>
          Узнать больше
        </a>
      </div>
      <img alt='промо изображение' src={promoImage} className='promo__image' />
    </div>
  );
}

export default Promo;