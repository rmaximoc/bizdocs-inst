import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({ content, maxWidth }) => {
  return <Button maxWidth={maxWidth}>{content}</Button>;
};

GreenButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired
};

export default GreenButton;
