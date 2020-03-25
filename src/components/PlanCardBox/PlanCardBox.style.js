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
  margin: 0px 0px 20px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }

  /* @media screen and (max-width: 992px) {
    display: none;
  } */
`;

// export const MobileBox = styled.div`
//   display: none;
//   margin: 0 10px 28px;

//   background-color: red;

//   @media screen and (max-width: 992px) {
//     display: flex;
//   }
// `;

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
