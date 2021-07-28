import React from 'react';
import { useHistory } from 'react-router-dom';

function UserInfo ({ onClick, contClassName = '', textClassName = '', buttonClassName = '' }) {
  const history = useHistory();
  const handleClick = (event) => {
    history.push('/profile')
    onClick(event);
  };

  return (
    <div className={`user-info ${contClassName}`} onClick={handleClick}>
      <span className={`user-info__text ${textClassName}`}>
        Аккаунт
      </span>
      <span className={`user-info__button ${buttonClassName}`} />
    </div>
  );
}

export default UserInfo
