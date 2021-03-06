import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-height: 650px;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: -60px auto 240px;

  @media screen and (max-width: 992px) {
    width: 90%;
    margin: 0px auto 240px;
  }

  /** SAFARI ONLY */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      @media screen and (max-width: 992px) {
        width: 90%;
        margin: 200px auto 240px;
      }
    }
  }
  /** SAFARI ONLY */
`;

export const MarginBoxMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  justify-content: center;

  @media screen and (max-width: 992px) {
    width: 90%;
  }
`;

export const GreenBackground = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  background-color: #69b643;
  height: 356px;
  width: 100%;
  transform: skewy(-4deg);
  margin: -141px 0 0 0;
  box-shadow: 0px 30px 60px #00000029;

  @media screen and (max-width: 992px) {
    margin: -70px 0 0 0;
  }
`;

export const CardsBox = styled.div`
  display: flex;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ScrollAnimationBox = styled(ScrollAnimation)`
  display: flex;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  z-index: 1;
  /* margin-top: 211px; */
`;

export const Strip = styled.div`
  z-index: 1;
  display: flex;
  position: absolute;
  width: 2px;
  height: 120px;
  background-color: #ffffff;
  margin: -190px 50% 0;

  @media screen and (max-width: 992px) {
    height: 50px;
    margin: -97px 50% 0;
  }
`;
