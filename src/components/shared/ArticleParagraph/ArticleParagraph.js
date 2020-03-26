import React from 'react';
import { string } from 'prop-types';
import { Container, Paragraph } from './ArticleParagraph.style';

const ArticleParagraph = ({ content1, content2, content3, color }) => {
  return (
    <Container>
      <Paragraph color={color}>{content1}</Paragraph>
      <Paragraph color={color}>{content2}</Paragraph>
      <Paragraph color={color}>{content3}</Paragraph>
    </Container>
  );
};

ArticleParagraph.propTypes = {
  content1: string.isRequired,
  content2: string.isRequired,
  content3: string.isRequired,
  color: string.isRequired
};

export default ArticleParagraph;
