import React from 'react';
import { string } from 'prop-types';
import { Button } from './OpacityButton.style';

const OpacityButton = ({
  content,
  maxWidth,
  width,
  color,
  margin,
  minWidth,
  maxHeight
}) => {
  return (
    <Button
      margin={margin}
      border={color}
      color={color}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
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
  margin: string,
  minWidth: string,
  maxHeight: string
};

OpacityButton.defaultProps = {
  margin: '0 auto',
  minWidth: '',
  maxHeight: '51px'
};

export default OpacityButton;
