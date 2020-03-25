import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 220px;

  @media screen and (max-width: 992px) {
    padding-bottom: 220px;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 0 auto 10px;

  @media screen and (max-width: 992px) {
    margin: 0 auto -31px;
  }

  p {
    text-align: center;

    @media screen and (max-width: 992px) {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h1`
  margin: 195px 0 30px 0;
  font-size: 36px;
  color: #69b643;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 24px;
    margin: 335px 0 30px 0;
  }
`;

export const CardsBox = styled.div`
  display: grid;
  margin: 60px auto 70px;
  grid-template-columns: 450px 450px;
  grid-column-gap: 45px;
  grid-row-gap: 42px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Strip = styled.div`
  display: flex;
  position: absolute;
  width: 2px;
  height: 120px;
  background-color: #69b643;
  margin: 35px 50% 0;

  @media screen and (max-width: 992px) {
    margin: 255px 50% 0;
    height: 50px;
  }
`;
