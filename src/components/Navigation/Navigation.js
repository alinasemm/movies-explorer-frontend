import React from 'react';
import { useHistory } from 'react-router-dom';

function Navigation ({ className = '', links = [], linksClassName = '', onClick }) {
  const history = useHistory();

  const handleClick = (event, pathname) => {
    history.push(pathname);
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <ul className={`navigation ${className}`}>
      {links.map(({ title = '', className = '', pathname = '/' }, i) => {
        return (
          <li
            key={i}
            className={`navigation__link ${className} ${linksClassName}`}
            onClick={(event) => handleClick(event, pathname)}
          >
            {title}
          </li>
        );
      })}
    </ul>
  )
}

export default Navigation;
