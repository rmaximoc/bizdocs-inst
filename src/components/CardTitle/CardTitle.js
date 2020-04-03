import React from 'react';
import { element, string } from 'prop-types';
import { Container, TextBox } from './CardTitle.style';

const CardTitle = ({ image, text, marginTop }) => {
  return (
    <Container>
      {image}
      <TextBox marginTop={marginTop}>{text}</TextBox>
    </Container>
  );
};

CardTitle.propTypes = {
  image: element.isRequired,
  text: string.isRequired,
  marginTop: string
};

CardTitle.defaultProps = {
  marginTop: '26px'
};

export default CardTitle;
