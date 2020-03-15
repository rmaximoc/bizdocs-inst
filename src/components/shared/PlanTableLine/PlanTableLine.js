import React from 'react';
import { string } from 'prop-types';
import { Box, FirstColumn, SecondColumn } from './PlanTableLine.style';

const PlanTableLine = ({ first, second, bgColor, textAlign }) => {
  return (
    <Box bgColor={bgColor}>
      <FirstColumn>{first}</FirstColumn>
      <SecondColumn textAlign={textAlign}>{second}</SecondColumn>
    </Box>
  );
};

PlanTableLine.propTypes = {
  first: string.isRequired,
  second: string.isRequired,
  bgColor: string.isRequired,
  textAlign: string
};

PlanTableLine.defaultProps = {
  textAlign: 'center'
};

export default PlanTableLine;
