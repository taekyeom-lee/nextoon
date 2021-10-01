import { useState } from 'react';

function useHeaderNoti() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return { menuIsOpen, openMenu, closeMenu };
}

export default useHeaderNoti;
