import styled from 'styled-components';

export const Button = styled.button`
  white-space: nowrap;
  text-align: center;
  padding: ${({ padding }) => padding};
  border-radius: 6px;
  border: 0;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  background-color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    box-shadow: 0 0 23px rgba(117, 203, 75, 0.6);
  }

  @media screen and (max-width: 992px) {
    max-height: 70px;
    white-space: unset;
  }
`;
