import React from 'react';
import { string } from 'prop-types';
import { Button } from './OpacityButton.style';

const OpacityButton = ({ content, maxWidth, width, color }) => {
  return (
    <Button border={color} color={color} width={width} maxWidth={maxWidth}>
      {content}
    </Button>
  );
};

OpacityButton.propTypes = {
  content: string.isRequired,
  width: string.isRequired,
  maxWidth: string.isRequired,
  color: string.isRequired
};

export default OpacityButton;
