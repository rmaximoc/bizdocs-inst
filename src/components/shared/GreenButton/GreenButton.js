import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({ content, maxWidth, minWidth }) => {
  return (
    <Button maxWidth={maxWidth} minWidth={minWidth}>
      {content}
    </Button>
  );
};

GreenButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired,
  minWidth: string
};

GreenButton.defaultProps = {
  minWidth: ''
};

export default GreenButton;
