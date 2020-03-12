import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  background-color: ${({ bgColor }) => bgColor};
`;

export const FirstColumn = styled.div`
  display: flex;
`;

export const SecondColumn = styled.div`
  display: flex;
`;
