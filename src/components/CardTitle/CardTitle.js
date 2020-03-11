import React from 'react';
import { element, string } from 'prop-types';
import { Container, TextBox } from './CardTitle.style';

const CardTitle = ({ image, text }) => {
  return (
    <Container>
      {image}
      <TextBox>{text}</TextBox>
    </Container>
  );
};

CardTitle.propTypes = {
  image: element.isRequired,
  text: string.isRequired
};

export default CardTitle;
