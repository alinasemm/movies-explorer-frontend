import React from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { useHistory } from 'react-router-dom';

function Register() {  
  const history = useHistory();

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина'
    },
    {
      label: 'Почта',
      placeholder: 'example@gmail.com',
      type: 'email',
      contClassName: 'input-container_with-margin'
    },
    {
      label: 'Пароль',
      placeholder: 'my super password',
      type: 'password',
      contClassName: 'input-container_with-margin',
      initialErrorMessage: 'Что-то пошло не так...'
    }
  ];

  return (
    <Form
      inputs={inputs}
      title='Добро пожаловать!'
    >
      <Button text='Зарегистрироваться'/>
      <Link
        text='Уже зарегистрированы?'
        linkText='Войти'
        onClick={() => history.push('/signin')}
      />
    </Form>
  );
}


export default Register;