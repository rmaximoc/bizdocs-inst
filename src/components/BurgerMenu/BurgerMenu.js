import React, { useState } from 'react';
import { BurgerMenuContainer } from './BurgerMenu.style';
import MenuButton from './MenuButton';

const BurgerMenu = () => {
  const [menuOpen, setMenu] = useState(false);

  function handleMenuClick() {
    setMenu(!menuOpen);
  }

  function handleLinkClick() {
    setMenu(false);
  }

  return (
    <>
      <BurgerMenuContainer>
        <MenuButton
          open={menuOpen}
          onClick={(handleMenuClick, handleLinkClick)}
          color="white"
        />
      </BurgerMenuContainer>
    </>
  );
};

export default BurgerMenu;
