import React from 'react';
import { string } from 'prop-types';
import { Container, MarginBox, Box, BoxCheck } from './TextCheck.style';
import { ReactComponent as Check } from '../../../assets/images/check.svg';

const TextCheck = ({ content }) => {
  return (
    <Container>
      <MarginBox>
        <Box>
          <BoxCheck>
            <Check fill="#69B643" />
          </BoxCheck>
          {content}
        </Box>
      </MarginBox>
    </Container>
  );
};

TextCheck.propTypes = {
  content: string.isRequired
};

export default TextCheck;
