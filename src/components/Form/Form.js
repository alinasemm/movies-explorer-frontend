import React from 'react';
import Input from '../Input/Input';

function Form({ title, greetingClassName, inputs, validationStatus, setValidationStatus, children }) {
  return (
    <div className='sign-container'>
      <form className='form'>
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