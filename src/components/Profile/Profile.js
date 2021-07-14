import React from 'react';

function Profile() {
  return (
    <div className='profile'>
      <h2 className='profile__name'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <div className='profile__labels'>
          <label>
            Имя
          </label>
          <input className='profile__input' name='name' placeholder='Виталий'/>
        </div>
        <div className='profile__labels'>
          <label>
            E-mail
          </label>
          <input className='profile__input' name='email' placeholder='pochta@yandex.ru' type='email'/>
        </div>
      </form>
      <div className='profile__buttons'>
        <span className='profile__button'>Редактировать</span>
        <span className='profile__button profile__button_exit'>Выйти из аккаунта</span>
      </div>
    </div>
  );
}

export default Profile;