import React from 'react';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import DropButton from '../shared/DropButton/DropButton';
import {
  Container,
  LinksContent,
  ButtonContent,
  DropButtonContent,
  HeaderContent,
  MarginBox
} from './Header.style';
import { ReactComponent as BizLogo } from '../../assets/images/logo-bizdocs.svg';

const Header = () => {
  return (
    <Container>
      <MarginBox>
        <DropButtonContent>
          <DropButton content="Portugal" />
        </DropButtonContent>
        <HeaderContent>
          <BizLogo style={{ marginRight: '5%', minWidth: '200px' }} />
          <LinksContent>
            <p>Bizdocs</p>
            <p>G.Contabilidade</p>
            <p>Empresas</p>
            <p>Planos e Preços</p>
            <p>Suporte</p>
          </LinksContent>
          <ButtonContent>
            <GreenButton content="Experimente grátis" maxWidth="185px" />
            <OpacityButton maxWidth="88px" content="Login" />
          </ButtonContent>
        </HeaderContent>
      </MarginBox>
    </Container>
  );
};

export default Header;
