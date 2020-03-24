import React from 'react';
import {
  Container,
  MarginBox,
  SocialLinks,
  Copyright
} from './MobileFooter.style';
import footerLinks from '../DesktopFooter/footerLinks';
import AccordionFooter from '../../AccordionFooter/AccordionFooter';

const MobileFooter = () => {
  return (
    <Container>
      <MarginBox>
        <AccordionFooter
          bgColor="#1b2555"
          title="Sobre o Bizdocs"
          paragraph={
            <>
              <li>teste1</li>
              <li>teste2</li>
            </>
          }
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <AccordionFooter
          bgColor="#1b2555"
          title="Portal Gab. Contabilidade"
          paragraph={
            <>
              <li>teste1</li>
              <li>teste2</li>
            </>
          }
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <AccordionFooter
          bgColor="#1b2555"
          title="Empresa - Mobi"
          paragraph={
            <>
              <li>teste1</li>
              <li>teste2</li>
            </>
          }
          color="#ABC6DE"
          width="100%"
          liColor="#1b2555"
          fontColor="#ffffff"
        />
        <AccordionFooter
          bgColor="#1b2555"
          title="Login"
          paragraph={
            <>
              <li>teste1</li>
              <li>teste2</li>
            </>
          }
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
