import React from 'react';
import Title from '../shared/Title/Title';
import Paragraph from '../shared/Paragraph/Paragraph';
import {
  Container,
  MarginBox,
  TextContent,
  ButtonBox
} from './TextContentBoxButton.style';
import GreenButton from '../shared/GreenButton/GreenButton';
import Logo from '../../assets/images/logo_latourrete.png';

const TextContentBoxButton = () => {
  return (
    <Container>
      <MarginBox>
        <TextContent>
          <Title content="Benefícios e Funcionalidades" />
          <Paragraph content="Pode usar o Bizdocs para aumentar a sua eficiência, melhorar a Experiência com os seus Clientes, partilhar documentos em absoluta segurança, automatizar o processamento de informação e de facturas e muito mais." />
          <ButtonBox>
            <GreenButton
              content="Ver todos os benefícios e funcionalidades"
              maxWidth="372px"
            />
          </ButtonBox>
        </TextContent>
        <TextContent>
          <Title content="Planos e Preços" />
          <Paragraph content="Queremos que experimente o Bizdocs o mais depressa possível, pois só testando vai perceber todas as suas vantagens. Pode começar a usar o Bizdocs ainda hoje, sem qualquer custo para si. Assim que tiver a certeza de que esta é a solução, escolha o plano que melhor se adequa à dimensão e características da sua actividade. Veja todas as opções à sua disposição." />
          <ButtonBox>
            <GreenButton
              content="Ver Planos e Preços"
              maxWidth="372px"
              minWidth="372px"
            />
          </ButtonBox>
        </TextContent>
        <TextContent>
          <Title content="Uma solução Latourrette Consulting" />
          <Paragraph content="Bizdocs é uma solução com a chancela de qualidade Latourrette Consulting, uma empresa portuguesa especializada em soluções de RPA (Robotic Process Automation) e automação inteligente para a gestão de informação, com presença em 7 países por 3 continentes, reconhecida e premiada por parceiros internacionais como a Microsoft, a HP, a Kofax e outros." />
          <img src={Logo} alt="" />
          <ButtonBox>
            <GreenButton
              content="Ver Planos e Preços"
              maxWidth="372px"
              minWidth="372px"
            />
          </ButtonBox>
        </TextContent>
      </MarginBox>
    </Container>
  );
};

export default TextContentBoxButton;
