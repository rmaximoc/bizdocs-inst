import React from 'react';
import { Container, MarginBox } from './ClientsLogo.style';
import logos from './logos';

const ClientsLogo = () => {
  return (
    <Container>
      <MarginBox>
        {logos.map(logo => (
          <img src={logo} alt="logos" key={logo.toString()} />
        ))}
      </MarginBox>
    </Container>
  );
};

export default ClientsLogo;
