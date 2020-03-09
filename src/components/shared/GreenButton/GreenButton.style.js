import styled from 'styled-components';

export const Button = styled.button`
  text-align: center;
  margin-right: 10px;
  padding: 17px 23px;
  border-radius: 6px;
  border: 0;
  background-color: #69b643;
  font-weight: 500;
  max-height: 51px;
  max-width: ${({ maxWidth }) => maxWidth};
  cursor: pointer;
`;
