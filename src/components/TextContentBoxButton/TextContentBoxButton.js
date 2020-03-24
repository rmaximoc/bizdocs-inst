import React from 'react';
import {
  Container,
  MarginBox,
  ButtonBox,
  ImageBox
} from './TextContentBoxButton.style';
import GreenButton from '../shared/GreenButton/GreenButton';
import Logo from '../../assets/images/logo_latourrete.png';
import TextContent from '../shared/TextContent/TextContent';

const TextContentBoxButton = () => {
  return (
    <Container>
      <MarginBox>
        <TextContent
          color="#585858"
          title="Benefícios e Funcionalidades"
          paragraph="Pode usar o Bizdocs para aumentar a sua eficiência, melhorar a Experiência com os seus Clientes, partilhar documentos em absoluta segurança, automatizar o processamento de informação e de facturas e muito mais."
        />
        <ButtonBox>
          <GreenButton
            width="100%"
            content="Ver todos os benefícios e funcionalidades"
            maxWidth="372px"
          />
        </ButtonBox>
        <TextContent
          color="#585858"
          title="Planos e Preços"
          paragraph="Queremos que experimente o Bizdocs o mais depressa possível, pois só testando vai perceber todas as suas vantagens. Pode começar a usar o Bizdocs ainda hoje, sem qualquer custo para si. Assim que tiver a certeza de que esta é a solução, escolha o plano que melhor se adequa à dimensão e características da sua actividade. Veja todas as opções à sua disposição."
        />
        <ButtonBox>
          <GreenButton
            width="100%"
            content="Ver Planos e Preços"
            maxWidth="372px"
          />
        </ButtonBox>
        <TextContent
          color="#585858"
          title="Uma solução Latourrette Consulting"
          paragraph="Bizdocs é uma solução com a chancela de qualidade Latourrette Consulting, uma empresa portuguesa especializada em soluções de RPA (Robotic Process Automation) e automação inteligente para a gestão de informação, com presença em 7 países por 3 continentes, reconhecida e premiada por parceiros internacionais como a Microsoft, a HP, a Kofax e outros."
        />
        <ImageBox>
          <img src={Logo} alt="" />
        </ImageBox>
        <ButtonBox>
          <GreenButton
            width="100%"
            content="Ver Planos e Preços"
            maxWidth="372px"
          />
        </ButtonBox>
      </MarginBox>
    </Container>
  );
};

export default TextContentBoxButton;
