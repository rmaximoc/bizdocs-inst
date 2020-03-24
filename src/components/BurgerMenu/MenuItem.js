import React, { useState } from 'react';
import { MenuItemContainer, MenuItemContent } from './BurgerMenu.style';

const MenuItem = ({ onClick, children }) => {
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
        onClick={onClick}
      >
        {children}
      </MenuItemContent>
    </MenuItemContainer>
  );
};

// MenuItem.propTypes = {
//   onClick: ,
//   children:
// };

export default MenuItem;
