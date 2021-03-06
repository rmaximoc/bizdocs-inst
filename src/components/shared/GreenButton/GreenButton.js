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
  fontSize,
  padding,
  minHeight,
  shadow
}) => {
  return (
    <Button
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      color={color}
      margin={margin}
      fontSize={fontSize}
      minHeight={minHeight}
      padding={padding}
      shadow={shadow}
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
  fontSize: string,
  minHeight: string,
  padding: string,
  shadow: string
};

GreenButton.defaultProps = {
  minWidth: '',
  color: '#69b643',
  margin: '0',
  width: '',
  fontSize: '14px',
  minHeight: 'unset',
  padding: '17px 23px',
  shadow: 'unset'
};

export default GreenButton;
