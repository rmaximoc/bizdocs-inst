import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({
  content,
  maxWidth,
  minWidth,
  color,
  margin,
  width,
  fontSize
}) => {
  return (
    <Button
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      color={color}
      margin={margin}
      fontSize={fontSize}
    >
      {content}
    </Button>
  );
};

GreenButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired,
  minWidth: string,
  color: string,
  margin: string,
  width: string,
  fontSize: string
};

GreenButton.defaultProps = {
  minWidth: '',
  color: '#69b643',
  margin: '0',
  width: '',
  fontSize: '14px'
};

export default GreenButton;
