import React from 'react';
import Input from '../Input/Input';

function Form({ title, greetingClassName, inputs, children }) {
  return (
    <div className='sign-container'>
      <form className='form'>
        <h2 className={`greeting ${greetingClassName}`}>{title}</h2>
        {inputs.map(input => (
          <Input key={input.label} {...input} />
        ))}
        {children}
      </form>
    </div>
  );
}

export default Form;