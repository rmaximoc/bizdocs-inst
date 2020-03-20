import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import {
  Container,
  TextContent,
  VideoContent,
  PresentationContent,
  MarginBox,
  Triangle,
  ButtonBoxDesktop,
  ButtonBoxMobile
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
          <ButtonBoxDesktop>
            <GreenButton content="Experimente grátis" maxWidth="301px" />
          </ButtonBoxDesktop>
        </PresentationContent>
        <VideoContent>video here</VideoContent>
        <ButtonBoxMobile>
          <GreenButton
            margin="23px auto 42px"
            content="Experimente grátis"
            maxWidth="100%"
            width="100%"
          />
        </ButtonBoxMobile>
      </MarginBox>
      <Triangle />
    </Container>
  );
};

export default IntroSection;
