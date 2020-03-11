import React from 'react';
import { string } from 'prop-types';
import { Box } from './Paragraph.style';

const Paragraph = ({ content }) => {
  return <Box>{content}</Box>;
};

Paragraph.propTypes = {
  content: string.isRequired
};

export default Paragraph;
