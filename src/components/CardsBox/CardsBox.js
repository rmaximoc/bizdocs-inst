import React from 'react';
import { Container, MarginBox } from './CardsBox.style';
import CardTitle from '../CardTitle/CardTitle';
import cardsContent from './cardsContent';

const CardsBox = () => {
  return (
    <Container>
      <MarginBox>
        {cardsContent.map(card => (
          <CardTitle image={card.image} text={card.text} />
        ))}
      </MarginBox>
    </Container>
  );
};

export default CardsBox;
