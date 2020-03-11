import React from 'react';
import { string } from 'prop-types';
import GreenButton from '../shared/GreenButton/GreenButton';
import OpacityButton from '../shared/OpacityButton/OpacityButton';
import DropDown from '../shared/DropDown/DropDown';
import {
  Container,
  LinksContent,
  ButtonContent,
  DropDownContent,
  HeaderContent,
  MarginBox
} from './Header.style';
import { ReactComponent as BizLogo } from '../../assets/images/logo-bizdocs.svg';

const Header = ({ bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      <MarginBox>
        <DropDownContent>
          <DropDown content="Portugal" />
        </DropDownContent>
        <HeaderContent>
          <BizLogo style={{ marginRight: '5%', minWidth: '200px' }} />
          <LinksContent>
            <a href="#">Bizdocs</a>
            <a href="#">G.Contabilidade</a>
            <a href="#">Empresas</a>
            <a href="#">Planos e Preços</a>
            <a href="#">Suporte</a>
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

Header.propTypes = {
  bgColor: string
};

Header.defaultProps = {
  bgColor: ''
};

export default Header;
