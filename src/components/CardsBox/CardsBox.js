import React from 'react';
import { Container, MarginBox } from './CardsBox.style';
import CardTitle from '../CardTitle/CardTitle';

const CardsBox = () => {
  return (
    <Container>
      <MarginBox>
        <CardTitle />
      </MarginBox>
    </Container>
  );
};

export default CardsBox;
