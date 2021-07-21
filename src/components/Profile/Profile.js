import React from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { useHistory } from 'react-router-dom';


function Profile() {  
  const history = useHistory();

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина',
      contClassName: 'input-container_profile'
    },
    {
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      type: 'email',
      contClassName: 'input-container_profile'
    },
  ];

  return (
    <div className='sign-container'>
      <Form
        title='Привет, Виталий!'
        greetingClassName='greeting_profile'
        inputs={inputs}
      >
        <Button 
          text='Редактировать'
          onClick={() => history.push('/signup')}
        />
        <Link
          text='Выйти из аккаунта'
          onClick={() => history.push('/signup')}
        />
      </Form>
    </div>
  );
}

// function Profile() {
//   return (
//     <div className='profile'>
//       <h2 className='greeting'>Привет, Виталий!</h2>
//       <form className='profile__form'>
//         <div className='profile__labels'>
//           <label>
//             Имя
//           </label>
//           <input className='profile__input' name='name' placeholder='Виталий'/>
//         </div>
//         <div className='profile__labels'>
//           <label>
//             E-mail
//           </label>
//           <input className='profile__input' name='email' placeholder='pochta@yandex.ru' type='email'/>
//         </div>
//       </form>
//       <div className='profile__buttons'>
//         <span className='profile__button'>Редактировать</span>
//         <span className='profile__button profile__button_exit'>Выйти из аккаунта</span>
//       </div>
//     </div>
//   );
// }

export default Profile;