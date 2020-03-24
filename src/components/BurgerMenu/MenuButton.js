import React, { useState } from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';

import {
  MenuButtonContainer,
  MenuButtonLineTop,
  MenuButtonLineMiddle,
  MenuButtonLineBottom
} from './BurgerMenu.style';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const menu = [
    'Bizdocs',
    'G. Contabilidade',
    'Empresas',
    'Planos/Preços',
    'Suporte'
  ];
  const menuItems = menu.map((val, index) => (
    <MenuItem delay={`${index * 0.1}s`} onClick={handleClick}>
      {val}
    </MenuItem>
  ));

  return (
    <>
      <MenuButtonContainer onClick={handleClick}>
        <MenuButtonLineTop open={open} color="white" />
        <MenuButtonLineMiddle open={open} color="white" />
        <MenuButtonLineBottom open={open} color="white" />
      </MenuButtonContainer>
      <Menu open={open}>{menuItems}</Menu>
    </>
  );
};

export default MenuButton;
