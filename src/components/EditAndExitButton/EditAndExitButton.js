import React from 'react';

function EditAndExitButton({ onClick, editText, exitText, isDisabled }) { 
  return (
    <div className='buttons'>
      <button className={`edit-button ${isDisabled ? 'edit-button_disabled' : ''}`}>{editText}</button>
      <span className='exit-button' onClick={onClick}>{exitText}</span>
    </div>
  );
}

export default EditAndExitButton;