import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Box,
  MainColumn,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
  FifthColumn
} from './ComparationTableLine.style';

const ComparationTableLine = ({
  bgColor,
  main,
  first,
  second,
  third,
  fourth,
  fifth
}) => {
  return (
    <Box bgColor={bgColor}>
      <MainColumn>{main}</MainColumn>
      <FirstColumn>{first}</FirstColumn>
      <SecondColumn>{second}</SecondColumn>
      <ThirdColumn>{third}</ThirdColumn>
      <FourthColumn>{fourth}</FourthColumn>
      <FifthColumn>{fifth}</FifthColumn>
    </Box>
  );
};

ComparationTableLine.propTypes = {
  bgColor: string.isRequired,
  main: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  first: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  second: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  third: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fourth: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  fifth: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default ComparationTableLine;
