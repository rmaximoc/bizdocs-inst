import React from 'react';
import { string } from 'prop-types';
import { Button } from './AdaptiveButton.style';

const AdaptiveButton = ({
  content,
  maxWidth,
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
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
    >
      {content}
    </Button>
  );
};

AdaptiveButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired,
  color: string.isRequired,
  margin: string,
  minWidth: string,
  maxHeight: string
};

AdaptiveButton.defaultProps = {
  margin: '0 auto',
  minWidth: '',
  maxHeight: '51px'
};

export default AdaptiveButton;
