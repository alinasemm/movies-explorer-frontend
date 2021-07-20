import React from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { useHistory } from 'react-router-dom';

function Register() {  
  const history = useHistory();

  return (
    <div className='register'>
      <Form
        title='Добро пожаловать!'
      >
        <Button text='Зарегистрироваться'/>
        <Link text='Уже зарегистрированы?' linkText='Войти' onClick={() => history.push('/signin')}/>
      </Form>
    </div>
  );
}


export default Register;