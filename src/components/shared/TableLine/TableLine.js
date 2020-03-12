import React from 'react';
import { string } from 'prop-types';
import { Box } from './TableLine.style';

const TableLine = ({ content }) => {
  return <Box>{content}</Box>;
};

TableLine.propTypes = {
  content: string.isRequired
};

export default TableLine;
