import React, { useState } from 'react';
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

  return (
    <MenuButtonContainer onClick={handleClick}>
      <MenuButtonLineTop open={open} color="red" />
      <MenuButtonLineMiddle open={open} color="red" />
      <MenuButtonLineBottom open={open} color="red" />
    </MenuButtonContainer>
  );
};

export default MenuButton;
