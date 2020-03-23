import React, { useState } from 'react';
import { MenuContainer, MenuList } from './BurgerMenu.style';

const Menu = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuContainer open={open}>
      {setOpen ? <MenuList>{children}</MenuList> : null}
    </MenuContainer>
  );
};

export default Menu;
