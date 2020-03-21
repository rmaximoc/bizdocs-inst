import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  margin-right: 10px;
  padding: 17px 23px;
  border-radius: 6px;
  border: 0;
  background-color: #1c3144;
  font-weight: 500;
  max-height: 51px;
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  box-shadow: 0px 10px 20px #0000003d;
  cursor: pointer;
`;
