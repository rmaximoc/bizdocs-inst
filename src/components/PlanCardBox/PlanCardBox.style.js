import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  margin: 0px 10px 20px;
`;

export const SecondBox = styled.div`
  display: flex;
  margin: 0px 10px 20px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: #69b643;
  font-weight: 700;
  margin: 21px 0;
`;
