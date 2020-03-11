import React from 'react';
import { string } from 'prop-types';
import { Box } from './Paragraph.style';

const Paragraph = ({ content, color }) => {
  return <Box color={color}>{content}</Box>;
};

Paragraph.propTypes = {
  content: string.isRequired,
  color: string.isRequired
};

export default Paragraph;
