import styled from 'styled-components';

export const Box = styled.h1`
  text-align: center;
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  color: #1b2555;
  font-weight: 700;

  @media screen and (max-width: 992px) {
    font-size: 18px;
  }
`;
