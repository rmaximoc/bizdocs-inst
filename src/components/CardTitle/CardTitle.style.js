import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.p`
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 18px;
  font-weight: 700;
  color: #69b643;
`;
