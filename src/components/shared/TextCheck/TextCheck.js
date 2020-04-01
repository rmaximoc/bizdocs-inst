import React from 'react';
import { string } from 'prop-types';
import { Container, MarginBox, Box, BoxCheck, Hyper } from './TextCheck.style';
import { ReactComponent as Check } from '../../../assets/images/check.svg';

const TextCheck = ({ content, hyper }) => {
  return (
    <Container>
      <MarginBox>
        <Box>
          <BoxCheck>
            <Check fill="#69B643" />
          </BoxCheck>
          {`${content}ㅤ`}
          <Hyper>{hyper}</Hyper>
        </Box>
      </MarginBox>
    </Container>
  );
};

TextCheck.propTypes = {
  content: string.isRequired,
  hyper: string
};

TextCheck.defaultProps = {
  hyper: ''
};

export default TextCheck;
