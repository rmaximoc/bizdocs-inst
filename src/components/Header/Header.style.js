import styled from 'styled-components';
import { ReactComponent as BizLogo } from '../../assets/images/logo-bizdocs.svg';

export const Logo = styled(BizLogo)`
  margin-right: 5%;
  min-width: 200px;
  display: flex;

  @media screen and (max-width: 1352px) {
    max-width: 160px;
    min-width: unset;
  }

  @media screen and (max-width: 1300px) {
    max-width: 146px;
    min-width: unset;
  }

  @media screen and (max-width: 1280px) {
    max-width: 130px;
    min-width: unset;
  }

  @media screen and (max-width: 1264px) {
    max-width: 125px;
    min-width: unset;
  }

  @media screen and (max-width: 992px) {
    width: 135px;
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

  @media screen and (max-width: 992px) {
    min-height: 80px;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const MarginBoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 1185px) {
    width: 93%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DropDownContent = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  font-weight: 600;
  margin: 0 18px;

  @media screen and (max-width: 1264px) {
    font-size: 12px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BurgerBox = styled.div`
  display: flex;
`;
