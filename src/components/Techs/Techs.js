import React from 'react';

function Techs() {
  return (
    <div className='techs'>
      <h2 className='major-tittle'>Технологии</h2>
      <div className='techs__elements'>
        <h2 className='techs__tittle'>7 технологий</h2>
        <p className='text text_position'>
          На курсе веб-разработки мы освоили технологии, 
          которые применили<br />
          в дипломном проекте.
        </p>
        <div className='techs__icons'>
          <div className='techs__icon'>HTML</div>
          <div className='techs__icon'>CSS</div>
          <div className='techs__icon'>JS</div>
          <div className='techs__icon'>React</div>
          <div className='techs__icon'>Git</div>
          <div className='techs__icon'>Express.js</div>
          <div className='techs__icon'>mongoDB</div>
        </div>
      </div>
    </div>
  );
}

export default Techs;