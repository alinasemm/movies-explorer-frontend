import React from 'react';
import Input from '../Input/Input';

function Form({ onSubmit, title, greetingClassName, inputs, validationStatus, setValidationStatus, children }) {
  return (
    <div className='sign-container'>
      <form className='form' onSubmit={onSubmit}>
        <h2 className={`greeting ${greetingClassName}`}>{title}</h2>
        {inputs.map(input => (
          <Input
            key={input.label}
            validationStatus={validationStatus}
            setValidationStatus={setValidationStatus}
            {...input}
          />
        ))}
        {children}
      </form>
    </div>
  );
}

export default Form;