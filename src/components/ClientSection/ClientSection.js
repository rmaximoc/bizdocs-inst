import React from 'react';
import {
  Container,
  MarginBox,
  TextContent,
  PresentationContent,
  ImageContent,
  Image,
  ExternalBorder,
  News,
  Strip
} from './ClientSection.style';
import GreyButton from '../shared/GreyButton/GreyButton';

const ClientSection = () => {
  return (
    <Container>
      <MarginBox>
        <Strip />
        <PresentationContent>
          <News>NOTÍCIAS</News>
          <TextContent>
            <h1>
              Mais de <span>3.200 </span>
              empresários aplaudiram o Bizdocs em acção durante o evento OMIE de
              Agosto 2019, em Sâo Paulo
            </h1>
            <p>
              Imagine uma plataforma que aceita qualquer formato, através de
              qualquer dispositivo, desde a foto de telemóvel à digitalização,
              para criar.
            </p>
          </TextContent>
          <GreyButton content="Saber mais" maxWidth="247px" />
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
