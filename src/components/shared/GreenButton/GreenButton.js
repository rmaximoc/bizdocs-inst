import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({ content }) => {
  return <Button>{content}</Button>;
};

GreenButton.propTypes = {
  content: string.isRequired
};

export default GreenButton;
