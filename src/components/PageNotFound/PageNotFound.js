import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className='not-found'>
      <h2 className='not-found__tittle'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className="not-found__button" to="/">Назад</Link>
    </div>
  );
}

export default PageNotFound;
