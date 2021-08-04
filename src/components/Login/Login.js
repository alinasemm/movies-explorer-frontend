import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Link from '../Link/Link';

const inputs = [
  {
    label: 'Почта',
    placeholder: 'example@gmail.com',
    type: 'email',
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

function Login() {  
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
      title='Рады видеть!'
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
    >
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