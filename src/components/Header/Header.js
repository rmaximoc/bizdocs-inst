import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import DropDown from '../shared/DropDown/DropDown';

import {
  Container,
  LinksContent,
  ButtonContent,
  DropDownContent,
  HeaderContent,
  MarginBox,
  Anchor,
  Logo,
  BurgerBox
} from './Header.style';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({ bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      <MarginBox>
        <DropDownContent>
          <DropDown content="Portugal" />
        </DropDownContent>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <LinksContent>
            <Link style={{ textDecoration: 'none' }} to="bizdocs">
              <Anchor>Bizdocs</Anchor>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Anchor>G.Contabilidade</Anchor>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="empresas">
              <Anchor>Empresas</Anchor>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/plans-and-prices">
              <Anchor>Planos e Preços</Anchor>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <Anchor>Suporte</Anchor>
            </Link>
          </LinksContent>
          <ButtonContent>
            <GreenButton
              content="Experimente grátis"
              maxWidth="185px"
              margin="0 10px 0 0"
            />
            <OpacityButton maxWidth="88px" content="Login" />
          </ButtonContent>
        </HeaderContent>
        <BurgerBox>
          <BurgerMenu />
        </BurgerBox>
      </MarginBox>
    </Container>
  );
};

Header.propTypes = {
  bgColor: string
};

Header.defaultProps = {
  bgColor: ''
};

export default Header;
