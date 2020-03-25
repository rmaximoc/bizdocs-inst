import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 130px;
  background-color: ${({ bgColor }) => bgColor};
  margin: ${({ margin }) => margin};
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const DesktopBox = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: none;
  justify-content: center;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
