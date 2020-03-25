import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  padding: 17px 23px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 500;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  max-height: ${({ maxHeight }) => maxHeight};
  cursor: pointer;
`;
