import React from 'react';

function AboutProject() {
  return (
    <div className='about-project'>
      <h2 className='major-tittle'>О проекте</h2>
      <div className='about-project__content'>
        <div className='about-project__description'>
          <h2 className='about-project__tittle'>Дипломный проект включал 5 этапов</h2>
          <p className='text'>
            Составление плана, работу над бэкендом, 
            вёрстку, добавление функциональности 
            и финальные доработки.
          </p>
        </div>

        <div className='about-project__description'>
          <h2 className='about-project__tittle'>На выполнение диплома ушло 5 недель</h2>
          <p className='text'>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, 
            чтобы успешно защититься.
          </p>
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