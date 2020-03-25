import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Container,
  MarginBox,
  Title,
  CardsBox,
  Strip
} from './MainlyFunctions.style';
import FunctionsCard from '../FunctionsCard/FunctionsCard';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import cardsContent from './cardsContent';

const MainlyFunctions = () => {
  return (
    <Container>
      <Strip />
      <MarginBox>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={2}
          delay={1}
        >
          <Title>
            Principais
            <br /> benefícios e funcionalidades
          </Title>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={2}
          delay={1}
        >
          <p>
            O Bizdocs é uma solução inteligente, dinâmica e integrada de gestão
            documental.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={2}
          delay={1}
        >
          <MarginBox>
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
          </MarginBox>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={2}
          delay={1}
        >
          <MarginBox>
            <OpacityButton
              margin="40px auto 60px"
              content="Ver mais benefícios"
              maxWidth="247px"
            />
          </MarginBox>
        </ScrollAnimation>
      </MarginBox>
    </Container>
  );
};

export default MainlyFunctions;
