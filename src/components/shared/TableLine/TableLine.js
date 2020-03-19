import React from 'react';
import { string } from 'prop-types';
import {
  Box,
  FirstLine,
  SecondLine,
  ThirdLine,
  FirstTitle,
  FirstValue
} from './TableLine.style';

const TableLine = ({ content }) => {
  return (
    <>
      <Box>
        <FirstLine>
          <FirstTitle>{content.title[0]}</FirstTitle>
          <FirstValue>{content.value[0]}</FirstValue>
        </FirstLine>
      </Box>
      <Box>
        <SecondLine>
          <FirstTitle>{content.title[1]}</FirstTitle>
          <FirstValue>{content.value[1]}</FirstValue>
        </SecondLine>
      </Box>
      <Box>
        <ThirdLine>
          <FirstTitle>{content.title[2]}</FirstTitle>
          <FirstValue>{content.value[2]}</FirstValue>
        </ThirdLine>
      </Box>
    </>
  );
};

TableLine.propTypes = {
  content: string.isRequired
};

export default TableLine;
