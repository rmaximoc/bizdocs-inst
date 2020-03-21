import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreyButton.style';

const GreyButton = ({ content, maxWidth, minWidth, width, margin }) => {
  return (
    <Button
      margin={margin}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      {content}
    </Button>
  );
};

GreyButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired,
  minWidth: string.isRequired,
  width: string,
  margin: string
};

GreyButton.defaultProps = {
  width: '',
  margin: '0'
};

export default GreyButton;
