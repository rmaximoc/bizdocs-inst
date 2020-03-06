import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import DropButton from '../shared/DropButton/DropButton'
import {
  Container,
  LinksContent,
  ButtonContent,
  DropButtonContent
} from './Header.style';

const Header = () => {
  return (
    <Container>
      <img src="" alt="" />
      <LinksContent>
        <DropButtonContent>
          <DropButton content="Portugal" />
        </DropButtonContent>
        <p>Bizdocs</p>
        <p>G.Contabilidade</p>
        <p>Empresas</p>
        <p>Planos e Preços</p>
        <p>Suporte</p>
      </LinksContent>
      <ButtonContent>
        <GreenButton content="Experimente grátis" />
        <OpacityButton content="Login" />
      </ButtonContent>
    </Container>
  );
};

export default Header;
