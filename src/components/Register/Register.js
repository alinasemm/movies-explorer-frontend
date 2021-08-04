import React, { useState } from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import { useHistory } from 'react-router-dom';

const inputs = [
  {
    label: 'Имя',
    placeholder: 'Алина',
    required: true,
    pattern: '^[-a-zA-Zа-яА-ЯёЁ0-9\\s]+$'
  },
  {
    label: 'Почта',
    placeholder: 'example@gmail.com',
    type: 'email',
    contClassName: 'input-container_with-margin',
    required: true
  },
  {
    label: 'Пароль',
    placeholder: 'my super password',
    type: 'password',
    contClassName: 'input-container_with-margin',
    required: true
  }
];

function Register() {  
  const history = useHistory();

  const [validationStatus, setValidationStatus] = useState(() => {
    return inputs.reduce((ref, input) => ({
      ...ref,
      [input.label]: false
    }), {});
  });

  const isSubmitEnabled = Object.values(validationStatus).every((isValid) => isValid);

  return (
    <Form
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
      title='Добро пожаловать!'
    >
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