import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${({ color }) => color};
  margin: auto auto 50px;
  max-width: 756px;
`;
