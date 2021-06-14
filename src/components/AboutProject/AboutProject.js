import React from 'react';

function AboutProject() {
  return (
    <div className='about'>
      <h2 className='about__major-tittle'>О проекте</h2>
      <div className='about__content'>
        <div className='about__description'>
          <h2 className='about__tittle'>Дипломный проект включал 5 этапов</h2>
          <p className='about__text'>
            Составление плана, работу над бэкендом, 
            вёрстку, добавление функциональности 
            и финальные доработки.
          </p>
        </div>

        <div className='about__description'>
          <h2 className='about__tittle'>На выполнение диплома ушло 5 недель</h2>
          <p className='about__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, 
            чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about__timeline'>
        <div className='about__timeline-backend'>
          <div className='about__timeline-time about__timeline-time_backend'>1 неделя</div>
          <div className='about__timeline-info'>Back-end</div>
        </div>
        <div className='about__timeline-frontend'>
          <div className='about__timeline-time about__timeline-time_frontend'>4 недели</div>
          <div className='about__timeline-info'>Front-end</div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;