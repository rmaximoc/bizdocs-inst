import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import {
  Container,
  MarginBox,
  ContactBox,
  Title,
  InputBox
} from './Contact.style';

const Contact = () => {
  return (
    <Container>
      <MarginBox>
        <ContactBox>
          <Title>Faça o seu registro</Title>
          <InputBox>
            <input placeholder="O seu nome" />
            <input placeholder="O seu email" />
          </InputBox>
          <InputBox>
            <input placeholder="Palavra-Chave" />
            <input placeholder="Confirmar Palavra-Chave" />
          </InputBox>
          <GreenButton content="Experimente grátis" />
        </ContactBox>
      </MarginBox>
    </Container>
  );
};

export default Contact;
