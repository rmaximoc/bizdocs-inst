import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 98px;

  @media screen and (max-width: 1376px) {
    min-width: 1220px;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 992px) {
    margin-left: 170px;
    justify-content: flex-start;
  }
`;

export const Box = styled.div`
  display: flex;
  text-align: center;
  padding: 27px;
  height: 125px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ color }) => color};
  width: 13.4%;

  @media screen and (max-width: 992px) {
    width: 13.8%;
  }
`;

export const Value = styled.h1`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const StampBox = styled.div`
  display: flex;
  margin-bottom: 24px;

  /** SAFARI ONLY */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      margin-bottom: 100px;
    }
  }
  /** SAFARI ONLY */
`;
