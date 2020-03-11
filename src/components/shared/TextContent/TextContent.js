import React from 'react';
import { string } from 'prop-types';
import { Container } from './TextContent.style';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

const TextContent = ({ title, paragraph, color }) => {
  return (
    <Container>
      <Title content={title} />
      <Paragraph color={color} content={paragraph} />
    </Container>
  );
};

TextContent.propTypes = {
  title: string.isRequired,
  color: string.isRequired,
  paragraph: string.isRequired
};

export default TextContent;
