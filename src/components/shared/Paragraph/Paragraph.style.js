import styled from 'styled-components';

export const Box = styled.p`
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
  color: ${({ color }) => color};
  font-weight: 500;
  max-width: 709px;

  @media screen and (max-width: 992px) {
    font-size: 14px;
  }
`;
