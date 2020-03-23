import React from 'react';
import {
  Container,
  MarginBox,
  SocialLinks,
  Copyright
} from './MobileFooter.style';
import Accordion from '../../Accordion/Accordion';
import footerLinks from '../DesktopFooter/footerLinks';

const MobileFooter = () => {
  return (
    <Container>
      <MarginBox>
        <Accordion
          bgColor="#1b2555"
          title="Sobre o Bizdocs"
          paragraph="teste"
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <Accordion
          bgColor="#1b2555"
          title="Portal Gab. Contabilidade"
          paragraph="teste"
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <Accordion
          bgColor="#1b2555"
          title="Empresa - Mobi"
          paragraph="teste"
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <Accordion
          bgColor="#1b2555"
          title="Login"
          paragraph="teste"
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <SocialLinks>
          {footerLinks.social.map(social => (
            <div key={social.alt}>{social.logo}</div>
          ))}
        </SocialLinks>
        <Copyright>@2020 Bizdocs. Todos os direitos reservados</Copyright>
      </MarginBox>
    </Container>
  );
};

export default MobileFooter;
