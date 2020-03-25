import React from 'react';
import { string } from 'prop-types';
import { Container, Paragraph } from './ArticleParagraph.style';

const ArticleParagraph = ({ content, color }) => {
  return (
    <Container>
      <Paragraph color={color}>{content}</Paragraph>
    </Container>
  );
};

ArticleParagraph.propTypes = {
  content: string.isRequired,
  color: string.isRequired
};

export default ArticleParagraph;
