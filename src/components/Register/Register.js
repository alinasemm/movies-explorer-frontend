import React from 'react';
import Form from '../Form/Form';
import { useHistory } from 'react-router-dom';

function Register() {  
  const history = useHistory();

  return (
    <Form
      title='Добро пожаловать!'
    >
      <span className="" onClick={() => history.push('/signin')}>
        Уже зарегистрированы?
        Войти
      </span>
    </Form>
  );
}


export default Register;