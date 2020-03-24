import React, { useState } from 'react';
import { string, func } from 'prop-types';
import { MenuItemContainer, MenuItemContent } from './BurgerMenu.style';

const MenuItem = ({ children, to, onClick }) => {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(!hover);
  }

  return (
    <MenuItemContainer>
      <MenuItemContent
        hover={hover}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        to={to}
        onClick={onClick}
      >
        {children}
      </MenuItemContent>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  children: string.isRequired,
  to: string.isRequired,
  onClick: func.isRequired
};

export default MenuItem;
