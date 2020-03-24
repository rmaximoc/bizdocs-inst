import React from 'react';
import { string } from 'prop-types';
import { Container } from './TextContent.style';
import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';

const TextContent = ({ title, paragraph, color, margin }) => {
  return (
    <Container>
      <Title margin={margin} content={title} />
      <Paragraph color={color} content={paragraph} />
    </Container>
  );
};

TextContent.propTypes = {
  title: string.isRequired,
  color: string.isRequired,
  paragraph: string.isRequired,
  margin: string.isRequired
};

export default TextContent;
