import React from 'react';
import Input from '../Input/Input';

function Form({ title, greetingClassName, inputs, children }) {
  return (
    <form className='form'>
      <h2 className={`greeting ${greetingClassName}`}>{title}</h2>
      {inputs.map(input => (
        <Input key={input.label} {...input} />
      ))}
      {children}
    </form>
  );
}

export default Form;