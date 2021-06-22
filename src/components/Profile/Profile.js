import React from 'react';

function Profile() {
  return (
    <div className='profile'>
      <h2 className='profile__name'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <input className='profile__input-name' name='name' placeholder='Имя'/>
        <input className='profile__input-email' name='email' placeholder='Почта'/>
        <div className='profile__buttons'>
          <span className='profile__button-edit'>Редактировать</span>
          <span className='profile__button-exit'>Выйти из аккаунта</span>
        </div>
      </form>
    </div>
  );
}

export default Profile;