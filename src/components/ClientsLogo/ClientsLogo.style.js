import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto 40px auto;

  @media screen and (max-width: 992px) {
    margin: 0;
  }
`;

export const LogoBox = styled.div`
  display: grid;
  object-fit: cover;
  column-gap: 30px;
  grid-template-columns: repeat(7, 1fr);

  @media screen and (max-width: 992px) {
    grid-gap: 33px;
    align-items: center;
  }

  img {
    max-width: 126px;
    max-height: 40px;

    @media screen and (max-width: 992px) {
      max-width: 83px;
      max-height: 27px;
      align-items: center;
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LogoBoxMobile = styled.div`
  display: none;
  object-fit: cover;
  column-gap: 30px;
  grid-template-columns: repeat(7, 1fr);

  @media screen and (max-width: 992px) {
    grid-gap: 33px;
    align-items: center;
    display: grid;
  }

  img {
    max-width: 126px;
    max-height: 40px;

    @media screen and (max-width: 992px) {
      max-width: 83px;
      max-height: 27px;
      align-items: center;
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
