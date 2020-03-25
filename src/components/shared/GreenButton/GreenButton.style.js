import styled from 'styled-components';

export const Button = styled.button`
  white-space: nowrap;
  text-align: center;
  padding: 17px 23px;
  border-radius: 6px;
  border: 0;
  font-weight: 500;
  max-height: 51px;
  margin: ${({ margin }) => margin};
  background-color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  cursor: pointer;

  @media screen and (max-width: 992px) {
    max-height: 70px;
    white-space: unset;
  }
`;
