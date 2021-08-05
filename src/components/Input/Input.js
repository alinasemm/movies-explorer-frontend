import React, { useState } from 'react';

function Input({
  label,
  inputClassName = '',
  labelClassName = '',
  contClassName = '',
  initialValue = '',
  validationStatus,
  setValidationStatus,
  value,
  setValue,
  ...props
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const input = event.target;

    if (input.validity.valid) {
      setErrorMessage('');
    } else {
      setErrorMessage(input.validationMessage);
    }

    setValidationStatus({
      ...validationStatus,
      [label]: input.validity.valid
    });
    
    setValue(input.value);
  }

  return (
    <div className={`input-container ${contClassName}`}>
      <label className={`label ${labelClassName}`}>
        {label}
      </label>
      <input
        className={`input ${inputClassName} ${errorMessage ? 'input_error' : ''}`}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {errorMessage && (
        <span className='input__error-message'>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Input;