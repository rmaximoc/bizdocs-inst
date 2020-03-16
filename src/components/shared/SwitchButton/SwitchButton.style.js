import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin: 58px auto;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 18px;
  font-size: 18px;
  color: ${({ color }) => color};
`;
