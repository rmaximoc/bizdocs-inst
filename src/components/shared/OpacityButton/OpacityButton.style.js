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
  transition: 0.5s;
  cursor: pointer;

  :hover {
    transition: 0.5s;
    box-shadow: 0 0 23px rgba(117, 203, 75, 0.6);
  }
`;
