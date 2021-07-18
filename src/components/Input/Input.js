import React from 'react';

function Input({ label, ...props }) {
  return (
    <div className='container'>
      <label className='label'>
        {label}
      </label>
      <input className='input' {...props}/>
    </div>
  );
}

export default Input;