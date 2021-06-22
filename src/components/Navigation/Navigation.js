import React from 'react';

function Navigation ({ className = '', links = [] }) {
  return (
    <ul className={`navigation ${className}`}>
      {links.map((link, i) => {
        return (
          <li className='navigation__link' key={i}>
            {link.title}
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation;
