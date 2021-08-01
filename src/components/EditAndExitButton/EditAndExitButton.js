import React from 'react';

function EditAndExitButton({ onClick, editText, exitText }) { 
  return (
    <div className='buttons'>
      <span className='edit-button'>{editText}</span>
      <span className='exit-button' onClick={onClick}>{exitText}</span>
    </div>
  );
}

export default EditAndExitButton;