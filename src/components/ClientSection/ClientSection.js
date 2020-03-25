import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
  Container,
  MarginBox,
  TextContent,
  PresentationContent,
  ImageContent,
  Image,
  ExternalBorder,
  News,
  Strip,
  ButtonBox
} from './ClientSection.style';
import GreyButton from '../shared/GreyButton/GreyButton';

const ClientSection = () => {
  return (
    <Container>
      <MarginBox>
        <Strip />
        <PresentationContent>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            duration={1}
            delay={1}
          >
            <News>NOTÍCIAS</News>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            duration={1}
            delay={1}
          >
            <TextContent>
              <h1>
                Mais de <span>3.200 </span>
                empresários aplaudiram o Bizdocs em acção durante o evento OMIE
                de Agosto 2019, em São Paulo
              </h1>
              <p>
                Imagine uma plataforma que aceita qualquer formato, através de
                qualquer dispositivo, desde a foto de telemóvel à digitalização,
                para criar.
              </p>
            </TextContent>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            duration={1}
            delay={1}
          >
            <ButtonBox>
              <GreyButton
                content="Saber mais"
                minWidth="247px"
                maxWidth="247px"
              />
            </ButtonBox>
          </ScrollAnimation>
        </PresentationContent>
        <ImageContent>
          <Image />
        </ImageContent>
        <ExternalBorder />
      </MarginBox>
    </Container>
  );
};

export default ClientSection;
