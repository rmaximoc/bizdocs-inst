import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
`;

export const FirstColumn = styled.div`
  color: #585858;
  text-align: left;
  font-weight: 500;
  width: 30%;
  padding: 24px;
`;

export const SecondColumn = styled.div`
  color: #585858;
  text-align: ${({ textAlign }) => textAlign};
  margin: 0 auto;
  padding: 24px;
  width: 70%;
`;
