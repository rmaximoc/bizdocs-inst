import React from 'react';
import {
  Container,
  MarginBox,
  LogoBox,
  LogoBoxMobile
} from './ClientsLogo.style';
import { logos, logosMobile } from './logos';

const ClientsLogo = () => {
  return (
    <Container>
      <MarginBox>
        <LogoBox>
          {logos.map(logo => (
            <img src={logo} alt="logos" key={logo.toString()} />
          ))}
        </LogoBox>
        <LogoBoxMobile>
          {logosMobile.map(logo => (
            <img src={logo} alt="logos" key={logo.toString()} />
          ))}
        </LogoBoxMobile>
      </MarginBox>
    </Container>
  );
};

export default ClientsLogo;
