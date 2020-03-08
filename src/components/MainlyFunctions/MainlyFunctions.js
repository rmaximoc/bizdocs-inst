import React from 'react';
import { Container, MarginBox, Title, CardsBox } from './MainlyFunctions.style';
import FunctionsCard from '../FunctionsCard/FunctionsCard';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import cardsContent from './cardsContent';

const MainlyFunctions = () => {
  return (
    <Container>
      <MarginBox>
        <Title>
          Principais
          <br /> benefícios e funcionalidades
        </Title>
        <p>
          O Bizdocs é uma solução inteligente, dinâmica e integrada de gestão
          documental.
        </p>
        <CardsBox>
          {cardsContent.map(card => (
            <FunctionsCard
              image={card.image}
              title={card.title}
              text={card.text}
              key={card.title}
            />
          ))}
        </CardsBox>
        <OpacityButton content="Ver mais benefícios" maxWidth="247px" />
      </MarginBox>
    </Container>
  );
};

export default MainlyFunctions;
