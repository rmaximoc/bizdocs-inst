import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: flex;
    min-height: 750px;
  }
`;

export const MarginBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Carousel = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
