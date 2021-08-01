import React from 'react';
import MajorTitle from '../MajorTitle/MajorTitle';
import Title from '../Title/Title';
import Text from '../Text/Text';

function Techs() {
  return (
    <div className='techs'>
      <MajorTitle>Технологии</MajorTitle>
      <div className='elements'>
        <Title>7 технологий</Title>
        <Text className='text_techs'>
          <span>На курсе веб-разработки мы освоили технологии, 
          которые применили </span>
          <span>в дипломном проекте.</span>
        </Text>
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