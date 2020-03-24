import React from 'react';
import { Container, MarginBox } from './TextContentBox.style';
import TextContent from '../shared/TextContent/TextContent';

const TextContentBox = () => {
  return (
    <Container>
      <MarginBox>
        <TextContent
          margin="0px auto 35px"
          color="#585858"
          title="O que é?"
          paragraph="Todos sentimos já o pesadelo de ter que gerir uma montanha de papel,
            desde facturas e talões de caixa, passando por encomendas e ordens
            de compra, até contratos e declarações. Bizdocs é uma plataforma
            multicanal e dinâmica que gere de forma inteligente e integrada
            todos os seus documentos de negócio."
        />
        <TextContent
          margin="0px auto 35px"
          color="#585858"
          title="Como Funciona"
          paragraph="Imagine um sistema que aceita qualquer formato de documento, do
            papel digitalizado à simples foto de telemóvel, reconhecendo o
            texto, classificando-o por tipo, arquivando-o automaticamente ou
            partilhando-o com o seu contabilista (e arquivando-o de seguida).
            Parece-lhe bom demais para ser verdade? É exactamente o que o
            Bizdocs faz. E mais:"
        />
      </MarginBox>
    </Container>
  );
};

export default TextContentBox;
