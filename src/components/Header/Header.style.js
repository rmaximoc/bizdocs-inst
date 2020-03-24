import styled from 'styled-components';
import { ReactComponent as BizLogo } from '../../assets/images/logo-bizdocs.svg';

export const Logo = styled(BizLogo)`
  margin-right: 5%;
  min-width: 200px;

  @media screen and (max-width: 992px) {
    max-width: 135px;
    min-width: unset;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DropDownContent = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-weight: 600;
  margin: 0 18px;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const BurgerBox = styled.div`
  display: flex;
`;
