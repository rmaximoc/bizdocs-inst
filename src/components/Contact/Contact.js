import React from 'react';
import { string } from 'prop-types';
import GreenButton from '../shared/GreenButton/GreenButton';
import {
  Container,
  MarginBox,
  ContactBox,
  Title,
  InputBox
} from './Contact.style';

const Contact = ({ margin }) => {
  return (
    <Container margin={margin}>
      <MarginBox>
        <ContactBox>
          <Title>Faça o seu registo</Title>
          <InputBox>
            <input placeholder="O seu nome" />
            <input placeholder="O seu email" />
          </InputBox>
          <InputBox>
            <input placeholder="Palavra-Chave" />
            <input placeholder="Confirmar Palavra-Chave" />
          </InputBox>
          <GreenButton margin="20px 0" content="Experimente grátis" />
        </ContactBox>
      </MarginBox>
    </Container>
  );
};

Contact.propTypes = {
  margin: string
};

Contact.defaultProps = {
  margin: ''
};

export default Contact;
