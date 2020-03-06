import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import DropButton from '../shared/DropButton/DropButton';
import {
  Container,
  LinksContent,
  ButtonContent,
  DropButtonContent,
  HeaderContent
} from './Header.style';
import { ReactComponent as BizLogo } from '../../assets/images/logo-bizdocs.svg';

const Header = () => {
  return (
    <Container>
      <DropButtonContent>
        <DropButton content="Portugal" />
      </DropButtonContent>
      <HeaderContent>
        <BizLogo style={{ marginRight: '120px' }} />
        <LinksContent>
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
      </HeaderContent>
    </Container>
  );
};

export default Header;
