import React from 'react';
import Form from '../Form/Form';
import { useHistory } from 'react-router-dom';

function Register() {  
  const history = useHistory();

  return (
    <div className='register'>
      <Form
      title='Добро пожаловать!'
      >
      <span className="" onClick={() => history.push('/signin')}>
        Уже зарегистрированы?
        Войти
      </span>
      </Form>
    </div>
  );
}


export default Register;