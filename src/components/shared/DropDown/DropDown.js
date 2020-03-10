import React from 'react';
import { string } from 'prop-types';
import { Button, Content, Triangle } from './DropDown.style';

const dropDown = React.createRef();

const handleClick = () => {
  if (
    dropDown.current.style.display === '' ||
    dropDown.current.style.display === 'none'
  ) {
    dropDown.current.style.display = 'flex';
  } else {
    dropDown.current.style.display = 'none';
  }
};

const DropDown = ({ content }) => {
  return (
    <>
      <Button onClick={handleClick}>
        {content}
        <Content ref={dropDown}>
          <button type="button">Brasil</button>
          <button type="button">Estados Unidos</button>
        </Content>
      </Button>
      <Triangle onClick={handleClick} />
    </>
  );
};

DropDown.propTypes = {
  content: string.isRequired
};

export default DropDown;
