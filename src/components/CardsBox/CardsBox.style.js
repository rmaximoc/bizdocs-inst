import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
  margin: 100px auto 0;
`;

export const MarginBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 372px;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto 129px;

  @media screen and (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: 0 auto 29px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 372px;
  height: 335px;
  flex-direction: column;
  box-shadow: 0px 20px 60px #b4b4b429;
  border-radius: 6px;
  text-align: center;
  margin: 10px;
  padding: 53px;

  grid-column: ${({ columnPosition }) => columnPosition};

  @media screen and (max-width: 992px) {
    box-shadow: 0px 10px 20px #86868629;
    margin: 10px auto;
    width: 100%;
    max-height: unset;
    height: unset;
  }

  @media screen and (max-width: 1160px) {
    grid-column: unset;
  }
`;
