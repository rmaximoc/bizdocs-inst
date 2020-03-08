import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 0 auto 240px;

  p {
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin: 157px 0 30px 0;
  font-size: 36px;
  color: #69b643;
  text-align: center;
`;

export const CardsBox = styled.div`
  display: grid;
  margin: 60px auto 70px;
  grid-template-columns: 450px 450px;
  grid-column-gap: 45px;
  grid-row-gap: 42px;
`;
