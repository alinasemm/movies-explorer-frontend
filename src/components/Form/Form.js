import React from 'react';
import Input from '../Input/Input';

function Form({ title, children }) {

  return (
      <form className='form'>
        <h2 className="greeting">{title}</h2>
        <Input label="Имя" placeholder="Алина" />
        <Input label='Почта' placeholder="example@gmail.com" type="email" />
        <Input label='Пароль' placeholder="my super password" type="password"/>
        {children}
      </form>
  );
}

export default Form;