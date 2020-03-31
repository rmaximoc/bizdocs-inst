import React from 'react';
import { string } from 'prop-types';
import { Box } from './Paragraph.style';

const Paragraph = ({ content, color, maxWidth }) => {
  return (
    <Box maxWidth={maxWidth} color={color}>
      {content}
    </Box>
  );
};

Paragraph.propTypes = {
  content: string.isRequired,
  color: string.isRequired,
  maxWidth: string
};

Paragraph.defaultProps = {
  maxWidth: '750px'
};

export default Paragraph;
