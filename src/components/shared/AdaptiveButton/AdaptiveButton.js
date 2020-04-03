import React from 'react';
import { string } from 'prop-types';
import { Button } from './AdaptiveButton.style';

const AdaptiveButton = ({
  content,
  maxWidth,
  color,
  margin,
  minWidth,
  maxHeight,
  mediaMargin
}) => {
  return (
    <Button
      margin={margin}
      border={color}
      color={color}
      maxWidth={maxWidth}
      minWidth={minWidth}
      maxHeight={maxHeight}
      mediaMargin={mediaMargin}
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
  maxHeight: string,
  mediaMargin: string
};

AdaptiveButton.defaultProps = {
  margin: '0 auto',
  minWidth: '',
  maxHeight: '51px',
  mediaMargin: '0 10px'
};

export default AdaptiveButton;
