import React, { useState } from 'react';
import Form from '../Form/Form';
import EditAndExitButton from '../EditAndExitButton/EditAndExitButton';
import { useHistory } from 'react-router-dom';

const inputs = [
  {
    label: 'Имя',
    placeholder: 'Алина',
    contClassName: 'input-container_profile',
    inputClassName: 'input_profile',
    labelClassName: 'label_profile',
    required: true,
    pattern: '^[-a-zA-Zа-яА-ЯёЁ0-9\\s]+$'
  },
  {
    label: 'Почта',
    placeholder: 'pochta@yandex.ru',
    type: 'email',
    contClassName: 'input-container_profile input-container_profile-gap',
    inputClassName: 'input_profile',
    labelClassName: 'label_profile',
    required: true
  },
];

function Profile() {  
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
      title='Привет, Виталий!'
      greetingClassName='greeting_profile'
      inputs={inputs}
      validationStatus={validationStatus}
      setValidationStatus={setValidationStatus}
    >
      <EditAndExitButton
        editText='Редактировать'
        exitText='Выйти'
        onClick={() => history.push('/signup')}
        isDisabled={!isSubmitEnabled}
      />
    </Form>
  );
}

export default Profile;