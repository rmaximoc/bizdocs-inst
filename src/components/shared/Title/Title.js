import React from 'react';
import { string } from 'prop-types';
import { Box } from './Title.style';

const Title = ({ content }) => {
  return <Box>{content}</Box>;
};

Title.propTypes = {
  content: string.isRequired
};

export default Title;
