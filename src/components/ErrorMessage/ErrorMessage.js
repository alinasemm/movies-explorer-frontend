import React from 'react';

function ErrorMessage({ message, errorMessageClassName }) {
  return (
    <p className={`error-message ${errorMessageClassName}`}>{message}</p>
  );
}

export default ErrorMessage;