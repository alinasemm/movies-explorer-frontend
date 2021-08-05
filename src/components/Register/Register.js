import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../../utils/mainApi';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { AppContext } from '../../AppContext';


function Register() {  
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина',
      value: name,
      setValue: setName,
      required: true,
      pattern: '^[-a-zA-Zа-яА-ЯёЁ0-9\\s]+$'
    },
    {
      label: 'Почта',
      placeholder: 'example@gmail.com',
      type: 'email',
      value: email,
      setValue: setEmail,
      contClassName: 'input-container_with-margin',
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

  function handleRegistrationSubmit(event) {  
    event.preventDefault();
    api.createUser({ name, email, password }).then((data) => {
      const hasError = data.error
      if (hasError) {
        setErrorMessage(data.validation?.body?.message);
        return
      }

      appContext.setUser(data);

      return api.login({ email, password });
    }).then((data) => {
      const hasError = data.error
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
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
      title='Добро пожаловать!'
      onSubmit={handleRegistrationSubmit}
    >
      <ErrorMessage message={errorMessage} />
      <Button text='Зарегистрироваться' isDisabled={!isSubmitEnabled} />
      <Link
        text='Уже зарегистрированы?'
        linkText='Войти'
        onClick={() => history.push('/signin')}
      />
    </Form>
  );
}


export default Register;