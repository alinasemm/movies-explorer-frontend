import React from 'react'

function CrossIcon ({ iconClassName='', onClick }) {
  return <button className={`cross-icon ${iconClassName}`} onClick={onClick} />
}

export default CrossIcon
