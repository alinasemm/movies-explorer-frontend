import React from 'react';
import promoImage from '../../images/promo-image.svg';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__content'>
        <h1 className='promo__header'>
        Учебный проект студента 
        факультета<br/>
        Веб-разработки.
        </h1>
        <h2 className='promo__text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
        <button className='promo__button'>Узнать больше</button>
      </div>
      <img alt='промо изображение' src={promoImage} className='promo__image' />
    </div>
  );
}

export default Promo;