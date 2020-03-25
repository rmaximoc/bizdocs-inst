import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Container,
  MarginBox,
  Title,
  CardsBox,
  Strip,
  OpacityButtonMobile,
  MarginBoxDesktop
} from './MainlyFunctions.style';
import CarouselSliderTwo from '../CarouselSliderTwo/CarouselSliderTwo';
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
          <MarginBoxDesktop>
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
          </MarginBoxDesktop>
        </ScrollAnimation>
        <MarginBox>
          <CarouselSliderTwo
            slidesToShow={1}
            slidesToScroll={1}
            firstCard={
              <FunctionsCard
                image={cardsContent[0].image}
                title={cardsContent[0].title}
                text={cardsContent[0].text}
                key={cardsContent[0].title}
              />
            }
            secondCard={
              <FunctionsCard
                image={cardsContent[1].image}
                title={cardsContent[1].title}
                text={cardsContent[1].text}
                key={cardsContent[1].title}
              />
            }
            thirdCard={
              <FunctionsCard
                image={cardsContent[2].image}
                title={cardsContent[2].title}
                text={cardsContent[2].text}
                key={cardsContent[2].title}
              />
            }
            fourthCard={
              <FunctionsCard
                image={cardsContent[3].image}
                title={cardsContent[3].title}
                text={cardsContent[3].text}
                key={cardsContent[3].title}
              />
            }
          />
        </MarginBox>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          duration={2}
          delay={1}
        >
          <MarginBox>
            <OpacityButtonMobile>
              <OpacityButton
                margin="40px auto 60px"
                content="Ver mais benefícios"
                maxWidth="247px"
              />
            </OpacityButtonMobile>
          </MarginBox>
        </ScrollAnimation>
      </MarginBox>
    </Container>
  );
};

export default MainlyFunctions;
