import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  padding: 15px 13px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 500;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  width: 12.4%;
  margin: ${({ margin }) => margin};
  max-height: ${({ maxHeight }) => maxHeight};
  transition: 0.5s;
  cursor: pointer;
  margin: 0 5px;

  @media screen and (max-width: 2724px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 2052px) {
    margin: 0 15px;
  }

  @media screen and (max-width: 1820px) {
    margin: 0 10px;
  }

  :hover {
    transition: 0.5s;
    background-color: ${({ color }) => color};
    color: #ffffff;
  }
`;
