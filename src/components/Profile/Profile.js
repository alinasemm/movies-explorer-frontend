import React, { useState, useContext } from 'react';
import Form from '../Form/Form';
import EditAndExitButton from '../EditAndExitButton/EditAndExitButton';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';

function Profile() {  
  const history = useHistory();
  const appContext = useContext(AppContext);

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина',
      value: appContext.user.name,
      contClassName: 'input-container_profile',
      inputClassName: 'input_profile',
      labelClassName: 'label_profile',
      required: true,
      pattern: '^[-a-zA-Zа-яА-ЯёЁ0-9\\s]+$'
    },
    {
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      value: appContext.user.email,
      type: 'email',
      contClassName: 'input-container_profile input-container_profile-gap',
      inputClassName: 'input_profile',
      labelClassName: 'label_profile',
      required: true
    },
  ];

  const [validationStatus, setValidationStatus] = useState(() => {
    return inputs.reduce((ref, input) => ({
      ...ref,
      [input.label]: false
    }), {});
  });

  const isSubmitEnabled = Object.values(validationStatus).every((isValid) => isValid);

  function handleSignOut() {
    appContext.setUser(null);
    appContext.setToken('');
    history.push('/');
  }

  return (
    <Form
      title={`Привет, ${appContext.user.name}!`}
      greetingClassName='greeting_profile'
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
    >
      <EditAndExitButton
        editText='Редактировать'
        exitText='Выйти из аккаунта'
        onClick={handleSignOut}
        isDisabled={!isSubmitEnabled}
      />
    </Form>
  );
}

export default Profile;