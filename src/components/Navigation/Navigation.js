import React from 'react';

function Navigation ({ className = '', links = [], linksClassName='' }) {
  return (
    <ul className={`navigation ${className}`}>
      {links.map(({title='', className=''}, i) => {
        return (
          <li className={`navigation__link ${className} ${linksClassName}`} key={i}>
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation;
