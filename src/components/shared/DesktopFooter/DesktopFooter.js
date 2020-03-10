import React from 'react';
import {
  Container,
  MarginBox,
  LinksContent,
  Title,
  Column,
  Links,
  Copyright,
  SocialLinks
} from './DesktopFooter.style';
import footerLinks from './footerLinks';

const DesktopFooter = () => {
  return (
    <Container>
      <MarginBox>
        <Column>
          <LinksContent>
            <Title>Sobre o Bizdocs</Title>
            {footerLinks.about.map(link => (
              <Links>{link.text}</Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <LinksContent>
            <Title>Portal Gab. Contabilidade</Title>
            {footerLinks.portal.map(link => (
              <Links>{link.text}</Links>
            ))}
          </LinksContent>
          <LinksContent>
            <Title style={{ marginTop: '50px' }}>Empresas - Mobi</Title>
            {footerLinks.empresas.map(link => (
              <Links>{link.text}</Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <LinksContent>
            <Title>Login</Title>
            {footerLinks.login.map(link => (
              <Links>{link.text}</Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <Title>Social</Title>
          <SocialLinks>
            {footerLinks.social.map(social => (
              <>{social.logo}</>
            ))}
          </SocialLinks>
          <Copyright>@2020 Bizdocs. Todos os direitos reservados</Copyright>
        </Column>
      </MarginBox>
    </Container>
  );
};

export default DesktopFooter;
