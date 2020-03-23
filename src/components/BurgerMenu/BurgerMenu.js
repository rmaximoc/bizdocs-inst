import React, { useState } from 'react';
import { BurgerMenuContainer } from './BurgerMenu.style';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Menu from './Menu';

const BurgerMenu = () => {
  const [menuOpen, setMenu] = useState(false);

  function handleMenuClick() {
    setMenu(!menuOpen);
  }

  function handleLinkClick() {
    setMenu(false);
  }

  const menu = ['About Us', 'Our Products', 'Services', 'FAQ', 'Contact Us'];
  const menuItems = menu.map((val, index) => {
    return (
      <MenuItem delay={`${index * 0.1}s`} onClick={handleMenuClick}>
        {val}
      </MenuItem>
    );
  });

  return (
    <div>
      <BurgerMenuContainer>
        <MenuButton open={menuOpen} onClick={handleLinkClick} color="white" />
      </BurgerMenuContainer>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </div>
  );
};

export default BurgerMenu;
