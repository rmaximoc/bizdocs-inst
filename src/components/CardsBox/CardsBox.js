import React from 'react';
import { Container, MarginBox, Box } from './CardsBox.style';
import CardTitle from '../CardTitle/CardTitle';
import cardsContent from './cardsContent';

const CardsBox = () => {
  return (
    <Container>
      <MarginBox>
        {cardsContent.map(card => (
          <Box>
            <CardTitle image={card.image} text={card.text} />
          </Box>
        ))}
      </MarginBox>
    </Container>
  );
};

export default CardsBox;
