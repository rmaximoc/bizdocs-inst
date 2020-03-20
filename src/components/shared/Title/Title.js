import React from 'react';
import { string } from 'prop-types';
import { Box } from './Title.style';

const Title = ({ content, margin }) => {
  return <Box margin={margin}>{content}</Box>;
};

Title.propTypes = {
  content: string.isRequired,
  margin: string
};

Title.defaultProps = {
  margin: '0'
};

export default Title;
