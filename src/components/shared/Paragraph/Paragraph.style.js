import styled from 'styled-components';

export const Box = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  color: ${({ color }) => color};
  font-weight: 500;
  max-width: 709px;
`;
