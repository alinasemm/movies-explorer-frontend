import React, { useState, useContext, useEffect } from 'react';
import Form from '../Form/Form';
import EditAndExitButton from '../EditAndExitButton/EditAndExitButton';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import * as api from '../../utils/mainApi';

function Profile() {  
  const history = useHistory();
  const appContext = useContext(AppContext);

  const [name, setName] = useState(appContext.user.name);
  const [email, setEmail] = useState(appContext.user.email);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setName(appContext.user.name);
  }, [appContext.user.name]);

  useEffect(() => {
    setEmail(appContext.user.email);
  }, [appContext.user.email]);

  const inputs = [
    {
      label: 'Имя',
      placeholder: 'Алина',
      value: name,
      setValue: setName,
      contClassName: 'input-container_profile',
      inputClassName: 'input_profile',
      labelClassName: 'label_profile',
      required: true,
      pattern: '^[-a-zA-Zа-яА-ЯёЁ0-9\\s]+$'
    },
    {
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      value: email,
      setValue: setEmail,
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
      [input.label]: true
    }), {});
  });

  const areProfileDataChanged = name !== appContext.user.name || email !== appContext.user.email;
  const isSubmitEnabled = areProfileDataChanged && Object.values(validationStatus).every((isValid) => isValid);

  function handleSignOut() {
    appContext.setUser(null);
    appContext.setToken('');
    history.push('/');
  }

  function handleUpdateProfileSubmit(event) {  
    event.preventDefault();
    api.updateUser({ name, email }, appContext.token).then((data) => {
      const hasError = data.error
      if (hasError) {
        setErrorMessage(data.validation?.body?.message);
        return
      }

      appContext.setUser(data);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error);
    });
  }

  return (
    <Form
      title={`Привет, ${appContext.user.name}!`}
      greetingClassName='greeting_profile'
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
      onSubmit={handleUpdateProfileSubmit}
    >
      <ErrorMessage message={errorMessage} />
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