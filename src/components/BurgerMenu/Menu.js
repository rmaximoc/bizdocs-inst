import React from 'react';
import { bool, string } from 'prop-types';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import {
  MenuContainer,
  MenuList,
  PostMenu,
  DropDownMobile
} from './BurgerMenu.style';
import DropDown from '../shared/DropDown/DropDown';

const Menu = ({ open, children }) => {
  return (
    <>
      <MenuContainer open={open}>
        {open ? <MenuList>{children}</MenuList> : null}
        <PostMenu open={open}>
          <GreenButton
            width="80%"
            margin="46px auto 23px"
            content="Experimente grátis"
          />
          <OpacityButton width="80%" content="Login" />
          <DropDownMobile>
            <DropDown content="Portugal" />
          </DropDownMobile>
        </PostMenu>
      </MenuContainer>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  children: string.isRequired
};

export default Menu;
