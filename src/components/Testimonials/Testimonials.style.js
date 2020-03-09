import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-height: 650px;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  margin: 0 auto 240px;
`;

export const GreenBackground = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  background-color: #69b643;
  height: 356px;
  width: 120%;
  transform: rotate(-6deg);
  margin: -127px 0 0 -35px;
  box-shadow: 0px 30px 60px #00000029;
`;

export const CardsBox = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 35px;
  z-index: 1;
`;
