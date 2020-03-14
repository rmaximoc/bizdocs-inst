import React from 'react';
import { string } from 'prop-types';
import { Container, MarginBox, Box } from './TextCheck.style';
import { ReactComponent as Check } from '../../../assets/images/check.svg';

const TextCheck = ({ content }) => {
  return (
    <Container>
      <MarginBox>
        <Box>
          <Check />
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
