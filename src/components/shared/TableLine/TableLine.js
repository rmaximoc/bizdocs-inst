import React from 'react';
import { string } from 'prop-types';
import { Box, FirstColumn, SecondColumn } from './TableLine.style';

const TableLine = ({ title, content }) => {
  // console.log(title, content);
  return (
    <Box>
      <FirstColumn>{title}</FirstColumn>
      <SecondColumn>{content}</SecondColumn>
    </Box>
  );
};

TableLine.propTypes = {
  content: string.isRequired,
  title: string.isRequired
};

export default TableLine;
