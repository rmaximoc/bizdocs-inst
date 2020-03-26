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
              <Links to={link.link} key={link.text}>
                {link.text}
              </Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <LinksContent>
            <Title>Portal Gab. Contabilidade</Title>
            {footerLinks.portal.map(link => (
              <Links key={link.text}>{link.text}</Links>
            ))}
          </LinksContent>
          <LinksContent>
            <Title style={{ marginTop: '50px' }}>Empresas - Mobi</Title>
            {footerLinks.empresas.map(link => (
              <Links key={link.text}>{link.text}</Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <LinksContent>
            <Title>Login</Title>
            {footerLinks.login.map(link => (
              <Links key={link.text}>{link.text}</Links>
            ))}
          </LinksContent>
        </Column>
        <Column>
          <Title>Social</Title>
          <SocialLinks>
            {footerLinks.social.map(social => (
              <div key={social.alt}>{social.logo}</div>
            ))}
          </SocialLinks>
          <Copyright>@2020 Bizdocs. Todos os direitos reservados</Copyright>
        </Column>
      </MarginBox>
    </Container>
  );
};

export default DesktopFooter;
