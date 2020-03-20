import React from 'react';
import { string } from 'prop-types';
import { Button } from './GreenButton.style';

const GreenButton = ({ content, maxWidth, minWidth, color, margin, width }) => {
  return (
    <Button
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      color={color}
      margin={margin}
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
  width: string
};

GreenButton.defaultProps = {
  minWidth: '',
  color: '#69b643',
  margin: '0',
  width: ''
};

export default GreenButton;
