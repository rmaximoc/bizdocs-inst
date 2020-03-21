import React from 'react';
import { Container, MarginBox, LogoBox } from './ClientsLogo.style';
import logos from './logos';

const ClientsLogo = () => {
  return (
    <Container>
      <MarginBox>
        <LogoBox>
          {logos.map(logo => (
            <img src={logo} alt="logos" key={logo.toString()} />
          ))}
        </LogoBox>
      </MarginBox>
    </Container>
  );
};

export default ClientsLogo;
