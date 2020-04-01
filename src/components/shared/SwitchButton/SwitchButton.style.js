import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin: 58px auto;
  justify-content: center;
  align-items: center;
`;

export const Title1 = styled.h1`
  margin: 18px;
  font-size: 18px;
  color: ${props => (props.checked ? '#ADADAD' : '#69B643')};
`;

export const Title2 = styled.h1`
  margin: 18px;
  font-size: 18px;
  color: ${props => (props.checked ? '#69B643' : '#ADADAD')};
`;
