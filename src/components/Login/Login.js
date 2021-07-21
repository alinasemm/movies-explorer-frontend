import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';

function Login() {  
  const history = useHistory();

  const inputs = [
    {
      label: 'Почта',
      placeholder: 'example@gmail.com',
      type: 'email'
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
    <div className='sign-container'>
      <Form
        title='Рады видеть!'
        inputs={inputs}
      >
        <Button 
        text='Войти'
        buttonClassName='button_with-margin'
        />
        <Link
          text='Еще не зарегистрированы?'
          linkText='Регистрация'
          onClick={() => history.push('/signup')}
        />
      </Form>
    </div>
  );
}


export default Login;