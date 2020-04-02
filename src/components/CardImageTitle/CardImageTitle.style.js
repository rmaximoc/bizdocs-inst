import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 70px;
`;

export const MarginBox = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px 25px;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 657px) {
    grid-template-columns: 1fr;
  }
`;
