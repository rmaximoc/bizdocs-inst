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
    },
    {
      text: 'Security',
      link: '/security'
    },
    {
      text: 'News',
      link: '/news'
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
      <Menu open={open}>{menuItems}</Menu>
    </>
  );
};

export default MenuButton;
