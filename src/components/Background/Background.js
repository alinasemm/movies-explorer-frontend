import React, { useEffect } from 'react';
import Menu from '../Menu/Menu';

function Background ({ isMenuVisible, closeMenu, backgroundClass = '' }) {
  const baseBackgroundClassName = 'background'
  let className = `${baseBackgroundClassName} ${backgroundClass}`
  if (isMenuVisible) {
    className = `${className} background_opened`
  }
  
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [closeMenu])


  function handleOverlayClick(event) {
    if (event.target.classList.contains(baseBackgroundClassName)) {
      closeMenu();
    }
  }

  return (
    <div className={className} tabIndex="-1" onClick={handleOverlayClick}>
      <Menu closeMenu={closeMenu} />
    </div>
  );
}

export default Background;