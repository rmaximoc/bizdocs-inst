import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 63px;
`;

export const MarginBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 372px;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
`;
