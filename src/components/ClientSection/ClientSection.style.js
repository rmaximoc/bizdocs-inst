import styled from 'styled-components';
import meetPic from '../../assets/images/meet-pic.png';

export const Container = styled.div`
  display: flex;
`;

export const MarginBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 100px auto 50px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
    color: #abc6de;
  }

  p {
    font-size: 16px;
    color: #585858;
  }

  span {
    font-size: 42px;
    color: #69b643;
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin: 130px 112px 123px 0;
  max-width: 590px;
`;

export const Image = styled.div`
  display: flex;
  z-index: 2;
  width: 100%;
  max-width: 437px;
  max-height: 564px;
  background-image: url(${meetPic});
  background-position-x: -80px;
  background-size: 880px;
`;

export const ImageContent = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const News = styled.p`
  background-color: #69b643;
  padding: 12px 19px;
  max-width: 117px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ExternalBorder = styled.div`
  display: flex;
  position: static;
  margin: 5vh 10vw 0 -45vw;
  border: 1px solid #69b643;
  width: 437px;
  height: 564px;

  @media screen and (max-width: 1770px) {
    margin: 5vh 0vw 0 -45vw;
  }

  @media screen and (max-width: 1400px) {
    margin: 5vh 0vw 0 -30vw;
  }
`;

export const Strip = styled.div`
  display: flex;
  position: absolute;
  width: 2px;
  height: 120px;
  background-color: #69b643;
  margin: -50px 0 0 15vw;
`;
