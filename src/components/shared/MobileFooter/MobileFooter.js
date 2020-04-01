import React from 'react';
import {
  Container,
  MarginBox,
  SocialLinks,
  Copyright,
  Links
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
              <Links to="/bizdocs">Por que o Bizdocs?</Links>
              <Links to="/plans/benefits">Beneficios e funcionalidades</Links>
              <Links to="/security">Segurança</Links>
              <Links>RGPD</Links>
              <Links to="/plans-and-prices">Planos e preços</Links>
              <Links>Suporte</Links>
              <Links to="/news">Novidade</Links>
              <Links>Contactos</Links>
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
              <Links>Grátis</Links>
              <Links>Platinum</Links>
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
              <Links to="/plans/plan-details">Grátis</Links>
              <Links>Silver</Links>
              <Links>Gold</Links>
              <Links>Platinum</Links>
              <Links>Portal</Links>
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
              <Links>Registo</Links>
              <Links>Politica e privacidade</Links>
              <Links>Termos e condições</Links>
              <Links>Mapa do site</Links>
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
