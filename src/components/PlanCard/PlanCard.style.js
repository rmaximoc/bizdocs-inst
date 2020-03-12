import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  background-color: ${({ cardColor }) => cardColor};
`;

export const Price = styled.h1`
  display: flex;
`;

export const Table = styled.div`
  display: flex;
`;

export const Value = styled.h1`
  color: ${({ color }) => color};
`;
