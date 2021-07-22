import React, { useState } from 'react';

function Input({ label, inputClassName='', labelClassName='', initialErrorMessage = '', contClassName = '', ...props }) {
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  return (
    <div className={`input-container ${contClassName}`}>
      <label className={`label ${labelClassName}`}>
        {label}
      </label>
      <input className={`input ${inputClassName} ${errorMessage ? 'input_error' : ''}`} {...props} />
      {errorMessage && (
        <span className='error-message'>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Input;