import React, { useState } from 'react';
import { string } from 'prop-types';
import { Button, Content, Triangle } from './DropDown.style';

const dropDown = React.createRef();

const DropDown = ({ content }) => {
  const [opened, setOpen] = useState(false);

  function handleClick() {
    setOpen(!opened);
  }

  return (
    <>
      <Button onClick={handleClick}>
        {content}
        <Content opened={opened} ref={dropDown}>
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
