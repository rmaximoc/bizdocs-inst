import styled from 'styled-components';

export const DesktopBox = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80%;
  margin: 0;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;
