import React from 'react';
import { string } from 'prop-types';
import { Button } from './OpacityButton.style';

const OpacityButton = ({ content }) => {
  return <Button>{content}</Button>;
};

OpacityButton.propTypes = {
  content: string.isRequired
};

export default OpacityButton;
