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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};

  div {
    display: flex;
    align-items: center;
    width: 40%;
  }
`;

export const Value = styled.h1`
  font-size: 36px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;
