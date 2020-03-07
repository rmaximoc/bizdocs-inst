import React from 'react';
import { string } from 'prop-types';
import { Button } from './OpacityButton.style';

const OpacityButton = ({ content, maxWidth }) => {
  return <Button maxWidth={maxWidth}>{content}</Button>;
};

OpacityButton.propTypes = {
  content: string.isRequired,
  maxWidth: string.isRequired
};

export default OpacityButton;
