import React from 'react';
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
            <input />
            <input />
          </InputBox>
          <InputBox>
            <input />
            <input />
          </InputBox>
        </ContactBox>
      </MarginBox>
    </Container>
  );
};

export default Contact;
