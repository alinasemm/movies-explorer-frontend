import { useState } from 'react';

export function useMenu () {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const openMenu = () => setMenuVisibility(true)
  const closeMenu = () => setMenuVisibility(false)

  const handlers = { openMenu, closeMenu };

  return [isMenuVisible, handlers]
}