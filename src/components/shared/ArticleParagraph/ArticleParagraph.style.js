import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
      width: 100%;
    }
`;

export const Paragraph = styled.p`
  text-align: justify;
  font-size: 16px;
  color: ${({ color }) => color};
`;
