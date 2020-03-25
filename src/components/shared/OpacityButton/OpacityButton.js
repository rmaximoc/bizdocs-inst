import React from 'react';
import { string } from 'prop-types';
import { Button } from './OpacityButton.style';

const OpacityButton = ({ content, maxWidth, width, color, margin }) => {
  return (
    <Button
      margin={margin}
      border={color}
      color={color}
      width={width}
      maxWidth={maxWidth}
    >
      {content}
    </Button>
  );
};

OpacityButton.propTypes = {
  content: string.isRequired,
  width: string.isRequired,
  maxWidth: string.isRequired,
  color: string.isRequired,
  margin: string
};

OpacityButton.defaultProps = {
  margin: '0 auto'
};

export default OpacityButton;
