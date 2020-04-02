import React from 'react';
import { bool, string } from 'prop-types';
import { MenuContainer, MenuList } from './BurgerMenu.style';

const Menu = ({ open, children }) => {
  return (
    <>
      <MenuContainer open={open}>
        {open ? <MenuList>{children}</MenuList> : null}
      </MenuContainer>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  children: string.isRequired
};

export default Menu;
