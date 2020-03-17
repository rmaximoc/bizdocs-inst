import React from 'react';
import CardsNews from '../CardsNews/CardsNews';
import { Container, MarginBox } from './CardImageTitle.style';
import newsContent from './newsContent';

const CardImageTitle = () => {
  return (
    <Container>
      <MarginBox>
        {newsContent.map(item => (
          <CardsNews image={item.image} date={item.date} title={item.title} />
        ))}
      </MarginBox>
    </Container>
  );
};

export default CardImageTitle;
