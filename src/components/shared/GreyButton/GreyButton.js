import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreyButton.style';

const GreyButton = ({ content, maxWidth }) => {
  return <Button maxWidth={maxWidth}>{content}</Button>;
};

GreyButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired
};

export default GreyButton;
