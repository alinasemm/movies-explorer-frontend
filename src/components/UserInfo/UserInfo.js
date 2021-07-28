import React from 'react';

function UserInfo ({ contClassName = '', textClassName = '', buttonClassName = '', text = '', buttonText = '', onButtonClick }) {
  return (
    <div className={`user-info ${contClassName}`}>
      <span className={`user-info__text ${textClassName}`}>
        {text}
      </span>
      <button className={`user-info__button ${buttonClassName}`} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default UserInfo
