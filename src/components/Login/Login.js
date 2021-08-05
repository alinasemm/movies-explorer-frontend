import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import * as api from '../../utils/mainApi';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { AppContext } from '../../AppContext';

function Login() {  
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputs = [
    {
      label: 'Почта',
      placeholder: 'example@gmail.com',
      type: 'email',
      value: email,
      setValue: setEmail,
      required: true
    },
    {
      label: 'Пароль',
      placeholder: 'my super password',
      type: 'password',
      value: password,
      setValue: setPassword,
      contClassName: 'input-container_with-margin',
      required: true
    }
  ];

  const [validationStatus, setValidationStatus] = useState(() => {
    return inputs.reduce((ref, input) => ({
      ...ref,
      [input.label]: false
    }), {});
  });

  const isSubmitEnabled = Object.values(validationStatus).every((isValid) => isValid);
  const [errorMessage, setErrorMessage] = useState('');
  const appContext = useContext(AppContext);

  function handleLoginSubmit(event) {  
    event.preventDefault();
    api.login({ email, password }).then((data) => {
      const hasError = data.error || !data.token
      if (hasError) {
        setErrorMessage(data.validation?.body?.message || data.message);
        return
      }

      appContext.setToken(data.token);
      history.push('/movies');
    })   
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error);
    });
  }


  return (
    <Form
      title='Рады видеть!'
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
      onSubmit={handleLoginSubmit}
    >
      <ErrorMessage message={errorMessage} />
      <Button 
        text='Войти'
        buttonClassName='button_with-margin button_large'
        isDisabled={!isSubmitEnabled}
      />
      <Link
        text='Еще не зарегистрированы?'
        linkText='Регистрация'
        onClick={() => history.push('/signup')}
      />
    </Form>
  );
}


export default Login;