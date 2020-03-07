import React from 'react';
import { string, element } from 'prop-types';
import { Container, MarginBox, Title } from './FunctionsCard.style';

const FunctionsCard = ({ image, title, text }) => {
  return (
    <Container>
      <MarginBox>
        {image}
        <Title>{title}</Title>
        <p>{text}</p>
      </MarginBox>
    </Container>
  );
};

FunctionsCard.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  image: element.isRequired
};

export default FunctionsCard;
