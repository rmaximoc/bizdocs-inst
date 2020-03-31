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
  maxHeight,
  fontSize,
  fontWeight
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
      fontSize={fontSize}
      fontWeight={fontWeight}
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
  maxHeight: string,
  fontSize: string,
  fontWeight: string
};

OpacityButton.defaultProps = {
  margin: '0 auto',
  minWidth: '',
  maxHeight: '51px',
  fontSize: '14px',
  fontWeight: '500'
};

export default OpacityButton;
