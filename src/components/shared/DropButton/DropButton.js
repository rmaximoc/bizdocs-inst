import React from 'react';
import { string } from 'prop-types';
import { Button } from './DropButton.style';

const DropButton = ({ content }) => {
  return <Button>{content}</Button>;
};

DropButton.propTypes = {
  content: string.isRequired
};

export default DropButton;
