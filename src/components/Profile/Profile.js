import React from 'react';
import Form from '../Form/Form';
import EditAndExitButton from '../EditAndExitButton/EditAndExitButton';
import { useHistory } from 'react-router-dom';


function Profile() {  
  const history = useHistory();

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина',
      contClassName: 'input-container_profile',
      inputClassName: 'input_profile',
      labelClassName: 'label_profile'
    },
    {
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      type: 'email',
      contClassName: 'input-container_profile input-container_profile-gap',
      inputClassName: 'input_profile',
      labelClassName: 'label_profile'
    },
  ];

  return (
    <div className='sign-container'>
      <Form
        title='Привет, Виталий!'
        greetingClassName='greeting_profile'
        inputs={inputs}
      >
        <EditAndExitButton
          editText='Редактировать'
          exitText='Выйти'
          onClick={() => history.push('/signup')}
        />
      </Form>
    </div>
  );
}

export default Profile;