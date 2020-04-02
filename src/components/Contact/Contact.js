import React from 'react';
import { string } from 'prop-types';
import GreenButton from '../shared/GreenButton/GreenButton';
import {
  Container,
  MarginBox,
  ContactBox,
  Title,
  InputBox,
  ButtonBox
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
          <ButtonBox>
            <GreenButton
              width="95.4%"
              margin="20px 0"
              content="Experimente grátis"
              fontSize="16px"
              padding="30px 23px"
            />
          </ButtonBox>
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
