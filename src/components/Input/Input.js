import React from 'react';

function Input({ label, ...props }) {
  return (
    <div className='input-container'>
      <label className='label'>
        {label}
      </label>
      <input className='input' {...props}/>
    </div>
  );
}

export default Input;