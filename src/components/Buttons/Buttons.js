import React from 'react';
import { useHistory } from 'react-router-dom';

function Buttons() {
  const history = useHistory();
  
  return (
      <button className='button'>
        Зарегистрироваться
      </button>
      <span className="button-link" onClick={() => history.push('/signin')}>
      Уже зарегистрированы?
      Войти
      </span>
  );
}

export default Buttons;