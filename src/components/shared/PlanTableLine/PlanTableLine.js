import React from 'react';
import { string } from 'prop-types';
import { Box, FirstColumn, SecondColumn } from './PlanTableLine.style';

const PlanTableLine = ({ first, second, bgColor }) => {
  return (
    <Box bgColor={bgColor}>
      <FirstColumn>{first}</FirstColumn>
      <SecondColumn>{second}</SecondColumn>
    </Box>
  );
};

PlanTableLine.propTypes = {
  first: string.isRequired,
  second: string.isRequired,
  bgColor: string.isRequired
};

export default PlanTableLine;
