import React from 'react';
import { Container, MarginBox, Box } from './CardsBox.style';
import CardTitle from '../CardTitle/CardTitle';
import { cardsFull, cardsPart } from './cardsContent';

export const CardsBox = () => {
  return (
    <Container>
      <MarginBox>
        {cardsFull.map(card => (
          <Box columnPosition={card.columnPosition}>
            <CardTitle image={card.image} text={card.text} />
          </Box>
        ))}
      </MarginBox>
    </Container>
  );
};

export const CardsBoxPart = () => {
  return (
    <Container>
      <MarginBox>
        {cardsPart.map(card => (
          <Box columnPosition={card.columnPosition}>
            <CardTitle image={card.image} text={card.text} />
          </Box>
        ))}
      </MarginBox>
    </Container>
  );
};
