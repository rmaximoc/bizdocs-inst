import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
  border-radius: 6px 6px 0 0;
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (max-width: 992px) {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    width: 41%;

    @media screen and (max-width: 1400px) {
      flex-direction: column;
      margin: auto;
      width: unset;
    }
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Value = styled.h1`
  font-size: 36px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const DesktopBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileBox = styled.div`
  display: none;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  margin: 0 auto;

  button {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
`;

export const MobileHeader = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 30px;
  width: 100%;
  border-radius: 6px 6px 0 0;
  background-color: ${({ bgColor }) => bgColor};

  @media screen and (max-width: 992px) {
    display: flex;
  }
`;
