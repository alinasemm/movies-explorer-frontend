import React from 'react';
import MajorTitle from '../MajorTitle/MajorTitle';
import Text from '../Text/Text';

function AboutProject() {
  return (
    <div className='about-project'>
      <MajorTitle id='about-project'>О проекте</MajorTitle>
      <div className='about-project__content'>
        <div className='about-project__description about-project__description_right'>
          <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
          <Text>
            Составление плана, работу над бэкендом, 
            вёрстку, добавление функциональности 
            и финальные доработки.
          </Text>
        </div>

        <div className='about-project__description about-project__description_left'>
          <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
          <Text>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, 
            чтобы успешно защититься.
          </Text>
        </div>
      </div>

      <div className='about-project__timeline'>
        <div className='about-project__timeline-backend'>
          <div className='about-project__timeline-time about-project__timeline-time_backend'>1 неделя</div>
          <div className='about-project__timeline-info'>Back-end</div>
        </div>
        <div className='about-project__timeline-frontend'>
          <div className='about-project__timeline-time about-project__timeline-time_frontend'>4 недели</div>
          <div className='about-project__timeline-info'>Front-end</div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;