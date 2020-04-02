import React, { useState } from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import DropDown from '../shared/DropDown/DropDown';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import {
  MenuButtonContainer,
  MenuButtonLineTop,
  MenuButtonLineMiddle,
  MenuButtonLineBottom,
  PostMenu,
  DropDownMobile
} from './BurgerMenu.style';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const menu = [
    {
      text: 'Bizdocs',
      link: '/bizdocs'
    },
    {
      text: 'G. Contabilidade',
      link: '/plans/benefits'
    },
    {
      text: 'Empresas',
      link: '/empresas'
    },
    {
      text: 'Planos/Preços',
      link: '/plans-and-prices'
    },
    {
      text: 'Suporte',
      link: '/plans/plan-details'
    }
  ];

  const menuItems = menu.map((val, index) => (
    <MenuItem delay={`${index * 0.1}s`} to={val.link} onClick={handleClick}>
      {val.text}
    </MenuItem>
  ));

  return (
    <>
      <MenuButtonContainer onClick={handleClick}>
        <MenuButtonLineTop open={open} color="white" />
        <MenuButtonLineMiddle open={open} color="white" />
        <MenuButtonLineBottom open={open} color="white" />
      </MenuButtonContainer>
      <Menu open={open}>
        <>
          {menuItems}
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
        </>
      </Menu>
    </>
  );
};

export default MenuButton;
