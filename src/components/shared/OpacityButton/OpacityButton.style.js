import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  margin: 0 auto;
  padding: 17px 23px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 500;
  max-height: 51px;
  max-width: ${({ maxWidth }) => maxWidth};
`;
