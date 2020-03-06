import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import {
  Container,
  TextContent,
  VideoContent,
  PresentationContent,
  MarginBox
} from './IntroSection.style';

const IntroSection = () => {
  return (
    <Container>
      <MarginBox>
        <PresentationContent>
          <TextContent>
            <h1>
              O Sistema Inteligente e dinâmico que gere os documentos do seu
              negócio
            </h1>
            <p>
              Imagine uma plataforma que aceita qualquer formato, através de
              qualquer dispositivo, desde a foto de telemóvel à digitalização,
              para criar, reconhecer, classificar e partilhar com a pessoa certa
              qualquer documento ou talão.
            </p>
          </TextContent>
          <GreenButton content="Experimente grátis" maxWidth="301px" />
        </PresentationContent>
        <VideoContent>video here</VideoContent>
      </MarginBox>
    </Container>
  );
};

export default IntroSection;
