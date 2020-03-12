import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({ content, maxWidth, minWidth, color }) => {
  return (
    <Button maxWidth={maxWidth} minWidth={minWidth} color={color}>
      {content}
    </Button>
  );
};

GreenButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired,
  minWidth: string,
  color: string
};

GreenButton.defaultProps = {
  minWidth: '',
  color: '#69b643'
};

export default GreenButton;
