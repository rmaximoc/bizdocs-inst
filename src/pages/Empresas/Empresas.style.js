import styled from 'styled-components';

export const DesktopBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: none;
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const ButtonBox = styled.div`
  display: none;
  margin: 0 auto 30px;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
